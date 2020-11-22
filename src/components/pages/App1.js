import React, { Component } from 'react';
import Table from './table';
import Form from './Form';
import Modal from './Modal';
import Cookies from 'js-cookie';

import { FaPlusCircle } from "react-icons/fa";
class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
        email: "",
      },
      Pname:'',
      taskname: '',
      MName: '',
      Status: '',
      items: null,
    }
    this.props = {
        Pname:'', item: []
    }
this.onSubmit = this.onSubmit.bind(this);
}
async componentWillMount() {
  // POST request using fetch with async/await
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
  };
  const response = await fetch('https://testapi.io/api/vamshi399/task', requestOptions);
  const data = await response.json();
  this.setState({ items: data });
}


onSubmit = (e) => {
  const Pname = prompt('Please enter Project name')
  this.setState({ enteredName : Pname });
  alert('New Project Added!!');
  console.log(Pname);
  let item = [...this.state.item];
  item.push({
    Pname: this.state.Pname});

  
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
    var isFetching;
    if(this.state.items==null){
      isFetching = true;
    }
    else{
      isFetching = false;
    }
    // const { isFetching } = this.state;
    return (
      <div className="App1">
        {isFetching ? (
          <div>Loading...</div>
        ) : (          
        <div className="Project">
        <form className="add"><b>Add New Project:</b><br/>
          <button className="button"  onClick={this.onSubmit}> <FaPlusCircle size="3em" color="green" /></button>
          </form>
          
          <br/>
            <br/>
            <br/>

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
        </div>)}
      </div>
    );
  }
}

export default App1;