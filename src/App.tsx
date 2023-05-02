import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Login from "./Pages/Login";
import Wallet from "./Pages/Wallet";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/wallet" element={<Wallet />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
