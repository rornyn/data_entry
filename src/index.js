import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';

class Root extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
