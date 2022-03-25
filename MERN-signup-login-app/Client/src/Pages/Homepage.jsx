import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Body = styled.div`
background-color: #d0d6e0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled.div`
    width: 350px;
    height: 60px;
    border: 2px solid #eee;
    background-color: #b6bdc9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    padding: 7px;
`;
const Signupbutton = styled.button`
    width: 100%;
    height: 55px;
    margin-right: 7px;
    border: none;
    border-radius: 5px;
    background-color: #e9ecf0;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
            background-color: #e9ecf0d1
        }
`;
const Loginbutton = styled.button`
    width: 100%;
    height: 55px;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    background-color: #1859c9;
    cursor: pointer;

    &:hover {
            background-color: #1859c9db
    }
`;

 const Homepage = () => {

    let navigate = useNavigate(); 
    const RegisterrouteChange = () =>{ 
    let path = `/register`; 
    navigate(path);
  }
  const LoginrouteChange = (e) =>{ 
    e.preventDefault();
    let path = `/login`; 
    navigate(path);
  }


  return (
    <Body>
        <Button>
            <Signupbutton onClick={RegisterrouteChange}>Register</Signupbutton>
            <Loginbutton onClick={LoginrouteChange}>LOGIN</Loginbutton>
        </Button>
    </Body>
  )
}

export default Homepage