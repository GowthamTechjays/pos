import React, { useState, useEffect } from 'react';
import App from './App';
import SalesHubSite from './SalesHubSite';

const Redirect = () => {
  const [url, setUrl] = useState(true);
  useEffect(() => {
    const text = window.location.href;
    const textSplit = text.split('.');
    // if (textSplit[0] === 'http://localhost:3000/') {
    if (textSplit.includes('https://portal')) {
      setUrl(true);
    } else {
      setUrl(false);
    }
    console.log(textSplit[0], url);
  }, [url]);
  return (
    <div>
      {url ? (
        <App />
      ) : (
        <>
          <SalesHubSite />
        </>
      )}
    </div>
  );
};
export default Redirect;
