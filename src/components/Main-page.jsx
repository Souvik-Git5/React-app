import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div style={{minHeight:"100vh", background:"linear-gradient(180deg,#fff7ed 0%,#fff1f2 100%)", fontFamily:"system-ui"}}>
      <header style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:20, maxWidth:1200, margin:"0 auto"}}>
        <h1 style={{margin:0}}>Main Page</h1>
        <div>
          <Link to="/" style={{marginRight:12}}>Home</Link>
          <Link to="/login">Logout</Link>
        </div>
      </header>

      <main style={{maxWidth:1200, margin:"24px auto", padding:20}}>
        <section style={{background:"#fff", padding:20, borderRadius:12, boxShadow:"0 6px 20px rgba(0,0,0,0.06)"}}>
          <h2>Welcome!</h2>
          <p>This is the protected main area. Replace this with your content: images, cards, articles, etc.</p>

          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:12, marginTop:18}}>
            {[1,2,3].map(i=>(
              <div key={i} style={{background:"#fafafa", padding:12, borderRadius:8}}>
                <img src={`https://picsum.photos/seed/card${i}/600/300`} alt={`card-${i}`} style={{width:"100%", borderRadius:8, objectFit:"cover", height:140}}/>
                <h3 style={{marginTop:8}}>Feature {i}</h3>
                <p style={{color:"#666"}}>Short description about this feature. Make it useful.</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{textAlign:"center", padding:18}}>© {new Date().getFullYear()} My React App</footer>
    </div>
  );
}
