import React, { useState } from "react";
import '../styles/Navbar.css';

export default function Navbar({score, gameStatus}) {
    const [topScore, setTopScore] = useState(0);

    const getStatusClass = () => {
        switch (gameStatus) {
            case 'You guessed correctly!':
                return "correct-guess";
            case 'You guessed incorrectly!':
                return 'incorrect-guess';
            default:
                return "";
        }
    }

    if (score > topScore) {
        setTopScore(score);
    }

    return (
        <nav className="navbar">
            <ul className="container-fluid">
                <li>Clicky Game</li>
                <li className={getStatusClass()}>{gameStatus}</li>
                <li>Score: {score} | Top Score: {topScore}</li>
            </ul>
        </nav>
    );
}