import './Card.css'

const Card = ({card, handleCard, flip}) => {
    const handleClick = () => {
        handleCard(card)
    }

    return (
        <div className='card'>
            <div className={flip ? 'flip' : ''}>
                <img className='front' src={card.src} alt='front of card' />
                <img className='back' src='./images/back.jpeg' alt='back of card' onClick={handleClick} />
            </div>
        </div>
    )
}

export default Card;