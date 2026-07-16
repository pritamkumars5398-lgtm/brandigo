"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Password is required");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (data.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.error || "Invalid password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 relative overflow-hidden" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "16px" }}>
      {/* Dynamic Background Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0b3c5d]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-[#f58220]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-xl relative z-10" style={{ width: "100%", maxWidth: "440px", padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px" }}>
          <div className="bg-[#f58220]/10 border border-[#f58220]/20 text-[#f58220] rounded-xl flex items-center justify-center" style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0b3c5d] tracking-tight">Admin Portal</h1>
            <p className="text-sm text-slate-500 mt-2">Enter security password to access control panel</p>
          </div>
        </div>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-550">
              Security Password
            </label>
            <div style={{ position: "relative", width: "100%" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-50 border border-slate-250 text-slate-800 rounded-xl transition placeholder:text-slate-400"
                style={{ width: "100%", paddingLeft: "16px", paddingRight: "48px", height: "48px", outline: "none", borderRadius: "12px" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 hover:text-slate-700 transition"
                style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer" }}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {error && <p className="text-xs text-red-650 mt-2 font-medium" style={{ marginTop: "6px" }}>{error}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#f58220] hover:bg-[#ff933c] text-white font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#f58220]/15"
            style={{ height: "48px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "none", cursor: "pointer" }}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Authenticating...
              </>
            ) : (
              "Login to Dashboard"
            )}
          </button>
        </form>

        <div className="border-t border-slate-200" style={{ borderTop: "1px solid rgb(226, 232, 240)", paddingTop: "20px", textAlign: "center" }}>
          <a
            href="/"
            className="text-xs text-slate-550 hover:text-slate-700 transition underline underline-offset-4 font-semibold"
          >
            Back to Website
          </a>
        </div>
      </div>
    </div>
  );
}
