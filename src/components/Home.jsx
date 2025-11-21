import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      background: "linear-gradient(120deg,#f6d365 0%,#fda085 100%)",
      fontFamily: "system-ui, sans-serif"
    }}>
      <div style={{
        maxWidth: 1000,
        display:"grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24,
        padding: 28,
        background: "rgba(255,255,255,0.9)",
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)"
      }}>
        <div>
          <h1 style={{fontSize:36, margin:0}}>Welcome to My React App</h1>
          <p style={{marginTop:12, color:"#333", lineHeight:1.5}}>
            Simple demo with Home, Login, Signup and Main pages. Click below to try out the flows.
          </p>

          <div style={{display:"flex", gap:12, marginTop:18}}>
            <Link to="/login" style={{
              padding:"12px 20px",
              borderRadius:8,
              border:"2px solid #111",
              textDecoration:"none",
              color:"#111",
              fontWeight:600
            }}>Login</Link>

            <Link to="/signup" style={{
              padding:"12px 20px",
              borderRadius:8,
              textDecoration:"none",
              background:"#111",
              color:"#fff",
              fontWeight:600
            }}>Sign up</Link>
          </div>
        </div>

        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <img
            src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=800&auto=format&fit=crop"
            alt="welcome"
            style={{width:"100%", height: "240px", objectFit:"cover", borderRadius:10}}
          />
        </div>
      </div>
    </div>
  );
}
