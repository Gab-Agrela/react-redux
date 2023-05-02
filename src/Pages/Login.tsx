import React from "react";
import LoginForm from "../Components/LoginForm";
<<<<<<< HEAD
import styled from "styled-components";

const Login = () => {
  return (
    <Flex>
      <TitleContainer>
        <Title>Wallet,</Title>
        <Subtitle>Controle de despesas</Subtitle>
      </TitleContainer>
      <LoginForm />
    </Flex>
=======

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
    </div>
>>>>>>> c9dd8683f09c5aaf98b30a4f74806915cd5c2f22
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  height: 100vh;
  width: 100%;
  background-position: 95%;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgb(83, 156, 201);
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 150px;
  left: 150px;
`;
const Title = styled.h1`
  font-size: 56px;
  margin: 0;
  color: #142b3a;
`;

const Subtitle = styled.h1`
  font-size: 56px;
  margin: 0px;
  color: #142b3a;
`;

export default Login;
