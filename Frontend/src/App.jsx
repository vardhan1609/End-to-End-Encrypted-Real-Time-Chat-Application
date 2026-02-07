import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Start from "./pages/start";
function App() {
  return (
    <Start>
      <Routes>
        <Route path="/" element={<h1 className="text-white text-3xl">Home Page Working ✅</h1>} />
      </Routes>
    </Start>
  );
}

export default App;
