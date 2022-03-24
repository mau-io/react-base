import './styles/App.css';
import { Component } from 'react';
import {  Routes ,Route} from 'react-router-dom';
import Home from './home';
import PostPage from './postPage';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={ <PostPage />} />
      </Routes>
    )
  }
}

export default App;
