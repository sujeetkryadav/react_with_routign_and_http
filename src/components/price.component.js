import React, { Component } from 'react';
import axios from 'axios';
import Subprice from './subcomponent';

class Price extends Component {
  posts= null;
  name = "sub component here";
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

    // ---- TO handle click event----

    handleClick = (ele) =>{
        console.log(ele);
    }
  
    render() {
      const {  items } = this.state;        
      return (
            <div className="priceTable"><h1>Welcome to Price </h1>
              <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                
                    {items.map(item => (
                     <tr key={item.id}>
                     <td>{item.title}</td>
                     <td>{item.id}</td>
                     <td>Male</td>
                     <td>{item.userId}</td>
                     <td><button className="btn-success" onClick={(e) => this.handleClick(item)}>click</button></td>
                    </tr>
                    ))}
                    </tbody>
              </table>
              <Subprice data={this.name}/>
            </div>

      );
    }
  }
  
  export default Price;
  