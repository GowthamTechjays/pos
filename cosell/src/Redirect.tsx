import * as React from 'react';
import { useState, useEffect } from 'react';
import App from './App';
import AppHub from './AppHub';

function Redirect() {
    const [url, setUrl] = useState(true);
    useEffect(() => {
        var text = window.location.href
        const textSplit = text.split(".");
        if (textSplit[0] === 'https://portal') {
            setUrl(true)
        } else {
            setUrl(false)
        }
        console.log(textSplit[0], url)
    }, [url])
    return (
        <div>
            {
                url ? <App /> : <AppHub />
            }
        </div>
    );
}

export default Redirect;