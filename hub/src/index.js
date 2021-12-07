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

  useEffect(() => {
    var text = window.location.href
    const textSplit = text.split(",");
    if (textSplit[0] === 'http://test-devportal') {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [show])

  return (
    <div>
      {show && show ? <App /> : <Hub />}
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
