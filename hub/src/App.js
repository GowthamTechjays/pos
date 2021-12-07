import './App.css';
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App(props) {

  useEffect(() => {
    console.log("from manager", props)
  }, [props])

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
  return <h1> Manager Route</h1>
}


export default App;
