import React, {useState} from 'react'
import styled from 'styled-components';
import Register from './Register';
import { useNavigate } from "react-router-dom";
import Homepage from './Homepage';
//import useHistory from 'react-router-dom';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
//  const history = useHistory();

  const [user, setUser] = useState({
    username: "", password: ""
  });

  let name, value;

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user , [name]:value});
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    const {username, password} = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
      username, password
      })
    });

    const data = await res.json();
    if(data.status ===402 || !data){
      window.alert("Invalid Data Entered!");
      navigate("/register")
    }else {
      window.alert("Data Posted Succesfuly!");
      navigate("/")
    }
  };

  
  let navigate = useNavigate();
  const RegisterrouteChange = () =>{ 
    let path = `/register`; 
    navigate(path);
  }

  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form method='POST'>
        <Input type="text" name="username" value={user.username} onChange={handleInput} placeholder="username" />
        <Input type="text" name="password" value={user.password} onChange={handleInput} placeholder="password" />
        <Button type="submit" name="login" onClick={handleSignin}>LOGIN</Button>
        <Link>DO NOT REMEMBER THE PASSWORD?</Link>
        <Link onClick={RegisterrouteChange}>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login