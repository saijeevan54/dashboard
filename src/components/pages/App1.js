import React, { Component } from 'react';
import Table from './table';
import Form from './Form';
import Modal from './Modal';

import { FaPlusCircle } from "react-icons/fa";
class App1 extends Component {
  constructor() {
    super();
 
    this.state = {
        Pname:'',
      taskname: '',
      MName: '',
      Status: '',
      items: []
    }
    this.props = {
        Pname:'', item: []
    }
}



    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }
 

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
        Pname: this.state.Pname,
      taskname: this.state.taskname,
      MName: this.state.MName,
      Status: this.state.Status
    });

    this.setState({
      items,
      Pname:"",
      taskname:"",
      MName:"",
      Status: ""
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;
    
    this.setState({
      [name]: value
    })
  };
  

 
  render() {
    return (
      <div className="App1">
          <b>Add New Project: </b>
          <button className='button'  onClick={this.onClick}> <FaPlusCircle size="2em" color="black" /></button>
          <div>
        <input type="text" onChange={ this.handleChange } />
        <input
          type="button"
          value="Alert the text input"
          onClick={this.handleClick}
        />
      </div>
          <br/>
            <br/>
          
        <div className="Project">
         <div className="Project1"> 
        <Table items={ this.state.items }/>
        <button className="open-modal-btn" onClick={this.openModalHandler}>Add task</button>

        <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}>
         <Form 
          handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          Project={this.state.Pname}
          text={ this.state.taskname }
          assignee={ this.state.MName }
          //newStatus={ this.state.Status } 
           />
        </Modal>
        </div>
        <div></div>
        </div>
      </div>
    );
  }
}

export default App1;