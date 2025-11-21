import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';
import Main from './components/Main-page';

export default function App(){
return (
<Routes>
<Route path="/" element={<Home/>} />
<Route path='/login' element={<Login />} />
<Route path='/signup' element={<Signup />} />
<Route path='/main' element={<Main />} />

 {/* 404 fallback */}
<Route path="*" element={<div style={{padding:40}}>Page not found — <a href="/">Go Home</a></div>} />
</Routes>
);
}