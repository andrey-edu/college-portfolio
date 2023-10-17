import React from "react";

import Button from "../button/button";

import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <h1 className="text-extra-big bold">Работы студентов</h1>
      <div className={styles.filters}>
        <Button>Все работы</Button>
        <Button>Иллюстрации</Button>
        <Button>Фото</Button>
        <Button>Шрифты</Button>
      </div>
    </header>
  );
}

export default Header;
