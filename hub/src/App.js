import './App.css';
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {

  useEffect(() => {
    console.log(window.location.href)
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hub" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(window.location.href)
    // if (window.location.href == 'http://localhost:3000/') {
    //   navigate('/hub');
    // }
  }, []);
  return <h1>Manager</h1>
}


function User() {
  return <h1>Hub</h1>
}


export default App;
