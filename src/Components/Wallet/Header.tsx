import React from "react";
import { useSelector } from "react-redux";
import { RootState, WalletFormProps } from "../../Interfaces";
import styled from "styled-components";

function Header() {
  const {
    user: { email },
    wallet: { expenses },
  } = useSelector((state: RootState) => state);

  const totalExpenses = expenses.reduce(
    (acc: number, { value }: WalletFormProps) => acc + Number(value),
    0
  );

  return (
    <HeaderContainer>
      <p>{`Usuário: ${email}`}</p>
      <p>{`Soma das despesas: R$${totalExpenses.toFixed(2)}`}</p>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 20px;
  background-color: rgb(83, 156, 201);
  color: whitesmoke;
  p {
    :nth-child(2) {
      padding-right: 50px;
    }
  }
`;

export default Header;
