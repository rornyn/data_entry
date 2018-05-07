import React, { Component } from 'react';
import '../css/form.css';
import _ from 'lodash';

class CreateEntry extends Component{
  constructor(){
    super()
    this.state = {firstname: '', lastname: '', age: ' ', phone: '', desc: ''  }
    this.changeFirstname = this.changeFirstname.bind(this);
    this.changeLastname = this.changeLastname.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
    this.save_detail = this.save_detail.bind(this);
    this.state.data = []
  }

  changeFirstname(e){
    this.setState({firstname: e.target.value});
  }

  changeLastname(e){
    this.setState({lastname: e.target.value});
  }

  changeAge(e){
    this.setState({age: e.target.value});
  }

  changePhone(e){
    this.setState({phone: e.target.value});
  }

  changeDesc(e){
    this.setState({desc: e.target.value});
  }

  save_detail(e){
    e.preventDefault();
    this.state.data.push({firstname: this.state.name, lastname: this.state.lastname, age: this.state.age, phone: this.state.phone, desc: this.state.desc})
    this.setState({data: this.state.data});
  }

  // submitForm(e){
  //   e.preventDefault();
  //   this.state.data.push({name: this.state.name, password: this.state.password, email: this.state.email});
  //   this.setState({data: this.state.data});
  // }

  render(){
    return(
        <div className="row">
          <div className="col-md-4 col-sm-12 col-lg-4 col-md-offset-1">
        		<div className="panel panel-primary">
        			<div className="panel-heading">Enter Your Details Here
        			</div>
        			<div className="panel-body">
        				<form name="myform">
        					<div className="form-group">
        						<label htmlFor="myName">First Name *</label>
        						<input id="myName" name="myName" className="form-control" type="text" placeholder="Firstname" value= {this.state.firstname}  onChange={this.changeFirstname} />
        					</div>
        					<div className="form-group">
        						<label htmlFor="lastname">Last Name *</label>
        						<input id="lastname" name="lastname" className="form-control" type="text" placeholder="Lastname" value= {this.state.lastname}  onChange={this.changeLastname}  />
        					</div>
        					<div className="form-group">
        						<label htmlFor="age">Age *</label>
        						<input id="age" name="age"  className="form-control" type="number" min="1" placeholder="Age" value= {this.state.age}  onChange={this.changeAge}/>
        					</div>
        					<div className="form-group">
        						<label htmlFor="phone">Phone Number *</label>
        						<input type="text" id="phone" name="phone" className="form-control" value= {this.state.phone}  onChange={this.changePhone} placeholder="Phone number" />
        					</div>
        					<div className="form-group">
        						<label htmlFor="disc">Discription</label>
        						<textarea className="form-control" rows="3" placeholder="Enter Description" value= {this.state.desc}  onChange={this.changeDesc} ></textarea>
        					</div>
        					<button id="submit" type="submit" value="submit" className="btn btn-primary center" onClick={this.save_detail}> Save Details</button>
        				</form>
        			</div>
        		</div>
        	</div>
          <div className="col-md-7 col-lg-7  table-responsive">
            <div className="container">
              <h2> All Entries</h2>
              <table className="table table-condensed">
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                {_.map(this.state.data, entry => {
                  return (<tr>
                    <td>{entry.firstname}</td>
                    <td>{entry.lastname}</td>
                    <td>{entry.age}</td>
                    <td> {entry.phone} </td>
                    <td> {entry.desc} </td>
                  </tr>)
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
  }
}

export default CreateEntry;
