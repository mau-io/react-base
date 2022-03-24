import './styles/card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
  
        <section>
            <Link to={`post/${props.data.id}`}>{props.data.id} {props.data.title}</Link>
        </section>     
    
    )
}


export default Card;