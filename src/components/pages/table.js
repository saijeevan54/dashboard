import React from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    console.log(this.props.items);
    return (
      <div id="Table">
        {items.map(item => {
              return (
              
                  <h3>{item.PName}</h3>
                  
              );
            })}
        <table>
          <tbody>
            <tr>
               
              <th>Task</th>
              <th>Assignee</th>
              <th>Status</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.taskname}</td>
                  <td>{item.MName}</td>
                  <td>{item.Status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;