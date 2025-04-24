import './App.css';
import { Component } from 'react';
import { Counter } from './component/Counter';

class App extends Component {

  state = {
    store: 0,
    childMassage: null
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

  getMassage=(massage)=>{
    this.setState({childMassage: massage})

  }

  render() {
    return (
      <div className="App">

        <h3>{this.state.store}</h3>
        <Counter addScore={this.increment} remScore={this.decrement} getMassage={this.getMassage} test='test'/>
      </div>
    );

  }
}

export default App;