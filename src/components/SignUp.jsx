import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !password) {
      setError("Please fill all fields.");
      return;
    }
    // DEMO: pretend signup success
    setError("");
    // In real app: call signup API and store user
    navigate("/main");
  };

  return (
    <div style={{minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background: "linear-gradient(120deg,#e6fffa 0%,#f0fff4 100%)"}}>
      <div style={{maxWidth:900, width:"90%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, background:"#fff", padding:24, borderRadius:12}}>
        <div>
          <h2 style={{margin:0}}>Create an account</h2>
          <p style={{color:"#555"}}>Sign up to access the main page.</p>

          <form onSubmit={handleSubmit} style={{marginTop:12, display:"grid", gap:12}}>
            <div>
              <label style={{display:"block", fontSize:13}}>Full name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your full name" style={{width:"100%", padding:10, borderRadius:8, border:"1px solid #ddd"}}/>
            </div>

            <div>
              <label style={{display:"block", fontSize:13}}>Phone number</label>
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+91 98765 43210" style={{width:"100%", padding:10, borderRadius:8, border:"1px solid #ddd"}}/>
            </div>

            <div>
              <label style={{display:"block", fontSize:13}}>Email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" style={{width:"100%", padding:10, borderRadius:8, border:"1px solid #ddd"}}/>
            </div>

            <div>
              <label style={{display:"block", fontSize:13}}>Password</label>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Create a password" style={{width:"100%", padding:10, borderRadius:8, border:"1px solid #ddd"}}/>
            </div>

            {error && <div style={{color:"crimson"}}>{error}</div>}

            <button type="submit" style={{padding:12, borderRadius:8, background:"#059669", color:"#fff", fontWeight:600, border:"none"}}>Sign up</button>

            <div style={{fontSize:14}}>
              Already have an account? <Link to="/login">Log in</Link>
            </div>
          </form>
        </div>

        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="signup" style={{width:"100%", objectFit:"cover", borderRadius:8, maxHeight:300}}/>
        </div>
      </div>
    </div>
  );
}
