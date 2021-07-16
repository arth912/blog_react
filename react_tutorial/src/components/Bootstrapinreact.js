import React, { Component } from 'react'
import { Button,Modal, Carousel, Navbar, NavDropdown,Nav, Form, FormControl, ModalBody, ModalFooter } from 'react-bootstrap'
import pic1 from '../img/pic1.jpg'
import Thanks from '../img/Thanks.jpg'
import lol from '../img/lol.jpg'

export default class Bootstrapinreact extends Component {
    constructor() {
        super();
        this.state={
            show:false
        }
    }

    modal(){
        this.setState({show:!this.state.show})
    }

  render() {
    return (
      <div>
        <Button className="mt-5" onClick={()=>{this.modal()}}>Click Me</Button>
        <Modal show={this.state.show} onHide={()=>{this.modal()}}>
            <Modal.Header closeButton>Model test in react</Modal.Header>
            <Modal.Body>Hello Everyone</Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>{this.modal()}}>save</Button>
                <Button onClick={()=>{this.modal()}}>Close</Button>
            </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
