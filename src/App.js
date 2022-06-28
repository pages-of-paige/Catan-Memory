import './App.css';

// array of each card's front face image to later shuffle through
const cardFronts = [
  {'src' : './images/brick.jpeg'},
  {'src' : './images/oar.jpeg'},
  {'src' : './images/sheep.jpeg'},
  {'src' : './images/wheat.jpeg'},
  {'src' : './images/wood.jpeg'}
]

function App() {

  // SHUFFLING
  // grab the card images array and sort through
  // randomly select a number 
  // each numer should equate to the id of the images in the array
  // set the state for shuffling

  return (
    <div className="App">
      <h1>Memory: A Catan Twist</h1>
      <section className='cardLayout'>
        {cards.map(card => (
          <div className='card' key={card.id}>
            <img className='front' src={card.src} alt='front of card' />
            <img className='back' src='./images/back.jpeg' alt='back of card' />
          </div>
        ))}
        
        
      </section>
    </div>
  );
}

export default App;
