import './Card.css'

const Card = ({card, handleCard, isFlipped}) => {
    const handleClick = () => {
        handleCard(card)
    }

        // if flipped status is true, show the front face of card, else show the back of card
    return (
        <div className='card' onClick={handleClick}>
            <div className={isFlipped ? 'flipped' : ''}>
                <img className='front' src={card.src} alt='front of card' />
                <img className='back' src='./images/back.jpeg' alt='back of card'  />
            </div>
        </div>
    )
}

export default Card;