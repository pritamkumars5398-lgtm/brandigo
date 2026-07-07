"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Script from "next/script";
import { Check, ArrowRight, ArrowLeft, Send, Phone, Mail, Upload, Calendar } from "lucide-react";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", 
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", 
  "Lakshadweep", "Puducherry"
];

const packages: Record<string, { name: string; price: string }> = {
  basic: {
    name: "Basic Bliss Package",
    price: "₹1999",
  },
  premium: {
    name: "Premium Prestige Package",
    price: "₹4999",
  },
  ultimate: {
    name: "Ultimate Elegance Package",
    price: "₹9999",
  },
};

const iBase: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  background: "#f9fafb",
  border: "1.5px solid #e5e7eb",
  borderRadius: "0",
  fontSize: "14px",
  color: "#1a1a1a",
  outline: "none",
  transition: "border-color 0.2s",
};

function OrderFormContent() {
  const searchParams = useSearchParams();
  const packageKey = (searchParams.get("package") || "premium").toLowerCase();
  const selectedPkg = packages[packageKey] || packages.premium;

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [txId, setTxId] = useState("");
  
  // Step 1: Contact details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bestTime, setBestTime] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  // Step 2: Brand details
  const [logoName, setLogoName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [industry, setIndustry] = useState("");
  const [colorPreferences, setColorPreferences] = useState("");
  const [referenceLink, setReferenceLink] = useState("");
  const [referenceFile, setReferenceFile] = useState<File | null>(null);

  // Honeypot
  const [company, setCompany] = useState("");

  // Validation errors for current step
  const [stepErrors, setStepErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Full Name is required";
    if (!email.trim()) {
      errs.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!phone.trim()) {
      errs.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(phone.replace(/[^0-9]/g, ""))) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }
    if (!bestTime) errs.bestTime = "Please select the best time for a designer call";
    if (!city.trim()) errs.city = "City is required";
    if (!state) errs.state = "State selection is required";

    setStepErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!logoName.trim()) errs.logoName = "Logo / Business Name is required";
    if (!industry.trim()) errs.industry = "Nature of Business / Industry is required";

    setStepErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      if (validateStep2()) setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setStepErrors({});
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setError("");
    setLoading(true);

    try {
      const numericPrice = Number(selectedPkg.price.replace(/[^0-9]/g, ""));
      
      const createRes = await fetch("/api/order/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: numericPrice }),
      });
      const createData = await createRes.json();
      if (!createRes.ok || !createData.ok) {
        throw new Error(createData.error || "Failed to initiate payment. Please try again.");
      }

      const { orderId } = createData;

      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      const options = {
        key: keyId,
        amount: createData.amount,
        currency: createData.currency,
        name: "Brandingo",
        description: `Payment for ${selectedPkg.name}`,
        order_id: orderId,
        handler: async function (response: any) {
          try {
            setLoading(true);
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", `+91 ${phone}`);
            formData.append("bestTime", bestTime);
            formData.append("city", city);
            formData.append("state", state);
            formData.append("logoName", logoName);
            formData.append("slogan", slogan);
            formData.append("industry", industry);
            formData.append("colorPreferences", colorPreferences);
            formData.append("referenceLink", referenceLink);
            formData.append("package", selectedPkg.name);
            formData.append("amount", selectedPkg.price);
            
            formData.append("paymentId", response.razorpay_payment_id);
            formData.append("orderId", response.razorpay_order_id);
            formData.append("signature", response.razorpay_signature);

            if (referenceFile) {
              formData.append("file", referenceFile);
            }
            if (company) {
              formData.append("company", company);
            }

            const finalRes = await fetch("/api/order", {
              method: "POST",
              body: formData,
            });

            const finalData = await finalRes.json();
            if (!finalRes.ok || !finalData.ok) {
              throw new Error(finalData.error || "Failed to confirm payment signature.");
            }

            setTxId(response.razorpay_payment_id);
            setStep(4);
          } catch (err) {
            setError(err instanceof Error ? err.message : "Payment signature verification failed.");
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: name,
          email: email,
          contact: `+91${phone}`,
        },
        notes: {
          package: selectedPkg.name,
          logoName: logoName,
        },
        theme: {
          color: "#0b3c5d",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", async function (response: any) {
        const failDesc = response.error.description || "Payment failed or modal closed.";
        setError(failDesc);
        setLoading(false);

        try {
          const formData = new FormData();
          formData.append("name", name);
          formData.append("email", email);
          formData.append("phone", `+91 ${phone}`);
          formData.append("bestTime", bestTime);
          formData.append("city", city);
          formData.append("state", state);
          formData.append("logoName", logoName);
          formData.append("slogan", slogan);
          formData.append("industry", industry);
          formData.append("colorPreferences", colorPreferences);
          formData.append("referenceLink", referenceLink);
          formData.append("package", selectedPkg.name);
          formData.append("amount", selectedPkg.price);
          
          formData.append("paymentStatus", "failed");
          formData.append("failureReason", failDesc);
          formData.append("paymentId", response.error.metadata?.payment_id || "");
          formData.append("orderId", orderId);
          formData.append("signature", "");

          if (referenceFile) {
            formData.append("file", referenceFile);
          }
          if (company) {
            formData.append("company", company);
          }

          await fetch("/api/order", {
            method: "POST",
            body: formData,
          });
        } catch (err) {
          console.error("Failed to submit failure notification:", err);
        }
      });
      rzp.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment initialization failed.");
      setLoading(false);
    }
  };

  const stepHeadingStyle: React.CSSProperties = {
    fontSize: "1.4rem",
    fontWeight: 800,
    color: "#0b3c5d",
    marginBottom: "20px",
    borderBottom: "2px solid rgba(245,130,32,0.15)",
    paddingBottom: "8px",
  };

  const formLabelStyle: React.CSSProperties = {
    display: "block",
    color: "#4b5563",
    fontSize: "13px",
    fontWeight: 600,
    marginBottom: "6px",
  };

  const errorTextStyle: React.CSSProperties = {
    color: "#dc2626",
    fontSize: "12px",
    marginTop: "4px",
  };

  return (
    <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", padding: "44px 40px", position: "relative", overflow: "hidden", minHeight: "560px" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg,#f58220,#ff933c,#f58220)" }} />

      {/* Progress bar */}
      {step < 4 && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          {[
            { num: 1, label: "Contact Details" },
            { num: 2, label: "Brand Info" },
            { num: 3, label: "Review Order" }
          ].map((s) => {
            const active = step >= s.num;
            const current = step === s.num;
            return (
              <div key={s.num} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: current ? "#f58220" : active ? "#0b3c5d" : "#e5e7eb",
                  color: active ? "#fff" : "#9ca3af",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "14px",
                  zIndex: 2,
                  transition: "background 0.3s, color 0.3s"
                }}>
                  {step > s.num ? <Check size={16} /> : s.num}
                </div>
                <span style={{ fontSize: "11px", fontWeight: active ? 700 : 500, color: active ? "#0b3c5d" : "#9ca3af", marginTop: "8px", textAlign: "center" }}>
                  {s.label}
                </span>
                {s.num < 3 && (
                  <div style={{
                    position: "absolute",
                    top: "18px",
                    left: "50%",
                    right: "-50%",
                    height: "2px",
                    background: step > s.num ? "#0b3c5d" : "#e5e7eb",
                    zIndex: 1
                  }} />
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Form content */}
      <form onSubmit={handleSubmit}>
        {/* Step 1: Contact Details */}
        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h3 style={stepHeadingStyle}>Step 1: Contact & Billing Details</h3>
            
            <div>
              <label style={formLabelStyle}>Full Name *</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="John Doe" 
                style={iBase} 
                onFocus={(e) => (e.target.style.borderColor = "#f58220")} 
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} 
              />
              {stepErrors.name && <p style={errorTextStyle}>{stepErrors.name}</p>}
            </div>

            <div>
              <label style={formLabelStyle}>Email Address * (Where final source files will be sent)</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="john@example.com" 
                style={iBase} 
                onFocus={(e) => (e.target.style.borderColor = "#f58220")} 
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} 
              />
              {stepErrors.email && <p style={errorTextStyle}>{stepErrors.email}</p>}
            </div>

            <div>
              <label style={formLabelStyle}>Phone Number *</label>
              <div style={{ display: "flex", gap: "10px" }}>
                <span style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  background: "#e5e7eb", 
                  border: "1.5px solid #e5e7eb", 
                  padding: "0 16px", 
                  fontSize: "14px", 
                  fontWeight: 600, 
                  color: "#374151" 
                }}>+91</span>
                <input 
                  type="tel" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  placeholder="9876543210" 
                  style={{ ...iBase, flex: 1 }} 
                  onFocus={(e) => (e.target.style.borderColor = "#f58220")} 
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} 
                />
              </div>
              {stepErrors.phone && <p style={errorTextStyle}>{stepErrors.phone}</p>}
            </div>

            <div>
              <label style={formLabelStyle}>Best Time for Designer Call *</label>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
                {[
                  { value: "Morning (10:00 AM - 1:00 PM)", label: "Morning (10:00 AM - 1:00 PM)" },
                  { value: "Afternoon (1:00 PM - 4:00 PM)", label: "Afternoon (1:00 PM - 4:00 PM)" },
                  { value: "Evening (4:00 PM - 7:00 PM)", label: "Evening (4:00 PM - 7:00 PM)" }
                ].map((option) => (
                  <label key={option.value} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#374151", cursor: "pointer" }}>
                    <input 
                      type="radio" 
                      name="bestTime" 
                      value={option.value} 
                      checked={bestTime === option.value}
                      onChange={() => setBestTime(option.value)}
                      style={{ accentColor: "#f58220", width: "16px", height: "16px" }}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
              {stepErrors.bestTime && <p style={errorTextStyle}>{stepErrors.bestTime}</p>}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={formLabelStyle}>City *</label>
                <input 
                  type="text" 
                  value={city} 
                  onChange={(e) => setCity(e.target.value)} 
                  placeholder="e.g. Ahmedabad" 
                  style={iBase} 
                  onFocus={(e) => (e.target.style.borderColor = "#f58220")} 
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} 
                />
                {stepErrors.city && <p style={errorTextStyle}>{stepErrors.city}</p>}
              </div>

              <div>
                <label style={formLabelStyle}>State *</label>
                <select 
                  value={state} 
                  onChange={(e) => setState(e.target.value)} 
                  style={iBase}
                  onFocus={(e) => (e.target.style.borderColor = "#f58220")} 
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} 
                >
                  <option value="">Select State</option>
                  {indianStates.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
                {stepErrors.state && <p style={errorTextStyle}>{stepErrors.state}</p>}
              </div>
            </div>

            <button 
              type="button" 
              onClick={handleNext} 
              style={{ 
                marginTop: "16px", 
                padding: "15px", 
                background: "#f58220", 
                color: "#fff", 
                border: "none", 
                fontWeight: 800, 
                fontSize: "14px", 
                letterSpacing: "1px", 
                textTransform: "uppercase", 
                cursor: "pointer", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "8px" 
              }}
            >
              Continue to Step 2 <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Step 2: Brand & Logo Details */}
        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h3 style={stepHeadingStyle}>Step 2: Brand & Logo Information</h3>

            <div>
              <label style={formLabelStyle}>Logo Name / Business Name * (Exactly how it should appear)</label>
              <input 
                type="text" 
                value={logoName} 
                onChange={(e) => setLogoName(e.target.value)} 
                placeholder="e.g. Brandingo" 
                style={iBase} 
                onFocus={(e) => (e.target.style.borderColor = "#f58220")} 
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} 
              />
              {stepErrors.logoName && <p style={errorTextStyle}>{stepErrors.logoName}</p>}
            </div>

            <div>
              <label style={formLabelStyle}>Slogan or Tagline (Optional)</label>
              <input 
                type="text" 
                value={slogan} 
                onChange={(e) => setSlogan(e.target.value)} 
                placeholder="e.g. Build Your Brand's Journey" 
                style={iBase} 
                onFocus={(e) => (e.target.style.borderColor = "#f58220")} 
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} 
              />
            </div>

            <div>
              <label style={formLabelStyle}>Nature of Business / Industry * (e.g. Cafe, Real Estate, Tech Startup)</label>
              <input 
                type="text" 
                value={industry} 
                onChange={(e) => setIndustry(e.target.value)} 
                placeholder="e.g. Branding Agency" 
                style={iBase} 
                onFocus={(e) => (e.target.style.borderColor = "#f58220")} 
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} 
              />
              {stepErrors.industry && <p style={errorTextStyle}>{stepErrors.industry}</p>}
            </div>

            <div>
              <label style={formLabelStyle}>Color Preferences (Optional) (e.g. Blues, Pastel, Minimal Black/White)</label>
              <input 
                type="text" 
                value={colorPreferences} 
                onChange={(e) => setColorPreferences(e.target.value)} 
                placeholder="e.g. Warm Orange & Slate Blue" 
                style={iBase} 
                onFocus={(e) => (e.target.style.borderColor = "#f58220")} 
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} 
              />
            </div>

            <div>
              <label style={formLabelStyle}>Reference / Inspiration Link (Optional) (Drop a link of a logo you like/dislike)</label>
              <input 
                type="url" 
                value={referenceLink} 
                onChange={(e) => setReferenceLink(e.target.value)} 
                placeholder="https://pin.it/example-logo" 
                style={iBase} 
                onFocus={(e) => (e.target.style.borderColor = "#f58220")} 
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} 
              />
            </div>

            <div>
              <label style={formLabelStyle}>Or Upload Inspiration Image (Optional)</label>
              <div style={{
                position: "relative",
                border: "1.5px dashed #ccc",
                background: "#f9fafb",
                padding: "20px",
                textAlign: "center",
                cursor: "pointer"
              }}>
                <input 
                  type="file" 
                  accept="image/*,.pdf,.ai,.zip" 
                  onChange={(e) => setReferenceFile(e.target.files?.[0] || null)}
                  style={{
                    position: "absolute",
                    top: 0, left: 0, width: "100%", height: "100%",
                    opacity: 0, cursor: "pointer"
                  }}
                />
                <Upload size={24} style={{ color: "#888", margin: "0 auto 8px" }} />
                <p style={{ fontSize: "13px", color: "#555", margin: 0 }}>
                  {referenceFile ? `File Selected: ${referenceFile.name}` : "Click or Drag to Upload Reference (PDF, PNG, JPG)"}
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }}>
              <button 
                type="button" 
                onClick={handleBack} 
                style={{ 
                  padding: "15px", 
                  background: "#6b7280", 
                  color: "#fff", 
                  border: "none", 
                  fontWeight: 800, 
                  fontSize: "14px", 
                  letterSpacing: "1px", 
                  textTransform: "uppercase", 
                  cursor: "pointer", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "8px" 
                }}
              >
                <ArrowLeft size={16} /> Back
              </button>
              
              <button 
                type="button" 
                onClick={handleNext} 
                style={{ 
                  padding: "15px", 
                  background: "#f58220", 
                  color: "#fff", 
                  border: "none", 
                  fontWeight: 800, 
                  fontSize: "14px", 
                  letterSpacing: "1px", 
                  textTransform: "uppercase", 
                  cursor: "pointer", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "8px" 
                }}
              >
                Continue <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Support info */}
        {step === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h3 style={stepHeadingStyle}>Step 3: Review & Submit</h3>

            {/* Selected Package Card */}
            <div style={{ 
              background: "linear-gradient(135deg, #0b3c5d 0%, #175078 100%)", 
              color: "#fff", 
              padding: "24px", 
              borderRadius: "0", 
              border: "1.5px solid #0b3c5d" 
            }}>
              <p style={{ fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", opacity: 0.8, margin: "0 0 6px" }}>Selected Package</p>
              <h4 style={{ fontSize: "1.6rem", fontWeight: 800, margin: "0 0 12px" }}>{selectedPkg.name}</h4>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "12px" }}>
                <span style={{ fontSize: "14px" }}>Total Amount (All-inclusive):</span>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "#f58220" }}>{selectedPkg.price}</span>
              </div>
            </div>

            {/* Contact Details Recap */}
            <div style={{ background: "#f8f9fb", border: "1px solid #e5e7eb", padding: "18px" }}>
              <h5 style={{ fontSize: "14px", fontWeight: 700, color: "#0b3c5d", marginBottom: "8px" }}>Billing & Brand Summary</h5>
              <div style={{ fontSize: "13px", color: "#555", display: "grid", gap: "4px" }}>
                <p><strong>Name:</strong> {name} ({email})</p>
                <p><strong>Phone & Call Time:</strong> {phone} — {bestTime}</p>
                <p><strong>Location:</strong> {city}, {state}</p>
                <p><strong>Logo Name:</strong> {logoName}</p>
                <p><strong>Industry:</strong> {industry}</p>
              </div>
            </div>

            {/* Customer Support Info */}
            <div style={{ background: "#fff5eb", border: "1.5px solid rgba(245, 130, 32, 0.2)", padding: "20px" }}>
              <h5 style={{ fontSize: "14px", fontWeight: 800, color: "#1a1a1a", marginBottom: "6px" }}>Customer Support</h5>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.6", margin: "0 0 12px" }}>
                We are here to help! Our team is available Monday to Saturday, 10:00 AM to 07:00 PM.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#1a1a1a" }}>
                <a href="tel:+919979992804" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "inherit", fontWeight: 600 }}>
                  <Phone size={14} style={{ color: "#f58220" }} /> Call / WhatsApp: +91 99799 92804
                </a>
                <a href="mailto:support@brandingo.in" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "inherit", fontWeight: 600 }}>
                  <Mail size={14} style={{ color: "#f58220" }} /> Email Us: support@brandingo.in
                </a>
              </div>
            </div>

            {/* Honeypot hidden input */}
            <input 
              type="text" 
              name="company" 
              tabIndex={-1} 
              autoComplete="off" 
              value={company} 
              onChange={(e) => setCompany(e.target.value)} 
              style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} 
              aria-hidden="true" 
            />

            {error && <p style={{ color: "#dc2626", fontSize: "13.5px", textAlign: "center", fontWeight: 600 }}>{error}</p>}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "16px", marginTop: "8px" }}>
              <button 
                type="button" 
                onClick={handleBack} 
                style={{ 
                  padding: "15px", 
                  background: "#6b7280", 
                  color: "#fff", 
                  border: "none", 
                  fontWeight: 800, 
                  fontSize: "14px", 
                  letterSpacing: "1px", 
                  textTransform: "uppercase", 
                  cursor: "pointer", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "8px" 
                }}
              >
                <ArrowLeft size={16} /> Back
              </button>
              
              <button 
                type="submit" 
                disabled={loading} 
                style={{ 
                  padding: "15px", 
                  background: "#f58220", 
                  color: "#fff", 
                  border: "none", 
                  fontWeight: 800, 
                  fontSize: "14px", 
                  letterSpacing: "1px", 
                  textTransform: "uppercase", 
                  cursor: loading ? "wait" : "pointer", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "8px" 
                }}
              >
                {loading ? "Processing..." : <>Confirm & Order <Send size={16} /></>}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Success Screen */}
        {step === 4 && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ 
              width: "72px", 
              height: "72px", 
              background: "#22c55e", 
              color: "#fff", 
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              margin: "0 auto 24px" 
            }}>
              <Check size={36} />
            </div>

            <h3 style={{ fontSize: "1.8rem", fontWeight: 900, color: "#0b3c5d", marginBottom: "12px" }}>Order Placed Successfully!</h3>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.7", maxWidth: "480px", margin: "0 auto 28px" }}>
              Thank you, <strong>{name}</strong>! Your order details for the <strong>{selectedPkg.name}</strong> have been received. 
              Our team will review your requirements and call you at your preferred time.
            </p>

            <div style={{ 
              background: "linear-gradient(135deg, #fff5eb 0%, #fff 100%)", 
              border: "1.5px solid rgba(245, 130, 32, 0.2)", 
              padding: "24px", 
              textAlign: "left", 
              maxWidth: "480px", 
              margin: "0 auto 32px" 
            }}>
              <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#1a1a1a", borderBottom: "1.5px solid rgba(245,130,32,0.15)", paddingBottom: "6px", marginBottom: "14px" }}>Order Information:</h4>
              <p style={{ fontSize: "13.5px", color: "#555", margin: "0 0 12px" }}><strong>Payment Transaction ID:</strong> <span style={{ fontFamily: "monospace" }}>{txId}</span></p>
              <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#1a1a1a", borderBottom: "1.5px solid rgba(245,130,32,0.15)", paddingBottom: "6px", margin: "18px 0 10px" }}>Next Steps:</h4>
              <ol style={{ fontSize: "13.5px", color: "#555", paddingLeft: "20px", display: "grid", gap: "10px" }}>
                <li>Our lead branding consultant will call you at your preferred time ({bestTime}).</li>
                <li>Final high-resolution vector and source files will be delivered to <strong>{email}</strong>.</li>
                <li>Your payment of {selectedPkg.price} has been received successfully.</li>
              </ol>
            </div>

            {/* Support Info Card */}
            <div style={{ maxWidth: "480px", margin: "0 auto 20px", borderTop: "1px solid #eee", paddingTop: "24px" }}>
              <p style={{ fontSize: "13px", color: "#777", marginBottom: "12px" }}>Any immediate questions?</p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", fontSize: "13.5px", fontWeight: 700 }}>
                <a href="tel:+919979992804" style={{ textDecoration: "none", color: "#f58220" }}>📞 +91 99799 92804</a>
                <a href="mailto:support@brandingo.in" style={{ textDecoration: "none", color: "#0b3c5d" }}>📧 support@brandingo.in</a>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default function OrderClient() {
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <Navbar />
      <PageHero bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80" />
      
      <section style={{ background: "#f8f9fb", padding: "80px 0" }}>
        <div className="site-wrap" style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ color: "#f58220", fontSize: "11px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase" }}>Checkout</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "#1a1a1a", marginTop: "10px" }}>Complete Your Branding Order</h2>
          </div>

          <Suspense fallback={
            <div style={{ 
              background: "#fff", 
              border: "1px solid rgba(0,0,0,0.08)", 
              padding: "44px 40px", 
              textAlign: "center",
              minHeight: "560px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              color: "#555"
            }}>
              Loading checkout form...
            </div>
          }>
            <OrderFormContent />
          </Suspense>
        </div>
      </section>

      <Footer />
    </>
  );
}
