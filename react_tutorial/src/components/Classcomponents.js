import React, { Component } from 'react'

export default class Classcomponents extends Component {

    

    render() {
        return (
            <div>
                <h1>Hello friends</h1>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
