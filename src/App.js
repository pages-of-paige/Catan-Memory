import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

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

  const handleCard = (card) => {
    if (firstClick === true) {
      setFirstClick(card);
    } else {
      setSecondClick(card);
      compareCards()
    }
  };

  // COMPARE CARDS
  const compareCards = () => {
    // if both clicked cards have the same src, change matched prop to be true and add 10 points
    if (firstClick && secondClick) {
      if (firstClick.src === secondClick.src) {
        setCards((prevArray) => {
          return prevArray.map((card) => {
            if (card.src === secondClick.src) {
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });
        setFirstClick(null);
        setSecondClick(null);
        setPoints((currentPoints) => currentPoints + 10);
      } else {
        setFirstClick(null);
        setSecondClick(null);
        setPoints((currentPoints) => currentPoints - 10);
      }
    }
  };

  return (
    <div className="App">
      <h1>Memory: A Catan Twist</h1>
      <h2>Points: {points}</h2>
      <button onClick={shuffle}>Shuffle</button>
      <section className="cardLayout">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleCard={handleCard}
            isFlipped={
              card === firstClick || card === secondClick || card.match
            }
          />
        ))}
      </section>
    </div>
  );
}

export default App;
