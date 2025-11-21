import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill both fields.");
      return;
    }
    // DEMO: pretend login success
    setError("");
    // In real app: call auth API here
    navigate("/main");
  };

  return (
    <div style={{minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background: "linear-gradient(120deg,#dbeafe 0%,#f0f9ff 100%)"}}>
      <div style={{maxWidth:900, width:"90%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, background:"#fff", padding:24, borderRadius:12}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" alt="login" style={{width:"100%", objectFit:"cover", borderRadius:8, maxHeight:300}}/>
        </div>

        <div>
          <h2 style={{margin:0}}>Log in to your account</h2>
          <p style={{color:"#555"}}>Enter your email and password.</p>

          <form onSubmit={handleSubmit} style={{marginTop:12, display:"grid", gap:12}}>
            <div>
              <label style={{display:"block", fontSize:13}}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{width:"100%", padding:10, borderRadius:8, border:"1px solid #ddd"}}
              />
            </div>

            <div>
              <label style={{display:"block", fontSize:13}}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="●●●●●●●"
                style={{width:"100%", padding:10, borderRadius:8, border:"1px solid #ddd"}}
              />
            </div>

            {error && <div style={{color:"crimson"}}>{error}</div>}

            <button type="submit" style={{padding:12, borderRadius:8, background:"#3730a3", color:"#fff", fontWeight:600, border:"none"}}>Login</button>

            <div style={{fontSize:14}}>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
