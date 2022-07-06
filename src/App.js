import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import  backgroundAudio from "./av/mixkit-forest-near-countryside-farm-1221.wav";
import backgroundVideo from "./av/C0089.mp4";
import brick from "./images/brick.jpeg";
import oar from "./images/oar.jpeg";
import sheep from "./images/sheep.jpeg";
import wheat from "./images/wheat.jpeg";
import wood from "./images/wood.jpeg";


function App() {
  // Array of each card's front face image
  const cardFronts = [
    { src: brick, match: false },
    { src: oar, match: false },
    { src: sheep, match: false },
    { src: wheat, match: false },
    { src: wood, match: false },
  ];

  const [cards, setCards] = useState([]);
  const [points, setPoints] = useState(0);
  const [firstClick, setFirstClick] = useState(null);
  const [secondClick, setSecondClick] = useState(null);
  const [time, setTime] = useState(30);
  const [active, setActive] = useState(false)

  // SHUFFLE
  const shuffle = () => {
    const shuffled = [...cardFronts, ...cardFronts]
      .sort(() => Math.random() - 0.5)
      .map((eachCard) => ({ ...eachCard, id: Math.random() }));

    setCards(shuffled);
    setPoints(0);
  };

  // HANDLE CARDS
  const handleCard = (card) => {
    if (firstClick) {
      setSecondClick(card);
    } else {
      setFirstClick(card);
    }
  };

  // RESET TURN
  const resetTurn = () => {
    setFirstClick(null);
    setSecondClick(null);
  }

  // COMPARE CARDS
  useEffect(() => {
    // if both clicked cards have the same src, change matched prop to be true and add 10 points
    if (firstClick && secondClick) {
      if (firstClick.src === secondClick.src) {
        setCards((prevArray) => {
          return prevArray.map((card) => {
            if (card.src === firstClick.src) {
              setPoints(points => points += 2.5);
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });
        resetTurn()
      } else {
        setTimeout(() =>
        resetTurn(), 1000)
      }
    }
}, [firstClick, secondClick]) 

  // COUNTDOWN begins on click
  useEffect(() => {
    let timer = null
    if (active) {
      clearInterval(timer)
      timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [time, active]);

  // HANDLE CLICK for shuffle and countdown functions to begin on button click
  const handleClick = () => {
    shuffle()
    setActive(!active)
  }

  return (
    <div className="App">

      <video autoPlay loop muted className="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      
      <div className="content">
        <div id="audio">
          <audio controls autoPlay loop>
            <source src={backgroundAudio} type="audio/wav" />
            Your browser does not support our audio element.
          </audio>
        </div>

        <h1>Memory: A Catan Twist</h1>

        <h2>Time Remaining:{" "}
            {time > 0 ? time : <span>Game over! Better luck next time.</span>}</h2>
        <br />
        <h2>Points: {points}</h2>

        <button onClick={handleClick}>Shuffle</button>

        <section className="cardLayout">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleCard={handleCard}
              isFlipped={
                card === firstClick || card === secondClick || card.match === true
              }
            />
          ))}
        </section>
      </div>

    </div>
  );
}

export default App;
