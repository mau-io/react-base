import './bootstrap.min.css';
import './App.css';
import { Component } from 'react';
import  { Context } from './context/userContext';
import ComponentC from './components/ComponentC';
import Content from './components/Content';
import Search from './components/Search';

import wheaterData from './libraries/data.js';

class App extends Component {


  state = {
    user: null
  }

  
  async componentDidMount() {

    const data = await wheaterData();

    this.setState({
      user: data
    })

  }

  render() {
   return (
      <div  className="App">
        <Content/>
        <Search />
        <Context.Provider value={this.state.user} >
          <ComponentC />
        </Context.Provider>
      </div>
    )
  }
}

export default App;
