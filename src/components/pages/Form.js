// eslint-disable-next-line no-unused-vars
import React, { component } from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
        Pname: "",
        taskname: "",
        Mname: "",
        status: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === "Pname") {
      this.setState((props) => ({
        
        Pname: value,
        taskname: props.taskname,
        Mname: props.Mname,
        status: props.status
      
        
      }))
    }

    if (name === "taskname") {
      this.setState((props) => ({
        
        Pname: props.Pname,
        taskname: value,
        Mname: props.Mname,
        status: props.status
      
        
      }))
    }
    if (name === "Mname") {
      this.setState((props) => ({
        Pname: props.Pname,
        taskname: props.taskname,
        Mname: value,
        status: props.status
      
      }))
    }
    if (name === "status") {
      this.setState((props) => ({
        Pname: props.Pname,
        taskname: props.taskname,
        Mname: props.Mname,
        status: value
      }))
    }
    
  }
  handleTaskSubmit = (event) => {
    // alert('A form was submitted: ' + this.state.username);
    console.log("inside handle task");
    console.log(JSON.stringify(this.props));

    fetch('http://localhost:8000/accounts/tasks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.props)
    }).then(function (response) {
      console.log(response)
      if (response.status === "200") {
        // <Redirect to="/dashboard.jsx"/>;
      }
      return response.json();
    });

    event.preventDefault();
  }
  render() {
    return (
      <div id="Form">
         
        <form onSubmit={this.props.handleFormSubmit}>
        <label htmlFor="Pname">
          Project Name:<br/>
          <input id="Pname" value={this.props.newPname} 
            type="text" name="Pname"
            onChange={this.props.handleInputChange} />
          </label><br/><br/>
          <label htmlFor="taskname">
          Task Name:<br/>
          <input id="taskname" value={this.props.newTaskname} 
            type="text" name="taskname"
            onChange={this.props.handleInputChange} />
          </label><br/><br/>
          <label htmlFor="MName ">
          Team Member Name :<br/>
          <input id="MName" value={this.props.newMname} 
            type="text" name="MName"
            onChange={this.props.handleInputChange} />
          </label><br/><br/>
          <label htmlFor="Status">
          Status :<br/>
          <select className='select' name='Status' onChange={this.props.handleInputChange} value={this.props.value} defaultValue="Select">
                <option value="Select"></option>
                <option value="Work Assigned">Work Assigned</option>
                <option value="Work in Progress">Work in Progress</option>
                <option value="Work Pending"> Work Pending</option>
                <option value="Completed">Completed</option>

                
        </select>
            
          </label><br/><br/>
          <button type="submit" value="Submit" onClick={this.handleTaskSubmit}>Add Item</button>
        </form>
      </div>
    );
  }
}

export default Form;