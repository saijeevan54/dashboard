import React from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
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