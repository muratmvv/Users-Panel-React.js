import React, { Component } from 'react';
import User from"./User";


class Users extends Component{
    render (){
      const { users,deleteUser } = this.props;
        return(
            <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Ad Soyad</th>
                <th scope="col">Email</th>
                <th scope="col">Sil</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => {
                  const {id,name,email} = user;

                  return ( 
                  <User 
                    key = {id} 
                    id = {id} 
                    name = {name} 
                    email = {email} 
                    deleteUser = {deleteUser}
                  /> 
                  );
                  
                })}
            </tbody>
          </table>
          
        );
    }
}

export default Users;