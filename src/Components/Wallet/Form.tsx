import React, { ChangeEvent, useEffect, useState } from "react";
import { RootState, WalletFormProps } from "../../Interfaces";
import { sendExpenses, sendNewExpenseValue } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Form() {
  const [formValues, setFormValues] = useState<WalletFormProps>({
    id: 0,
    value: "",
    description: "",
    method: "Dinheiro",
    tag: "Alimentação",
  });
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { expenses, editExpenseId } = useSelector(
    (state: RootState) => state.wallet
  );

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

  const editExpense = () => {
    console.log({ ...formValues, id: editExpenseId });
    dispatch(sendNewExpenseValue({ ...formValues, id: editExpenseId }));
    setFormValues({
      id: formValues.id,
      value: "",
      description: "",
      method: "Dinheiro",
      tag: "Alimentação",
    });
  };

  useEffect(() => {
    setIsDisabled(!(formValues.value && formValues.description));
  }, [formValues]);

  useEffect(() => {
    if (editExpenseId !== 0) {
      const editExpense: WalletFormProps | undefined = expenses.find(
        (expense) => expense.id === editExpenseId
      );
      editExpense && setFormValues({ ...editExpense, id: formValues.id });
    }
  }, [editExpenseId, expenses, formValues.id]);

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
        {editExpenseId ? (
          <button type="button" onClick={editExpense}>
            Editar despesa
          </button>
        ) : (
          <button type="button" onClick={addExpenses} disabled={isDisabled}>
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
    :disabled {
      background-color: #94bfd9;
      opacity: 0.7;
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
