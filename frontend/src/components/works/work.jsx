import React from "react";

import styles from "./works.module.css";

function Work(props) {
  return (
    <div class={styles.work}>
      <img class={styles.image} src="https://vsegda-pomnim.com/uploads/posts/2022-03/1648623545_43-vsegda-pomnim-com-p-ostrov-vrangelya-zapovednik-foto-61.jpg" alt="" />
    </div>
  );
}

export default Work;
