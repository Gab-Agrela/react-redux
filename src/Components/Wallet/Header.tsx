import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Interfaces";

function Header() {
  const { email } = useSelector((state: RootState) => state.user);
  return <h1>{`Usuário: ${email}`}</h1>;
}

export default Header;
