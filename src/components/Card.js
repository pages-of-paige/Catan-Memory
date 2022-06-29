const Card = ({card}) => {
    return (
        <div className='card'>
            <img className='front' src={card.src} alt='front of card' />
            <img className='back' src='./images/back.jpeg' alt='back of card' />
        </div>
    )
}

export default Card;