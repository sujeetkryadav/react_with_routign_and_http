import React, { Component } from 'react';
import axios from 'axios';

class Price extends Component {
  posts= null;

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res =>this.setState({items: res.data}))
    }

  
    render() {
      const {  items } = this.state;        
      return (
            <div><h1>Welcome to Price </h1>
              <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Mobile</th>
                    </tr>
                </thead>

                <tbody>
                
                    {items.map(item => (
                     <tr key={item.id}>
                     <td>{item.title}</td>
                     <td>{item.title}</td>
                     <td>{item.title}</td>
                     <td>{item.title}</td>
                    </tr>
                    ))}
                    </tbody>
              </table>
            </div>

      );
    }
  }
  
  export default Price;
  