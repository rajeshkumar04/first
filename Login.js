import React ,{useState,useContext}from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Form, Input } from 'reactstrap';
import { store } from '../App';
import { Redirect } from 'react-router-dom';
const Login = () => {
  const [token , setToken]= useContext(store);
  const [login , setLogin]=useState({
    email:"",
    password:""
  })
  const {email,password}=login;
  const changehandler = (e)=>
  {
    setLogin({...login,[e.target.name]:e.target.value})
  }
  const submithandler = (e) =>
  {
            e.preventDefault();
           
            
              axios.post("http://localhost:8000/login",login).then(
              res =>setToken(res.data.token) 
            )
            
           
          
  }
  
  if(token)
  {
    return <Redirect to="/ExamPage"/>
  }
  
  return <div>
      <h1>Login page</h1>
        <Form onSubmit={submithandler} autoComplete='off'>
          <Input type='email' name='email' placeholder='enter email' value={email} onChange={changehandler}/>
          <Input type='password' name='password' placeholder='******' value={password} onChange={changehandler}/>
          <Button color='primary' value="Login">Login</Button>
        </Form>
  </div>;
};

export default Login;
