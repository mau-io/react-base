import './bootstrap.min.css';
import './App.css';
import { Component } from 'react';
import  { Context } from './context/dataContext';
import ComponentC from './components/ComponentC';
import Content from './components/Content';
import Search from './components/Search';

import wheaterData from './libraries/data.js';

class App extends Component {

  state = {
    data: null
  }
  
  constructor(props) {
    super(props);

    this.update = (data) => {
      this.setState({
        data
      })
    };

  } 
  
  async componentDidMount() {
    const data = await wheaterData();
    this.setState({
      data
    })
  }

  render() {
   return (
      <div className="App">
        <Content/>
        <Context.Provider value={[this.state.data, this.update]} >
          <Search />
          <ComponentC />
        </Context.Provider>
      </div>
    )
  }
}

export default App;
