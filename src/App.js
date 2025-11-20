import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

export default function App(){
return (
<Router>
<div className="container">
<header className="nav">
<h2 style={{margin:0}}>My React Site</h2>
<nav>
<Link to="/" style={{marginRight:12}}>Home</Link>
<Link to="/login" style={{marginRight:12}}>Login</Link>
<Link to="/signup">Signup</Link>
</nav>
</header>


<main style={{marginTop:20}}>
<Routes>
<Route path="/" element={<Home/>} />

</Routes>
</main>


<footer className="footer">© {new Date().getFullYear()} My React Site</footer>
</div>
</Router>
);
}