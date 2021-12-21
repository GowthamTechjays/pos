/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import App from './App';
import SalesRep from './SalesRep';

const Redirect = () => {
  const [url, setUrl] = useState(true);
  useEffect(() => {
    const text = window.location.href;
    const textSplit = text.split('.');
    // if (textSplit[0] === 'http://localhost:3000/') {
    if (text.includes('http://localhost:3000/')) {
      setUrl(true);
    } else {
      setUrl(false);
    }
    console.log(
      textSplit[0],
      text.includes('http://localhost:3000/'),
      url,
      'url'
    );
  }, [url]);
  return (
    <div>
      {url ? (
        <App />
      ) : (
        <>
          <SalesRep />
        </>
      )}
    </div>
  );
};
export default Redirect;
