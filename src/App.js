import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Timer from "./components/Timer";

function App() {
  // Array of each card's front face image
  const cardFronts = [
    { src: "/images/brick.jpeg", match: false },
    { src: "/images/oar.jpeg", match: false },
    { src: "/images/sheep.jpeg", match: false },
    { src: "/images/wheat.jpeg", match: false },
    { src: "/images/wood.jpeg", match: false },
  ];

  const [cards, setCards] = useState([]);
  const [points, setPoints] = useState(0);
  const [firstClick, setFirstClick] = useState(null);
  const [secondClick, setSecondClick] = useState(null);

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
        // console.log('cards match')
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

  return (
    <div className="App">
      <h1>Memory: A Catan Twist</h1>
      <Timer />
      <h2>Points: {points}</h2>
      <button onClick={shuffle}>Shuffle</button>
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
  );
}

export default App;
