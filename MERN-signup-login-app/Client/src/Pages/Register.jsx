import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Space = styled.div`
margin-left: 19%;
`;

const Register = () => {

  const [user, setUser] = useState({
    firstname: "", lastname: "", username: "", email: "", password: ""
  });

  let data, value;
  const handleInput = (e) => {
    data = e.target.name;
    value = e.target.value;

    setUser({ ... user, [data]:value});
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const {firstname, lastname, username, email, password} = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        firstname, lastname, username, email, password
      })
    });

    const inputdata = await res.json();
    if(inputdata.status ===402 || !inputdata){
      window.alert("Invalid Data Entered!");
     // e.target.reset();
    }else {
      window.alert("Data Posted Succesfuly!");
    //  history.push("/");
    }
  };

  let navigate = useNavigate();
  const handleLogin = (e) => {
     
    e.preventDefault();
    let path = `/login`; 
    navigate(path);
  };

  return (
    
    <Container>
    <Wrapper>
      <Title>CREATE AN ACCOUNT</Title>
      <Form>
        <Input type="text" name="firstname" value={user.firstname} onChange={handleInput} placeholder="first name" />
        <Input type="text" name="lastname" value={user.lastname} onChange={handleInput} placeholder="last name" />
        <Input type="text" name="username" value={user.username} onChange={handleInput} placeholder="username" />
        <Input type="text" name='email' value={user.email} onChange={handleInput} placeholder="email" />
        <Input type="text" name='password' value={user.password} onChange={handleInput} placeholder="password" />
        <Input placeholder="confirm password" />
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button type="submit" name='signup' onClick={handleSignup}>CREATE</Button>
        <Space></Space>
        <Button type="submit" name='login' onClick={handleLogin}>OR LOGIN?</Button>
      </Form>
    </Wrapper>
  </Container>

  )
}

export default Register