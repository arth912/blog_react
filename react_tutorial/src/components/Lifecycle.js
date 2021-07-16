import React, { Component } from 'react'

export default class Lifecycle extends Component {

    constructor()
    {
        super();
        this.state={
            data:null
        }
        console.warn("constructor.")
    }

    componentDidMount()
    {
        this.setState({
            data:'arth'
        });
        console.warn("COMPONENT DID MOUNT!!!")
    }

    render() {
        console.warn("rendering...")
        return (
            <div>
                <h1>React Life Cycle {this.state.data}</h1>
            </div>
        )
    }
}
