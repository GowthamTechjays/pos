import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Test from './class';
import App from './App';
import Hub from './Hub';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);

function Test() {

  const [show, setShow] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    console.log(window.location.href, show)
    if (window.location.href === 'http://localhost:3000/' || 'http://localhost:3000/sales') {
      setShow(false)
      setName("manager")
    } else {
      setShow(true)
      setName("hub")
    }
  }, [name])

  return (
    <div>
      {show && show ? <App isShow={name} /> : <Hub />}
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
