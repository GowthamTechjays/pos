import './App.css';
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  useEffect(() => {
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="route" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  useEffect(() => {
  }, []);
  return <h1>Manager</h1>
}


function User() {
  return <h1>Route</h1>
}


export default App;
