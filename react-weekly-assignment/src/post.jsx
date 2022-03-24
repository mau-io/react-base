import "./styles/post.css";
import { Link } from 'react-router-dom';

const Post = (props) => {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <p>{props.data.body}</p>
            
            <Link to="/">Go to Home</Link>
        </div>
    )
}

export default Post;