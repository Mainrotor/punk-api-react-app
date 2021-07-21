import './App.css';
import { Component } from 'react';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props)

    this.state =  {

    }

  }

  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }

  
}

export default App;
