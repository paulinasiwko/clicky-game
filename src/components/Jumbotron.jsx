import React from "react";
import '../styles/Jumbotron.css';

export default function Jumbotron() {
    return (
        <header className="jumbotron">
            <h1>Clicky Game!</h1>
            <h6>Click on an image to earn points, but don't click on any more than once!</h6>
        </header>
    );
}