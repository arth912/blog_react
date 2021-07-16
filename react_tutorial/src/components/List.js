import React, { Component } from 'react'
import './customcss.css'


export default class List extends Component {
    constructor()
    {
        super();
        this.state={
            list:[
                {name:'arth',phone:'121314',email:'email@test.com'},
                {name:'parth',phone:'13636',email:'il@test.com'},
                {name:'krutharth',phone:'123633',email:'ail@test.com'},
            ]
        }
    }

    render() {
        return (
            <div>
                <h1 className="header" >Listing with map</h1>
                {this.state.list.map((item)=>
                <div><span>{item.name}</span>       <span>{item.phone}</span>       <span>{item.email}</span></div>
                )}
            </div>
        )
    }
}
