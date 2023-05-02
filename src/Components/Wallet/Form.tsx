import React, { ChangeEvent, useState } from "react";
import { WalletFormProps } from "../../Interfaces";
import { sendExpenses } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

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
    <div>
      <div>
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
      </div>
    </div>
  );
}

export default Form;
