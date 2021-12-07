import React, { useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useParams
} from "react-router-dom";

function Hub() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sales/:id" element={<User />} />
            </Routes>
        </BrowserRouter>
    )
}

function Home() {
    const [name, setName] = useState('');
    useEffect(() => {
        var text = window.location.href
        const textSplit = text.split(",");
        setName(textSplit[0])
    }, []);
    return <h1> {name} - hub</h1>
}


function User() {
    let params = useParams();
    return <h1>sales hub route id {params.id}</h1>
}


export default Hub;