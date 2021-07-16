import React, { Component } from 'react'

export default class State extends Component {
  constructor() {
    super()
    this.state = {
      name: 'peter',
      show:true,
      count: 0
    }
  }
  updatestate() {
    this.setState({
        name:'Arth',
        count:this.state.count +1
    })
  }

  render() {
    return (
      <div>
          {
              this.state.show ?
              <h1>Hello {this.state.name}!!!  {this.state.count}</h1>
              :<h1>Show Component</h1>
          }
        <button onClick={()=>{this.setState({show:!this.state.show})}}>
          Update
        </button>
      </div>
    )
  }
}
