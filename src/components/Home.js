import React, { Component } from 'react';

class Home extends Component{
  constructor(){
    super();
    this.state = {
      count: 0
    }
    this.changeCount = this.changeCount.bind(this)
  }

  changeCount(){
    // var current_count = this.state.count + 1
    this.setState({count: (this.state.count + 1)});
  }

  render(){
    return(
      <div className="section">
        React Demo project <br/>
        <button type="button" className="btn btn-info" onClick={this.changeCount}> Click</button>
        <strong> count {this.state.count}</strong>
      </div>
    )
  }
}



// class App extends React.Component {
//
//     // fires before component is mounted
//     constructor(props) {
//
//         // makes this refer to this component
//         super(props);
//
//         // set local state
//         this.state = {
//             date: new Date()
//         };
//
//     }
//
//     render() {
//         return (
//             <h1>
//                 It is {this.state.date.toLocaleTimeString()}.
//             </h1>
//         )
//     }
// }

export default Home;
