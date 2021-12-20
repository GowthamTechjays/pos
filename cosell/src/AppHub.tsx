import React, { useEffect, useState } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    useParams
} from "react-router-dom";

function AppHub() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

function Home() {
 const [name, setName] = useState('');
    useEffect(() => {
        var text = window.location.href
        const textSplit = text.split(".");
        setName(textSplit[0])
    }, []);
    return (
        <h1>{name} - Hub</h1>
    );
}

function Dashboard() {
    const [name, setName] = useState('');
       useEffect(() => {
           var text = window.location.href
           const textSplit = text.split(".");
           setName(textSplit[0])
       }, []);
       return (
           <h1>{name} - Dashboard</h1>
       );
   }

export default AppHub;