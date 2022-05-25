import './GameOver.css';

// Asset
import winnerImg from '../../assets/undraw_winners_ao2o.svg';
import Button from '../Button/Button';

const GameOver = () => {
    const tryAgainBtn = () => {
        console.log('Try again');
    }

    return (<div className='gameOver'>
        <img className='winnerLogo' src={winnerImg} alt="winners" />
        <div className="title"> Results </div>
        <div className="description"> You got <strong>4</strong> correct answers</div>
        <Button label='Try Again' action={tryAgainBtn} bgColor="#fff" textColor="#1e1e72" align='center' border />
    </div>)
}

export default GameOver;