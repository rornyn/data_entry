import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';
import CreateEntry from './components/create_entry'

class Root extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Home />

        < CreateEntry />
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
