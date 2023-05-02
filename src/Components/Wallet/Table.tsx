import React from "react";
import { useSelector } from "react-redux";
import { RootState, WalletFormProps } from "../../Interfaces";
import Expense from "./Expense";

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
    <div className="flex-container-table">
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>{creatingExpenses}</tbody>
      </table>
    </div>
  );
}

export default Table;
