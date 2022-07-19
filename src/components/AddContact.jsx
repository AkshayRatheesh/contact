import React, { Component } from 'react'
import ContactList from './ContactList';

export default class AddContact extends Component {
    state={
        name:"",
        email:"",
    };
    add=(e)=>{
        e.preventDefault();
        if(this.state.name ==="" && this.state.email===""){
            alert("all the feilds are empty");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        console.log(this.state);
    };
  render() {
    return (
        <div className='ui main'>
        <h2>add contact</h2>
        <form className='ui form' onSubmit={this.add}>
            <div className='feild'>
                <label>name</label>
                <input 
                type="text"
                name="name" 
                placeholder="name"
                value={this.state.name}
                onChange={(e)=>{this.setState({name:e.target.value})}}
            />
            </div>
            <div  className='feild'>
                <label>email</label>
                <input type="text" 
                name='mail' 
                placeholder='mail'
                value={this.state.email}
                onChange={(e)=>this.setState({email:e.target.value})}
             />
            </div>
            <button className='ui button blue'>add contact</button>
        </form>
    </div>
    );
  }
}
