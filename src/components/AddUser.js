import React, { Component } from 'react';

class AddUser extends Component{
  state = {
     name: "",
     email: ""
  };
  onNameChange(e){
    
     this.setState({
      [e.target.name] : e.target.value
     })
  }
  onEmailChange(e){
    this.setState({
      [e.target.name] : e.target.value
     })
  }
  onAddSubmit(e){
    const { addUser } = this.props;
    const { name,email } = this.state;
    const newUser = {
      id: Math.random(),
      name: name,
      email:email
    };
    addUser(newUser);
    e.preventDefault();
  }
    render(){   //Render Fonksiyonu Componentten geliyor
      const { name,email } = this.state;
       return(
         <div className='card'>
              <h4 className='card-header'>Kullanıcı Ekleme</h4>
              <div className='card-body'>
                <form onSubmit={this.onAddSubmit.bind(this)}>
                  <div className='form-group'>
                    <label htmlFor='name'>Ad Soyad</label>
                    <input type='text' name='name' id='name' placeholder='Lütfen İsim Giriniz' className='form-control' value={name} onChange={this.onNameChange.bind(this)}></input>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Lütfen Email Adresini Giriniz</label>
                    <input type='email' name='email' id='email' placeholder='Lütfen Email Adresini Giriniz' className='form-control' value={email} onChange={this.onEmailChange.bind(this)}></input>
                  </div>
                  <button type='submit' className='btn btn-danger btn-block'>Kullanıcı Ekle</button>
                </form>
              </div>
         </div>
       )
    }  
}


export default AddUser;  //EXPORT etmek için kullanıyoruz yani başka bir dosya içerisinde kullanmak için