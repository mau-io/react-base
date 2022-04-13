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
  
  constructor(props) {
    super(props);

    this.update = (data) => {
      this.setState({
        user: data
      })
    };

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
        
        <Context.Provider value={[this.state.user, this.update]} >
          <Search />
          <ComponentC />
        </Context.Provider>

      </div>
    )
  }
}

export default App;
