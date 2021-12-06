import React, { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function Hub() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sales" element={<User />} />
            </Routes>
        </BrowserRouter>
    )
}

function Home() {
    useEffect(() => {
    }, []);
    return <h1>hub</h1>
}


function User() {
    return <h1>sales hub route</h1>
}


export default Hub;