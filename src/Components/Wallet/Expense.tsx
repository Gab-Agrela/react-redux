import React from "react";
import { WalletFormProps } from "../../Interfaces";
import { useDispatch } from "react-redux";
import { deleteExpenses } from "../../Redux/Actions";

function Expense({ id, description, tag, method, value }: WalletFormProps) {
  const dispatch = useDispatch();

  const removeExpenses = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.target as HTMLButtonElement;
    dispatch(deleteExpenses(Number(id)));
  };
  return (
    <tr key={id}>
      <td>{description}</td>
      <td>{tag}</td>
      <td>{method}</td>
      <td>{Number(value).toFixed(2)}</td>
      <td>Real</td>
      <td>
        <button type="button" className="editar">
          Editar
        </button>
        <button
          type="button"
          className="excluir"
          onClick={removeExpenses}
          id={id.toString()}
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

export default Expense;
