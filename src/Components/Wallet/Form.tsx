import React, { ChangeEvent, useState } from "react";
import { WalletFormProps } from "../../Interfaces";

function Form() {
  const [formValues, setFormValues] = useState<WalletFormProps>({
    value: "",
    description: "",
    method: "Dinheiro",
    tag: "Alimentação",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const field = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [field]: value });
  };

  console.log(formValues);

  return (
    <div>
      <div>
        <input
          type="number"
          name="value"
          placeholder="Valor Despesa"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          autoComplete="off"
          onChange={handleChange}
        />
        <select name="method" onChange={handleChange}>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select name="tag" onChange={handleChange}>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        {true ? (
          <button type="button">Editar despesa</button>
        ) : (
          <button type="button">Adicionar despesa</button>
        )}
      </div>
    </div>
  );
}

export default Form;
