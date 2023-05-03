import React from "react";
import { useSelector } from "react-redux";
import { RootState, WalletFormProps } from "../../Interfaces";
import Expense from "./Expense";
import styled from "styled-components";

function Table() {
  const { expenses } = useSelector((state: RootState) => state.wallet);

  const creatingExpenses = expenses
    .sort((a: any, b: any) => a.id - b.id)
    .map((expense: WalletFormProps) => (
      <Expense
        id={expense.id}
        description={expense.description}
        tag={expense.tag}
        method={expense.method}
        value={expense.value}
      />
    ));

  return (
    <Flex>
      <TableContainer>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>{creatingExpenses}</tbody>
      </TableContainer>
    </Flex>
  );
}

const Flex = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: rgb(83, 156, 201);
  height: 100%;
  width: 100%;
`;

const TableContainer = styled.table`
  border-collapse: collapse;
  thead tr th {
    background-color: rgb(83, 156, 201);
    color: white;
    padding: 10px;
    font-weight: 500;
  }
`;

export default Table;
