import './HighScore.css'

const HighScore = (props) => {
  return (props.triger) ? (
    <div className="popup-window">
        <div className="inner-popup">
            <button className="exit">Exit</button>
            {props.children}
        </div>
    </div>
  ) : ''
}

export default HighScore;
