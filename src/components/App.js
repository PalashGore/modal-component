import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';
import ModalComponent from './ModalComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  constructor() {
    super();   
    
    this.state = { 
      modal: false,
      title: 'Modal Title',
      className: 'show',
      modalBody: 'Modal Body'
    };

    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    const show = this.state.modal;
    console.log(show); 
    if(show === false) {
      this.setState({ modal: true });
    }
  }

  render() {

    console.log(this.state.modal);

    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />          
            <Jumbotron>
              <Button color="primary" onClick={this.toggle}>Toggle Modal</Button>
              <ModalComponent 
                isOpen={this.state.modal} 
                toggle={this.toggle} 
                title={this.state.title}
                classNames={this.state.classNames}
                modalBody={this.state.modalBody}
              />     
            </Jumbotron>
          </header>
      </div>
    );
  }
}

export default App;
