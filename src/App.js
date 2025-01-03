import React, { Component } from 'react';
import AddUser from './components/AddUser';
import Users from './components/Users';
import User from './components/User';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id : 1,
          name : "Sherzodbek Mamadaliev",
          email : "sherzodm350@gmail.com"
        },
        {
          id : 2,
          name : "Sherzodbek Mamadaliev",
          email : "sherzodm350@gmail.com"
        },
        {
          id : 3,
          name : "Sherzodbek Mamadaliev",
          email : "sherzodm350@gmail.com"
        }
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  addUser(newUser){
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser);

    this.setState({
      users:updatedUsers
    });
  }
  deleteUser(id) {
    let  updatedUsers  = this.state.users;

    updatedUsers = updatedUsers.filter(user => user.id !== id);
    this.setState({
      users: updatedUsers
    });

  }
 



 render() {
    
  return (
    
   <div className="container">
    <h4>Kullanıcn Ekleme Paneli</h4>
    <hr />
    <AddUser addUser = {this.addUser} />  
    <br />  
    <Users deleteUser = {this.deleteUser} users = {this.state.users} />
    <User />
    
   </div>
    );
  }
}

export default App;
