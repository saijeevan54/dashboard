import React, { Component } from 'react';
import Table from './table';
import Form from './Form';
import Modal from './Modal';

import { FaPlusCircle } from "react-icons/fa";

class App1 extends Component {
  constructor() {
    super();

    this.state = {
      taskname: '',
      MName: '',
      Status: '',
      items: []
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
      taskname: this.state.taskname,
      MName: this.state.MName,
      Status: this.state.Status
    });

    this.setState({
      items,
      taskname: '',
      MName: '',
      Status: ''
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
          <button className='button'  onClick={this.openModalHandler}> <FaPlusCircle size="2em" color="black" /></button>
          
          <br/>
            <br/>
        <div className="Project">
         <div className="Project1"> Project1
        <Table items={ this.state.items }/>
        <button className="open-modal-btn" onClick={this.openModalHandler}>Add task</button>

        <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}>
         <Form 
          handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newTaskname={ this.state.taskname }
          newMName={ this.state.MName }
          newStatus={ this.state.Status }  />
        </Modal>
        </div>
        <div>Project 2</div>
        </div>
      </div>
    );
  }
}

export default App1;