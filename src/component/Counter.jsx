import { Component } from "react";

export class Counter extends Component {

    render() {
        
        return <>
                <button onClick={this.props.addScore}>+</button>
                <button onClick={this.props.remScore}>-</button>
                <p>{this.props.test}</p>
            </>

    }
}