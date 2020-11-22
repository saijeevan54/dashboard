import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.items;

    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
               <th>Project Name</th>
              <th>Task</th>
              <th>Assignee</th>
              <th>Status</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.project}</td>
                  <td>{item.text}</td>
                  <td>{item.assignee}</td>
                  <td>{item.complete?'Completed':'Pending'}</td>
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