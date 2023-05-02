import React from "react";
import { useSelector } from "react-redux";
import { RootState, WalletFormProps } from "../../Interfaces";
import { useDispatch } from "react-redux";
import { deleteExpenses } from "../../Redux/Actions";

function Table() {
  const { expenses } = useSelector((state: RootState) => state.wallet);

  const dispatch = useDispatch();

  const removeExpenses = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.target as HTMLButtonElement;
    dispatch(deleteExpenses(Number(id)));
  };

  const creatingExpenses = expenses
    .sort((a: any, b: any) => a.id - b.id)
    .map((expense: WalletFormProps) => (
      <tr key={expense.id}>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{Number(expense.value).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button type="button" className="editar">
            Editar
          </button>
          <button
            type="button"
            className="excluir"
            onClick={removeExpenses}
            id={expense.id.toString()}
          >
            Excluir
          </button>
        </td>
      </tr>
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
