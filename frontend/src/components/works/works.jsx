import React from "react";

import Work from "./work"

import styles from "./works.module.css";

function Works(props) {
  return (
    <div class={`${styles.container} mt-5`}>
      <div class={styles.works}>
        <Work />
        <Work />
        <Work />
        <Work />

      </div>
    </div>
  );
}

export default Works;
