import { Component } from "react";

export class Counter extends Component {

    state ={
        massage:'massage'
    }

    render() {
        console.log(this.props)
        // console.log(this.props.getMassage)

        // this.props.getMassage(this.state.massage)

        return <>
                <button onClick={this.props.addScore}>+</button>
                <button onClick={this.props.remScore}>-</button>
                <button onClick={()=>this.props.getMassage(this.state.massage)}>change state</button>
                <p>{this.props.test}</p>
            </>

    }
}