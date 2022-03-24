import { Component } from 'react';
import Card from './card';

class Home extends Component {

  state = {
    posts: []
  }

  constructor() {
    super();
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
      return response.json();
    })
    .then((res) => {
      this.setState({
        posts: res
      })
    })
  }

  render() {
    return (
      <div id="container">
        <h1>Posts</h1>
        {
          this.state.posts.map((item , index) => {
            return <Card key={index} data={item} />
          })
        }
      </div>
    )
  }
}

export default Home;
