import React, { ChangeEvent, useState } from "react";
import { WalletFormProps } from "../../Interfaces";
import { sendExpenses } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function Form() {
  const [formValues, setFormValues] = useState<WalletFormProps>({
    id: 0,
    value: "",
    description: "",
    method: "Dinheiro",
    tag: "Alimentação",
  });

  const dispatch = useDispatch();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const field = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [field]: value });
  };

  const addExpenses = () => {
    dispatch(sendExpenses(formValues));
    setFormValues({
      id: (formValues.id += 1),
      value: "",
      description: "",
      method: "Dinheiro",
      tag: "Alimentação",
    });
  };

  return (
    <FormContainer>
      <Flex>
        <input
          type="number"
          name="value"
          value={formValues.value}
          placeholder="Valor Despesa"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={formValues.description}
          placeholder="Descrição"
          autoComplete="off"
          onChange={handleChange}
        />
        <select name="method" value={formValues.method} onChange={handleChange}>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select name="tag" value={formValues.tag} onChange={handleChange}>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        {false ? (
          <button type="button">Editar despesa</button>
        ) : (
          <button type="button" onClick={addExpenses}>
            Adicionar despesa
          </button>
        )}
      </Flex>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  background-color: #3c7ca7;
  padding: 15px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  background-color: #3c7ca7;
  padding: 5px;
  input {
    padding: 5px;
    border: none;
    border-bottom: 1px solid white;
    background-color: #3c7ca7;
    color: black;
    margin: 5px;
    ::placeholder {
      color: whitesmoke;
    }
  }

  button {
    margin-top: 15px;
    text-align: center;
    background-color: rgb(83, 156, 201);
    border: none;
    color: white;
    font-weight: 400;
    border-radius: 3px;
    padding: 5px;
    :hover {
      background-color: #1a91d6;
    }
  }
  select {
    margin-top: 15px;
    text-align: center;
    background-color: rgb(83, 156, 201);
    border: none;
    color: white;
    font-weight: 400;
    border-radius: 3px;
    padding: 5px;
    :hover {
      background-color: #1a91d6;
    }
  }
`;

export default Form;
