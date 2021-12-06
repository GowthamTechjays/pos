import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './class'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);




// function Test() {
//   const [show, setShow] = useState(false);
//   useEffect(() => {
//     console.log(window.location.href, show)
//     if(window.location.href === 'http://localhost:3000/'){
//       setShow(true)
//       console.log("hub", show)
//     }
//   })
//   return (
//     <div>
//       {show ? <App /> : <Hub />}
//     </div>
//   )
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
