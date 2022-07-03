import './Card.css'

const Card = ({card, handleCard, isFlipped}) => {
    const handleClick = () => {
        handleCard(card)
    }

    // const handleFlip = (event) => {
    //     event.currentTarget.classList.toggle('flipped')
    // }

        // if flipped status is true, show the front face of card, else show the back of card
    return (
        <div className='container'>
            <div className='card'>
                <div className={isFlipped ? 'flipped' : ''} >
                    <img className='front' src={card.src} alt='front of card' />
                    <img className='back' src='./images/back.jpeg' alt='back of card' onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}

export default Card;