import React, { Component } from 'react';

class Subprice extends Component {
  constructor(props){
      super(props);
    
  }

  componentDidMount(){
    console.log(this.props.data);
  }
    render() {
        
      return (
            <div><h1>{this.props.data}</h1></div>
      );
    }
  }
  
  export default Subprice;
  