import React from "react";
import { WalletFormProps } from "../../Interfaces";
import { useDispatch } from "react-redux";
import { deleteExpenses } from "../../Redux/Actions";
import styled from "styled-components";

function Expense({ id, description, tag, method, value }: WalletFormProps) {
  const dispatch = useDispatch();

  const removeExpenses = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.target as HTMLButtonElement;
    dispatch(deleteExpenses(Number(id)));
  };
  return (
    <Row key={id}>
      <td>{description}</td>
      <td>{tag}</td>
      <td>{method}</td>
      <td>{Number(value).toFixed(2)}</td>
      <td>Real</td>
      <td>
        <EditButton type="button">Editar</EditButton>
        <DeleteButton type="button" onClick={removeExpenses} id={id.toString()}>
          Excluir
        </DeleteButton>
      </td>
    </Row>
  );
}

const Row = styled.tr`
  background-color: whitesmoke;
  border-bottom: 1px solid black;
  td {
    text-align: center;
    padding: 10px;
  }
`;

const EditButton = styled.button`
  text-align: center;
  border: none;
  background-color: rgb(83, 156, 201);
  font-weight: 400;
  color: whitesmoke;
  padding: 5px;
  margin: 2px;
  width: 55px;
  border-radius: 3px;
  :hover {
    background-color: #1a91d6;
  }
`;

const DeleteButton = styled.button`
  text-align: center;
  border: none;
  background-color: #dd4b39;
  font-weight: 400;
  color: whitesmoke;
  padding: 5px;
  margin: 2px;
  width: 55px;
  border-radius: 3px;
  :hover {
    background-color: #e21e18;
  }
`;

export default Expense;
