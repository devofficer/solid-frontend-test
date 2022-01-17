import React from "react";
import { Route, Routes } from "react-router-dom";
import MetamaskConnDlg from "./MetamaskConnDlg";
import BalanceDlg from "./BalanceDlg";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<React.Fragment />} />
    <Route path="/connect-with-metamask" element={<MetamaskConnDlg />} />
    <Route path="/get-balance" element={<BalanceDlg />} />
  </Routes>
);

export default AppRouter;