import React from "react";
import '../styles/Card.css';

export default function Card({ img, onClick, status}) {
    return (
        <div className={`card ${status ? 'selected' : ''}`} onClick={onClick}>
            <img src={img} alt="Card image cap" />
        </div>
    );
}