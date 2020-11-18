import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
         
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="taskname">
          Task Name:<br/>
          <input id="taskname" value={this.props.newTaskname} 
            type="text" name="taskname"
            onChange={this.props.handleInputChange} />
          </label><br/><br/>
          <label for="MName ">
          Team Member Name :<br/>
          <input id="MName" value={this.props.newMname} 
            type="text" name="MName"
            onChange={this.props.handleInputChange} />
          </label><br/><br/>
          <label for="Status">
          Status :<br/>
          <select className='select' name='Status' onChange={this.props.handleInputChange} value={this.props.value} >
                <option value="Select" selected></option>
                <option value="Work Assigned">Work Assigned</option>
                <option value="Work in Progress">Work in Progress</option>
                <option value="Work Pending"> Work Pending</option>
                <option value="Completed">Completed</option>
                console.log({this.props.value});
                
        </select>
            
          </label><br/><br/>
          <button type="submit" value="Submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default Form;