import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import CardsGallery from './components/CardsGallery';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("Click an image to begin!");

  return (
    <>
    <Navbar score={score} gameStatus={gameStatus}/>
    <Jumbotron />
    <CardsGallery setScore={setScore} score={score} setGameStatus={setGameStatus}/>
    <Footer />
    </>
  )
}

export default App
