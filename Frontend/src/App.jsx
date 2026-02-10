import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Start from "./pages/start";
import Create_room from "./pages/create_room";
import Join_room from "./pages/join_room";
import About from './pages/about';

function App() {
  return (
    <Start>
      <Routes>
        <Route path="/"/>
        <Route path="/about" element={<About />} />
        <Route path="/Join_room" element={<Join_room />} />
         <Route path="/Create_room" element={<Create_room />} />
      </Routes>
    </Start>
  );
}

export default App;
