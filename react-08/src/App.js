import './App.css';
import Random from './Random';
import List from './List';
import { useEffect, useState } from 'react';


function App() {

  // This is a state for saving jokes list
  const [posts, setData] = useState([]);
  const [random, setRandom] = useState();
  
  // NOTE: If you don't pass a dependency array [], inside of useffect then it gets called unlimited times which is bad for performance and will block your UI
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
      return response.json()
    }).then((data) => {
      // Slice method

      // I am using this slice method just to split the 2000 array list ---> 30 array list so that UI doesn't hang
      const manipulatedArray = data.slice(0, 30);
      setData(manipulatedArray);
    }).catch((error) => {
      setData([]);
      console.log(error);
    })
  }, [])


  function selectRandom() {
    // Math.random gives you a random number between 0 and 1, 
    // but what we want is random numnber between 0 and 30
      const randomIndex = Math.floor(Math.random() * 30)
      const random = posts[randomIndex];
      setRandom(random);
  }

  return (
    <div className="App">
      <div className='random-post-button'>
        <button onClick={selectRandom}>Select Random Post</button>
      </div>
      {/* Passing random joke as a prop again */}


      {/* Ternary operator to conditionally set the random JOke, which means if select random joke button is clicked, then only show the random joke */}
      { 
          random ? <Random random={random} /> : null
      }


     {/* SENDING PROPS TO JOKE LIST COMPONENT */}
     <List data={posts} />
    </div>
  );
}

export default App;
