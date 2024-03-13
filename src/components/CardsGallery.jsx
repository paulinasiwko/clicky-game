import React, { useState } from "react";
import '../styles/CardsGallery.css';
import IMAGES from "../assets/img/Images";
import Card from "./Card";

export default function CardsGallery({setScore, score, setGameStatus}) {
    const [cardStatus, setCardStatus] = useState(IMAGES.map(() => false));
    const shuffle = IMAGES.sort(() => 0.5 - Math.random());

    function handleClick(image) {
        const index = image.index;
        const newCardStatus = [...cardStatus];

        if (newCardStatus[index] === false) {
            newCardStatus[index] = true;
            setCardStatus(newCardStatus);
            setScore(score + 1);    
            setGameStatus('You guessed correctly!');
        } else {
            setScore(0);
            setCardStatus(IMAGES.map(() => false));
            setGameStatus('You guessed incorrectly!');
        }
    }

    return (
        <>
        <div className="container">
            {shuffle.map((image, index) => (
                <Card key={index} img={image.Img} onClick={() => handleClick(image)} status={cardStatus[index]} />
                ))}
        </div>
        </>
    );
}