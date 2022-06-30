import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  // Array of each card's front face image
  const cardFronts = [
    { src: "/images/brick.jpeg" },
    { src: "/images/brick.jpeg" },
    { src: "/images/oar.jpeg" },
    { src: "/images/oar.jpeg" },
    { src: "/images/sheep.jpeg" },
    { src: "/images/sheep.jpeg" },
    { src: "/images/wheat.jpeg" },
    { src: "/images/wheat.jpeg" },
    { src: "/images/wood.jpeg" },
    { src: "/images/wood.jpeg" },
  ];

  const [cards, setCards] = useState([]);
  const [points, setPoints] = useState(0);
  const [firstClick, setFirstClick] = useState(null);
  const [secondClick, setSecondClick] = useState(null);

  // SHUFFLE
  const shuffle = () => {
    const shuffled = [...cardFronts]
      .sort(() => Math.random() - 0.5)
      .map((eachCard) => ({ ...eachCard, id: Math.random() }));

    setCards(shuffled);
    setPoints(0);
  };

  const handleCard = (card) => {
    if (firstClick === true) {
      setFirstClick(card)
    } 
    else {
      setSecondClick(card)
    }
  }


  return (
    <div className="App">
      <h1>Memory: A Catan Twist</h1>
      <h2>Points: {points}</h2>
      <button onClick={shuffle}>Shuffle</button>
      <section className="cardLayout">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleCard={handleCard} isFlipped={card === firstClick} />
        ))}
      </section>
    </div>
  );
}

export default App;
