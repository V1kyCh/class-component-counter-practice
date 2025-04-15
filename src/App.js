import './App.css';
import { Component } from 'react';
import { Counter } from './component/Counter';

class App extends Component {

  state = {
    store: 0
  }

  increment = () => {
    console.log('increment')
    // this.setState((state) =>{
    //   console.log(state)
    // })
    // this.setState({ score: 1 })
  }

  decrement = () => {
    console.log('decrement')
  }

  render() {
    console.log(this.state.score)
    return (
      <div className="App">

        <h3>{this.state.store}</h3>
        <Counter addScore={this.increment} remScore={this.decrement} test='test'/>
      </div>
    );

  }
}

export default App;