import React, { Component } from 'react';

//this is stateless components
const Header = () => {
  return(
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">ReactDemo</a>
        </div>
        <ul className="nav navbar-nav">
          <li><a href="#" onClick={() => alert('click')}>Make entry </a></li>
          <li><a href="#">List entry</a></li>
          <li><a href="#">Exit</a></li>
        </ul>
      </div>
    </nav>
  )
}

//this code  for statefull components
// export class Header extends Component{
//   render(){
//     return(
//       <nav className="navbar navbar-inverse">
//         <div className="container-fluid">
//           <div className="navbar-header">
//             <a className="navbar-brand" href="#">ReactDemo</a>
//           </div>
//           <ul className="nav navbar-nav">
//             <li><a href="#" onClick={() => alert('click')}>Make entry </a></li>
//             <li><a href="#">List entry</a></li>
//             <li><a href="#">Exit</a></li>
//           </ul>
//         </div>
//       </nav>
//     )
//   }
// }
//
export default Header;
