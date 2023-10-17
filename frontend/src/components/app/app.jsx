// import logo from './logo.svg';
import React from "react";

import Header from "../header/header"
import Works from "../works/works"

import styles from "./app.module.css"

function App() {
  return (
    <div className={`${styles.app} pt-5 pl-5 pr-5`}>
      <Header />
      <Works />
    </div>
  );
}

export default App;
