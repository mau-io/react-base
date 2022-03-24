import { useState } from 'react';
import { useEffect } from 'react';
import { useParams} from 'react-router-dom';
import Post from './post';

const PostPage = () => {

    // If you remember lifecycle hooks for class based components
    // componentdidmount

    // let userData = {};

    // Save states in class based components
    // setState, state

    // Functional components state, we can do it using hooks

    // setData is a function that takes in a new state and merges it with the current state and returns a new state  (state = {...state, ...newState}) 
    // data = {...data, ...newState}

    const [data, setData] = useState({});
    const { id } = useParams(); // useParams is a hook that returns the params from the url

    // useEffect is a function that takes in a function as a parameter and runs it when the component mounts and when the component updates
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((data) => {
            return data.json()
        })
        .then((val) => {
            setData(val); // setState in functional components
        })
    }, []);

    return (
        <div id="container">
            <Post data={data} /> 
        </div>
    )
}

export default PostPage;