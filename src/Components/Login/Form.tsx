import React, { ChangeEvent, useEffect, useState } from "react";
import { validateLogin } from "../../Utils/functions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveEmail } from "../../Redux/Actions";
import styled from "styled-components";
import { UserProps } from "../../Interfaces";

function LoginForm() {
  const [user, setUser] = useState<UserProps>({
    email: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [field]: value });
  };

  const buttonOnClick = () => {
    dispatch(saveEmail(user.email));
    navigate("/wallet");
  };

  useEffect(() => {
    const { email, password } = user;
    const isValidFields = validateLogin(email, password);
    setIsDisabled(!isValidFields);
  }, [user]);

  return (
    <FormContainer>
      <Title>Login</Title>
      <Email>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Digite seu email"
        />
      </Email>
      <Password>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Digite sua senha"
        />
      </Password>
      <div>
        <Button disabled={isDisabled} onClick={buttonOnClick}>
          Entrar
        </Button>
      </div>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  background-color: #3c7ca7;
  border-radius: 10px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.75);
  padding: 15px;
  color: white;
`;

const Title = styled.h1`
  font-size: 42px;
  margin: 20px;
`;

const Email = styled.div`
  display: flex;
  padding: 5px;
  input {
    padding: 5px;
    border: none;
    font-size: 18px;
    border-bottom: 1px solid white;
    background-color: transparent;
    color: black;
    margin: 5px;
    ::placeholder {
      color: whitesmoke;
    }
  }
`;

const Password = styled.div`
  padding: 5px;
  input {
    border: none;
    padding: 5px;
    font-size: 18px;
    border-bottom: 1px solid white;
    background-color: transparent;
    color: black;
    margin: 5px;
    ::placeholder {
      color: whitesmoke;
    }
  }
`;

const Button = styled.button`
  margin-top: 15px;
  text-align: center;
  width: 100px;
  height: 35px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  background-color: rgb(83, 156, 201);
  border: none;
  color: white;
  border-radius: 3px;
  padding: 5px;
  :disabled {
    background-color: #94bfd9;
    opacity: 0.7;
  }
  :hover {
    background-color: #94bfd9;
  }
`;

export default LoginForm;
