import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
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
  let navigate = useNavigate();
  useEffect(() => {
  }, []);
  return (
    <div className="container">
      <h1>Alliance Manager Portal</h1>
      <button className="button button1" onClick={() => {
        navigate(`/route`)
      }}>LOG IN</button>
    </div>
  )
}


function User() {
  const [name, setName] = useState("");
  const [descriptions, setdescriptions] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(name, descriptions)
    window.location.href = `http://${name}-devportal.cosell.partners/sales/${descriptions}`
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Domain Name
        </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label>
          Sale no
        </label>
        <input
          type="text"
          value={descriptions}
          onChange={e => setdescriptions(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}


export default App;
