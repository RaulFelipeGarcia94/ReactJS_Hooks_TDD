import React, { memo } from "react";
import Styles from "./login-header-styles.scss";
import { Logo } from "../";

const LoginHeader = () => (
  <header className={Styles.header}>
    <Logo />
    <h1>4Dev - Enquetes para programadores</h1>
  </header>
);

export default memo(LoginHeader);
