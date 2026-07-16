"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  CreditCard,
  Search,
  Trash2,
  ExternalLink,
  ChevronRight,
  RefreshCw,
  X,
  FileText,
  DollarSign,
  CircleAlert,
  CircleCheck,
  CircleQuestionMark,
  LayoutDashboard,
  Shield,
  Menu,
  ArrowLeft,
  LogOut,
  FolderOpen
} from "lucide-react";

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  createdAt: string;
}

interface Order {
  _id: string;
  name: string;
  email: string;
  phone: string;
  bestTime: string;
  city: string;
  state: string;
  logoName: string;
  slogan?: string;
  industry: string;
  colorPreferences?: string;
  referenceLink?: string;
  fileName?: string;
  package: string;
  amount: string;
  paymentId?: string;
  orderId?: string;
  signature?: string;
  paymentStatus: "success" | "failed" | "pending" | "refunded";
  failureReason?: string;
  createdAt: string;
}

interface Stats {
  totalLeads: number;
  totalOrders: number;
  successfulOrders: number;
  failedOrders: number;
  pendingOrders: number;
  totalRevenue: number;
}

export default function AdminPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "leads" | "orders">("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Data States
  const [stats, setStats] = useState<Stats>({
    totalLeads: 0,
    totalOrders: 0,
    successfulOrders: 0,
    failedOrders: 0,
    pendingOrders: 0,
    totalRevenue: 0,
  });
  const [leads, setLeads] = useState<Lead[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Search & Filter States
  const [leadSearch, setLeadSearch] = useState("");
  const [orderSearch, setOrderSearch] = useState("");
  const [orderStatusFilter, setOrderStatusFilter] = useState("all");
  const [orderPackageFilter, setOrderPackageFilter] = useState("all");

  // Modal Details States
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const fetchDashboardData = async () => {
    setRefreshing(true);
    try {
      const statsRes = await fetch("/api/admin/stats");
      const statsData = await statsRes.json();
      if (statsData.ok) setStats(statsData.stats);

      const leadsRes = await fetch("/api/admin/leads");
      const leadsData = await leadsRes.json();
      if (leadsData.ok) setLeads(leadsData.leads);

      const ordersRes = await fetch("/api/admin/orders");
      const ordersData = await ordersRes.json();
      if (ordersData.ok) setOrders(ordersData.orders);
    } catch (err) {
      console.error("Error loading dashboard data:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (res.ok) {
        router.push("/admin/login");
        router.refresh();
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setLeads(leads.filter(lead => lead._id !== id));
        fetchDashboardData();
      }
    } catch (err) {
      console.error("Failed to delete lead:", err);
    }
  };

  const handleDeleteOrder = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      const res = await fetch(`/api/admin/orders?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setOrders(orders.filter(order => order._id !== id));
        fetchDashboardData();
      }
    } catch (err) {
      console.error("Failed to delete order:", err);
    }
  };

  const handleUpdatePaymentStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch("/api/admin/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, paymentStatus: newStatus }),
      });
      const data = await res.json();
      if (data.ok) {
        setOrders(orders.map(order => order._id === id ? { ...order, paymentStatus: data.order.paymentStatus } : order));
        if (selectedOrder && selectedOrder._id === id) {
          setSelectedOrder({ ...selectedOrder, paymentStatus: data.order.paymentStatus });
        }
        fetchDashboardData();
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
    lead.email.toLowerCase().includes(leadSearch.toLowerCase()) ||
    (lead.service && lead.service.toLowerCase().includes(leadSearch.toLowerCase()))
  );

  const filteredOrders = orders.filter(order => {
    const matchesSearch =
      order.name.toLowerCase().includes(orderSearch.toLowerCase()) ||
      order.email.toLowerCase().includes(orderSearch.toLowerCase()) ||
      order.logoName.toLowerCase().includes(orderSearch.toLowerCase()) ||
      (order.paymentId && order.paymentId.toLowerCase().includes(orderSearch.toLowerCase()));

    const matchesStatus = orderStatusFilter === "all" || order.paymentStatus === orderStatusFilter;
    const matchesPackage = orderPackageFilter === "all" || order.package.toLowerCase().includes(orderPackageFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesPackage;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 flex items-center gap-1 w-fit"><CircleCheck className="w-3.5 h-3.5" /> Paid</span>;
      case "failed":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-450 border border-red-500/20 flex items-center gap-1 w-fit"><CircleAlert className="w-3.5 h-3.5" /> Failed</span>;
      case "pending":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-450 border border-amber-500/20 flex items-center gap-1 w-fit"><CircleQuestionMark className="w-3.5 h-3.5" /> Pending</span>;
      case "refunded":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-450 border border-blue-500/20 flex items-center gap-1 w-fit"><RefreshCw className="w-3.5 h-3.5" /> Refunded</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-500/10 text-slate-400 border border-slate-500/20 flex items-center gap-1 w-fit">{status}</span>;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-3">
        <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
        <p className="text-slate-400 text-sm font-medium">Loading control panel...</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-100 flex overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-orange-600/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 border-r border-slate-800 shrink-0 relative z-10 h-full">
        <div className="h-16 flex items-center px-6 border-b border-slate-800 gap-3 bg-slate-900/50 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/25">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-white tracking-tight leading-tight">Brandingo</h1>
            <span className="text-[10px] text-blue-400 font-bold tracking-wider uppercase">Admin Portal</span>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition ${
              activeTab === "overview"
                ? "text-blue-400 bg-blue-500/10 border-l-2 border-blue-500 pl-3 shadow-sm"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border-l-2 border-transparent"
            }`}
          >
            <LayoutDashboard className="w-4.5 h-4.5" />
            Dashboard
          </button>
          
          <button
            onClick={() => setActiveTab("leads")}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition ${
              activeTab === "leads"
                ? "text-blue-400 bg-blue-500/10 border-l-2 border-blue-500 pl-3 shadow-sm"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border-l-2 border-transparent"
            }`}
          >
            <span className="flex items-center gap-3">
              <Users className="w-4.5 h-4.5" />
              Enquiry Leads
            </span>
            <span className={`px-2 py-0.5 text-[10px] rounded-full font-bold ${
              activeTab === "leads" ? "bg-blue-500 text-white shadow" : "bg-slate-800 text-slate-400"
            }`}>
              {leads.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("orders")}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition ${
              activeTab === "orders"
                ? "text-blue-400 bg-blue-500/10 border-l-2 border-blue-500 pl-3 shadow-sm"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border-l-2 border-transparent"
            }`}
          >
            <span className="flex items-center gap-3">
              <CreditCard className="w-4.5 h-4.5" />
              Orders & Payments
            </span>
            <span className={`px-2 py-0.5 text-[10px] rounded-full font-bold ${
              activeTab === "orders" ? "bg-blue-500 text-white shadow" : "bg-slate-800 text-slate-400"
            }`}>
              {orders.length}
            </span>
          </button>

          <div className="h-px bg-slate-800/60 my-5" />

          <a
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-xl transition"
          >
            <ArrowLeft className="w-4.5 h-4.5" />
            Main Website
          </a>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50 shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-slate-800/40 hover:bg-red-900/20 hover:text-red-400 border border-slate-800 hover:border-red-900/30 text-slate-350 font-semibold rounded-xl py-2.5 text-xs transition"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden bg-slate-950/85 backdrop-blur-md">
          <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col h-full">
            <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800 bg-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-white leading-none">Brandingo</h1>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Admin</span>
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white p-1">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
              <button
                onClick={() => { setActiveTab("overview"); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition ${
                  activeTab === "overview" ? "text-blue-400 bg-blue-500/10" : "text-slate-400 hover:bg-slate-850"
                }`}
              >
                <LayoutDashboard className="w-4.5 h-4.5" />
                Dashboard
              </button>

              <button
                onClick={() => { setActiveTab("leads"); setMobileMenuOpen(false); }}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition ${
                  activeTab === "leads" ? "text-blue-400 bg-blue-500/10" : "text-slate-400 hover:bg-slate-850"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Users className="w-4.5 h-4.5" />
                  Enquiry Leads
                </span>
                <span className="px-2 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded-full font-bold">
                  {leads.length}
                </span>
              </button>

              <button
                onClick={() => { setActiveTab("orders"); setMobileMenuOpen(false); }}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition ${
                  activeTab === "orders" ? "text-blue-400 bg-blue-500/10" : "text-slate-400 hover:bg-slate-855"
                }`}
              >
                <span className="flex items-center gap-3">
                  <CreditCard className="w-4.5 h-4.5" />
                  Orders & Payments
                </span>
                <span className="px-2 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded-full font-bold">
                  {orders.length}
                </span>
              </button>

              <div className="h-px bg-slate-800/60 my-4" />

              <a
                href="/"
                className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-xl"
              >
                <ArrowLeft className="w-4.5 h-4.5" />
                Main Website
              </a>
            </nav>
            <div className="p-4 border-t border-slate-800 bg-slate-900/50">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 bg-slate-800/50 hover:bg-red-900/20 hover:text-red-400 border border-slate-800 text-slate-350 font-semibold rounded-xl py-2.5 text-xs transition"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content Pane */}
      <div className="flex-1 flex flex-col min-w-0 relative z-10 h-full overflow-hidden bg-slate-950">
        
        {/* Top Header */}
        <header className="h-16 border-b border-slate-800 bg-slate-900/40 backdrop-blur-xl flex items-center justify-between px-6 shrink-0 z-20">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-slate-400 hover:text-white md:hidden hover:bg-slate-800 rounded-xl transition"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="font-bold text-lg text-white tracking-tight">
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "leads" && "Enquiry Leads Hub"}
              {activeTab === "orders" && "Orders & Payments"}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={fetchDashboardData}
              disabled={refreshing}
              className="p-2.5 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl transition disabled:opacity-50 border border-slate-800 bg-slate-900/30"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            </button>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/15">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Connected
            </span>
            <div className="h-8 w-[1px] bg-slate-800 hidden sm:block" />
            <span className="text-xs text-slate-400 font-semibold hidden sm:block">
              User: <span className="text-slate-200">sales_admin</span>
            </span>
          </div>
        </header>

        {/* Content Viewport - SCROLLABLE container */}
        {/* WE USE INLINE STYLE PADDING TO AVOID TAILWIND v4 COMPILER ISSUES OVERRIDING IT */}
        <main 
          className="flex-1 overflow-y-auto bg-slate-950 z-10"
          style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "32px" }}
        >
          
          {/* 1. Overview Tab */}
          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {/* Stats Counters */}
              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1-fraction))", 
                  gap: "24px",
                  width: "100%" 
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              >
                {/* Stats Card 1 */}
                <div 
                  className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl relative"
                  style={{ padding: "24px", minHeight: "135px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                >
                  <div>
                    <div className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Total Revenue</div>
                    <div className="text-3xl font-extrabold text-white mt-2 select-all">₹{stats.totalRevenue.toLocaleString("en-IN")}</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center absolute top-6 right-6 shadow-sm">
                    <DollarSign className="w-5 h-5" />
                  </div>
                </div>

                {/* Stats Card 2 */}
                <div 
                  className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl relative"
                  style={{ padding: "24px", minHeight: "135px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                >
                  <div>
                    <div className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Paid Orders</div>
                    <div className="text-3xl font-extrabold text-emerald-400 mt-2">{stats.successfulOrders}</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center absolute top-6 right-6 shadow-sm">
                    <CircleCheck className="w-5 h-5" />
                  </div>
                </div>

                {/* Stats Card 3 */}
                <div 
                  className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl relative"
                  style={{ padding: "24px", minHeight: "135px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                >
                  <div>
                    <div className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Failed / Pending</div>
                    <div className="text-3xl font-extrabold text-amber-500 mt-2">
                      {stats.failedOrders} <span className="text-slate-700 text-lg">/</span> {stats.pendingOrders}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-450 flex items-center justify-center absolute top-6 right-6 shadow-sm">
                    <CircleAlert className="w-5 h-5" />
                  </div>
                </div>

                {/* Stats Card 4 */}
                <div 
                  className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl relative"
                  style={{ padding: "24px", minHeight: "135px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                >
                  <div>
                    <div className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Total Leads</div>
                    <div className="text-3xl font-extrabold text-white mt-2">{stats.totalLeads}</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center absolute top-6 right-6 shadow-sm">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Split Screen Tables */}
              <div 
                style={{ display: "grid", gap: "24px", width: "100%" }}
                className="grid grid-cols-1 lg:grid-cols-2"
              >
                {/* Recent Leads */}
                <div 
                  className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg"
                  style={{ padding: "24px" }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-white tracking-tight">Recent Enquiry Leads</h3>
                    <button onClick={() => setActiveTab("leads")} className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1">
                      View All <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {leads.slice(0, 5).map(lead => (
                      <div 
                        key={lead._id} 
                        className="bg-slate-950/40 border border-slate-800 hover:border-slate-700 rounded-xl flex justify-between items-center transition"
                        style={{ padding: "16px" }}
                      >
                        <div>
                          <div className="font-semibold text-white text-sm">{lead.name}</div>
                          <div className="text-[11px] text-slate-400 mt-1">{lead.email} • <span className="text-blue-400 font-semibold">{lead.service || "General Enquiry"}</span></div>
                        </div>
                        <button onClick={() => setSelectedLead(lead)} className="p-2 hover:bg-slate-805 text-slate-400 hover:text-white rounded-xl border border-slate-800 transition">
                          <FileText className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    ))}
                    {leads.length === 0 && (
                      <div className="text-center py-10 border border-dashed border-slate-800 rounded-2xl text-slate-550 text-sm">
                        <FolderOpen className="w-8 h-8 mx-auto mb-3 opacity-30" />
                        No leads available
                      </div>
                    )}
                  </div>
                </div>

                {/* Recent Orders */}
                <div 
                  className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg"
                  style={{ padding: "24px" }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-white tracking-tight">Recent Transactions</h3>
                    <button onClick={() => setActiveTab("orders")} className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1">
                      View All <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {orders.slice(0, 5).map(order => (
                      <div 
                        key={order._id} 
                        className="bg-slate-950/40 border border-slate-800 hover:border-slate-700 rounded-xl flex justify-between items-center transition"
                        style={{ padding: "16px" }}
                      >
                        <div>
                          <div className="font-semibold text-white text-sm">{order.logoName}</div>
                          <div className="text-[11px] text-slate-400 mt-1">{order.package} • <span className="font-semibold text-slate-350">{order.amount}</span></div>
                        </div>
                        <div className="flex items-center gap-3">
                          {getStatusBadge(order.paymentStatus)}
                          <button onClick={() => setSelectedOrder(order)} className="p-2 hover:bg-slate-805 text-slate-400 hover:text-white rounded-xl border border-slate-800 transition">
                            <FileText className="w-4.5 h-4.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {orders.length === 0 && (
                      <div className="text-center py-10 border border-dashed border-slate-800 rounded-2xl text-slate-550 text-sm">
                        <FolderOpen className="w-8 h-8 mx-auto mb-3 opacity-30" />
                        No orders available
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Leads Tab */}
          {activeTab === "leads" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Filters Box */}
              <div 
                className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                style={{ padding: "24px" }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <h3 className="font-bold text-white text-base leading-none">Enquiries Filters</h3>
                  <p className="text-xs text-slate-400">Search submissions collected from standard contact forms</p>
                </div>
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search name, email or service..."
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 text-white text-sm rounded-xl py-2.5 pl-10 pr-4 focus:outline-none transition placeholder:text-slate-600 h-10"
                  />
                </div>
              </div>

              {/* Leads Table Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm min-w-[1000px]">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-950/40 text-slate-400 font-bold text-xs uppercase tracking-wider">
                        <th style={{ padding: "16px 24px" }} className="w-[250px]">Client Details</th>
                        <th style={{ padding: "16px 24px" }} className="w-[180px]">Requested Service</th>
                        <th style={{ padding: "16px 24px" }} className="w-[350px]">Client Message</th>
                        <th style={{ padding: "16px 24px" }} className="w-[160px]">Received Date</th>
                        <th style={{ padding: "16px 24px" }} className="text-right w-[140px] pr-8">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {filteredLeads.map(lead => (
                        <tr key={lead._id} className="hover:bg-slate-800/15 transition">
                          <td style={{ padding: "16px 24px" }}>
                            <div className="font-semibold text-white text-sm leading-tight">{lead.name}</div>
                            <div className="text-xs text-slate-450 mt-1.5 font-mono select-all">{lead.email}</div>
                            {lead.phone && <div className="text-[11px] text-slate-500 mt-1 font-mono select-all">{lead.phone}</div>}
                          </td>
                          <td style={{ padding: "16px 24px" }}>
                            <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/15">
                              {lead.service || "General Inquiry"}
                            </span>
                          </td>
                          <td style={{ padding: "16px 24px" }} className="text-slate-350 max-w-sm truncate leading-relaxed">
                            {lead.message}
                          </td>
                          <td style={{ padding: "16px 24px" }} className="text-slate-400 text-xs font-medium">
                            {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit"
                            })}
                          </td>
                          <td style={{ padding: "16px 24px" }} className="pr-8 text-right space-x-2 whitespace-nowrap">
                            <button
                              onClick={() => setSelectedLead(lead)}
                              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition"
                            >
                              Read Full
                            </button>
                            <button
                              onClick={() => handleDeleteLead(lead._id)}
                              className="p-2 bg-red-950/20 hover:bg-red-900/40 border border-red-900/20 hover:border-red-900/40 text-red-400 rounded-xl transition inline-flex items-center align-middle"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredLeads.length === 0 && (
                        <tr>
                          <td colSpan={5} style={{ padding: "64px 24px" }} className="text-center text-slate-500">
                            <FolderOpen className="w-12 h-12 mx-auto mb-4 opacity-25 text-slate-400" />
                            <div className="font-semibold text-slate-400">No leads found</div>
                            <div className="text-xs text-slate-550 mt-1.5">Try modifying your search string</div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 3. Orders Tab */}
          {activeTab === "orders" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Filters Box */}
              <div 
                className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
                style={{ padding: "24px" }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <h3 className="font-bold text-white text-base leading-none">Transactions Filters</h3>
                  <p className="text-xs text-slate-400">Filter checkout orders by name, status, or package tier</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-550" />
                    <input
                      type="text"
                      placeholder="Search company, customer name, order ID..."
                      value={orderSearch}
                      onChange={(e) => setOrderSearch(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 text-white text-sm rounded-xl py-2.5 pl-10 pr-4 focus:outline-none transition placeholder:text-slate-600 h-10"
                    />
                  </div>

                  <select
                    value={orderStatusFilter}
                    onChange={(e) => setOrderStatusFilter(e.target.value)}
                    className="bg-slate-950 border border-slate-800 text-slate-350 text-xs rounded-xl px-4 py-2.5 h-10 focus:outline-none focus:border-blue-500 transition font-semibold cursor-pointer"
                  >
                    <option value="all">All Statuses</option>
                    <option value="success">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                    <option value="refunded">Refunded</option>
                  </select>

                  <select
                    value={orderPackageFilter}
                    onChange={(e) => setOrderPackageFilter(e.target.value)}
                    className="bg-slate-950 border border-slate-800 text-slate-350 text-xs rounded-xl px-4 py-2.5 h-10 focus:outline-none focus:border-blue-500 transition font-semibold cursor-pointer"
                  >
                    <option value="all">All Packages</option>
                    <option value="silver">Silver Package</option>
                    <option value="gold">Gold Package</option>
                    <option value="diamond">Diamond Package</option>
                    <option value="platinum">Platinum Package</option>
                  </select>
                </div>
              </div>

              {/* Orders Table Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm min-w-[1250px]">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-950/40 text-slate-400 font-bold text-xs uppercase tracking-wider">
                        <th style={{ padding: "16px 24px" }} className="w-[200px]">Company / Brand</th>
                        <th style={{ padding: "16px 24px" }} className="w-[220px]">Customer Details</th>
                        <th style={{ padding: "16px 24px" }} className="w-[160px]">Call Schedule</th>
                        <th style={{ padding: "16px 24px" }} className="w-[160px]">Location</th>
                        <th style={{ padding: "16px 24px" }} className="w-[130px]">Package Tier</th>
                        <th style={{ padding: "16px 24px" }} className="w-[120px]">Billing Price</th>
                        <th style={{ padding: "16px 24px" }} className="w-[140px]">Payment Status</th>
                        <th style={{ padding: "16px 24px" }} className="w-[200px]">Gateway Identifiers</th>
                        <th style={{ padding: "16px 24px" }} className="w-[120px]">Date</th>
                        <th style={{ padding: "16px 24px" }} className="text-right w-[120px] pr-8">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {filteredOrders.map(order => (
                        <tr key={order._id} className="hover:bg-slate-800/15 transition">
                          {/* Company Details */}
                          <td style={{ padding: "16px 24px" }}>
                            <div className="font-semibold text-white text-sm leading-tight">{order.logoName}</div>
                            <div className="text-xs text-blue-400 mt-1 font-semibold">{order.industry}</div>
                            {order.slogan && <div className="text-[10px] text-slate-500 mt-1 italic">"{order.slogan}"</div>}
                          </td>
                          {/* Customer Details */}
                          <td style={{ padding: "16px 24px" }}>
                            <div className="font-semibold text-slate-200 text-sm leading-tight">{order.name}</div>
                            <div className="text-xs text-slate-450 mt-1 font-mono select-all">{order.email}</div>
                            <div className="text-xs text-slate-500 mt-0.5 font-mono select-all">{order.phone}</div>
                          </td>
                          {/* Call Time */}
                          <td style={{ padding: "16px 24px" }} className="text-slate-300 text-xs font-semibold leading-relaxed">
                            {order.bestTime}
                          </td>
                          {/* Location */}
                          <td style={{ padding: "16px 24px" }} className="text-slate-300 text-xs">
                            <div className="font-medium text-slate-200">{order.city}</div>
                            <div className="text-slate-500 text-[10px] mt-1 font-semibold">{order.state}</div>
                          </td>
                          {/* Package */}
                          <td style={{ padding: "16px 24px" }}>
                            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-bold border border-slate-700">
                              {order.package}
                            </span>
                          </td>
                          {/* Price */}
                          <td style={{ padding: "16px 24px" }} className="font-bold text-slate-205 text-sm">
                            {order.amount}
                          </td>
                          {/* Status and quick selector */}
                          <td style={{ padding: "16px 24px" }}>
                            <div className="flex flex-col gap-2">
                              {getStatusBadge(order.paymentStatus)}
                              <select
                                value={order.paymentStatus}
                                onChange={(e) => handleUpdatePaymentStatus(order._id, e.target.value)}
                                className="bg-slate-950 border border-slate-800 text-[11px] text-slate-400 rounded-md px-1.5 py-0.5 w-fit focus:outline-none cursor-pointer"
                              >
                                <option value="pending">Pending</option>
                                <option value="success">Paid</option>
                                <option value="failed">Failed</option>
                                <option value="refunded">Refunded</option>
                              </select>
                            </div>
                          </td>
                          {/* Gateway Identifiers */}
                          <td style={{ padding: "16px 24px" }} className="font-mono text-xs text-slate-450">
                            {order.paymentId ? (
                              <div className="text-slate-300">PayID: <span className="text-slate-400 font-semibold select-all">{order.paymentId}</span></div>
                            ) : (
                              <div className="text-slate-500">PayID: N/A</div>
                            )}
                            {order.orderId && <div className="text-slate-500 mt-1 select-all font-mono">OrderID: {order.orderId}</div>}
                          </td>
                          {/* Date */}
                          <td style={{ padding: "16px 24px" }} className="text-xs text-slate-400 whitespace-nowrap font-medium font-mono">
                            {new Date(order.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric"
                            })}
                          </td>
                          {/* Actions */}
                          <td style={{ padding: "16px 24px" }} className="pr-8 text-right space-x-2 whitespace-nowrap">
                            <button
                              onClick={() => setSelectedOrder(order)}
                              className="px-3.5 py-1.5 bg-slate-805 hover:bg-slate-750 border border-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition"
                            >
                              Details
                            </button>
                            <button
                              onClick={() => handleDeleteOrder(order._id)}
                              className="p-2 bg-red-950/20 hover:bg-red-900/40 border border-red-900/20 hover:border-red-900/40 text-red-450 rounded-xl transition inline-flex items-center align-middle"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredOrders.length === 0 && (
                        <tr>
                          <td colSpan={10} style={{ padding: "64px 24px" }} className="text-center text-slate-500">
                            <FolderOpen className="w-12 h-12 mx-auto mb-4 opacity-25 text-slate-400" />
                            <div className="font-semibold text-slate-400">No transactions found</div>
                            <div className="text-xs text-slate-550 mt-1.5">Try modifying your filters or search strings</div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Lead Message View Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden relative">
            <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/60">
              <h4 className="font-bold text-white text-lg tracking-tight">Lead Enquiry Details</h4>
              <button onClick={() => setSelectedLead(null)} className="text-slate-450 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Client Name</label>
                  <p className="text-sm font-semibold text-white mt-1">{selectedLead.name}</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Requested Service</label>
                  <p className="text-sm font-semibold text-blue-400 mt-1">{selectedLead.service || "General Inquiry"}</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Email Address</label>
                  <p className="text-sm font-semibold text-slate-300 mt-1 font-mono select-all">{selectedLead.email}</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Phone Number</label>
                  <p className="text-sm font-semibold text-slate-300 mt-1 font-mono select-all">{selectedLead.phone || "Not Provided"}</p>
                </div>
              </div>
              <div className="border-t border-slate-800 pt-5">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Client Message</label>
                <div className="mt-2 bg-slate-955 border border-slate-800 p-4 rounded-xl text-slate-300 text-sm whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
                  {selectedLead.message}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-slate-800 bg-slate-900/60 flex justify-end gap-3">
              <button
                onClick={() => handleDeleteLead(selectedLead._id).then(() => setSelectedLead(null))}
                className="px-4 py-2 bg-red-955/35 hover:bg-red-955/50 border border-red-900/20 hover:border-red-900/40 text-red-400 font-bold rounded-xl text-xs transition"
              >
                Delete Lead
              </button>
              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-slate-200 font-bold rounded-xl text-xs border border-slate-700/50 transition"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Details View Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden my-8">
            <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/60">
              <div>
                <h4 className="font-bold text-white text-lg tracking-tight">Order Details : {selectedOrder.logoName}</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mt-1">Package: {selectedOrder.package}</p>
              </div>
              <button onClick={() => setSelectedOrder(null)} className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Payment Status</div>
                  <div className="mt-1.5 flex items-center gap-3">
                    {getStatusBadge(selectedOrder.paymentStatus)}
                    <span className="text-sm font-bold text-white">{selectedOrder.amount}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:items-end">
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Manage Status</div>
                  <select
                    value={selectedOrder.paymentStatus}
                    onChange={(e) => handleUpdatePaymentStatus(selectedOrder._id, e.target.value)}
                    className="bg-slate-900 border border-slate-800 text-xs text-slate-350 rounded-lg px-2.5 py-1 focus:outline-none cursor-pointer"
                  >
                    <option value="pending">Pending</option>
                    <option value="success">Paid</option>
                    <option value="failed">Failed</option>
                    <option value="refunded">Refunded</option>
                  </select>
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-3">
                <h5 className="font-bold text-xs text-blue-400 uppercase tracking-wider">Customer & Billing Details</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/40 p-4 border border-slate-800 rounded-xl text-sm">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold">Customer Name</span>
                    <p className="font-semibold text-white mt-0.5">{selectedOrder.name}</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold">Phone Number</span>
                    <p className="font-semibold text-white mt-0.5 font-mono select-all">{selectedOrder.phone}</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold">Email Address</span>
                    <p className="font-semibold text-white mt-0.5 font-mono select-all">{selectedOrder.email}</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold">Best Time to Call</span>
                    <p className="font-semibold text-white mt-0.5">{selectedOrder.bestTime}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-xs text-slate-500 font-semibold">City / State</span>
                    <p className="font-semibold text-white mt-0.5">{selectedOrder.city}, {selectedOrder.state}</p>
                  </div>
                </div>
              </div>

              {/* Brand Logo Preference */}
              <div className="space-y-3">
                <h5 className="font-bold text-xs text-blue-400 uppercase tracking-wider">Brand & Design Specifications</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/40 p-4 border border-slate-800 rounded-xl text-sm">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold">Business / Logo Name</span>
                    <p className="font-semibold text-white mt-0.5">{selectedOrder.logoName}</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold">Industry Type</span>
                    <p className="font-semibold text-white mt-0.5">{selectedOrder.industry}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-xs text-slate-500 font-semibold">Slogan / Tagline</span>
                    <p className="text-slate-200 mt-0.5">{selectedOrder.slogan || "None Provided"}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-xs text-slate-500 font-semibold">Color Preferences</span>
                    <p className="text-slate-200 mt-0.5">{selectedOrder.colorPreferences || "None Specified"}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-xs text-slate-500 font-semibold">Reference Inspiration Link</span>
                    {selectedOrder.referenceLink ? (
                      <p className="text-blue-400 mt-0.5 break-all flex items-center gap-1 font-mono">
                        <a href={selectedOrder.referenceLink} target="_blank" className="hover:underline">{selectedOrder.referenceLink}</a>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </p>
                    ) : (
                      <p className="text-slate-500 mt-0.5">None Provided</p>
                    )}
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold">Attachment File Name</span>
                    <p className="text-slate-200 mt-1 font-semibold flex items-center gap-2">
                      {selectedOrder.fileName ? (
                        <>
                          <FileText className="w-4.5 h-4.5 text-emerald-450" />
                          <span className="select-all">{selectedOrder.fileName}</span>
                        </>
                      ) : (
                        "No File Uploaded"
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Transactions Logs */}
              <div className="space-y-3">
                <h5 className="font-bold text-xs text-blue-400 uppercase tracking-wider">Gateway transaction data</h5>
                <div className="bg-slate-950/40 p-4 border border-slate-800 rounded-xl space-y-3 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-slate-500 font-semibold">Razorpay Order ID</span>
                      <p className="font-mono text-xs text-slate-300 mt-0.5 select-all">{selectedOrder.orderId || "N/A"}</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-semibold">Razorpay Payment ID</span>
                      <p className="font-mono text-xs text-slate-300 mt-0.5 select-all">{selectedOrder.paymentId || "N/A"}</p>
                    </div>
                  </div>
                  {selectedOrder.failureReason && (
                    <div className="border-t border-slate-800 pt-3">
                      <span className="text-xs text-red-500 font-semibold">Gateway Failure Reason</span>
                      <p className="text-red-400 font-bold text-xs mt-1 leading-relaxed">{selectedOrder.failureReason}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-slate-800 bg-slate-900/60 flex justify-end gap-3">
              <button
                onClick={() => handleDeleteOrder(selectedOrder._id).then(() => setSelectedOrder(null))}
                className="px-4 py-2 bg-red-950/30 hover:bg-red-955/55 border border-red-900/20 hover:border-red-900/40 text-red-400 font-bold rounded-xl text-xs transition"
              >
                Delete Order
              </button>
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-slate-200 font-bold rounded-xl text-xs border border-slate-700/50 transition"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
