import './Card.css'
import backOfCard from '../images/back.jpeg'

const Card = ({card, handleCard, isFlipped}) => {
    console.log(card.src)
    const handleClick = () => {
        handleCard(card)
    }

        // if flipped status is true, show the front face of card, else show the back of card
    return (
        <div className='container'>
            <div className='card'>
                <div className={isFlipped ? 'flipped' : ''} >
                    <img className='front' src={card.src} alt='front of card' />
                    <img className='back' src={backOfCard} alt='back of card' onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}

export default Card;