import styles from "./header.module.css";

import { dateTime, dayMonth, greeting } from "../../utils/dateTimeGreeting.ts";
import { IconButton } from "../IconButton/index.tsx";

export function Header() {
  return (
    <header>
      <div className={styles.headerNav}>
        <div className={styles.logotipoContainer}>
          <img src="src/assets/icons/teacher.svg" alt="" />
          <strong>ClassMind</strong>
        </div>

        <span className={styles.headerDate}>
          {dayMonth} - {dateTime}
        </span>

        <div className={styles.options}>
          <IconButton icon="gear" />
          <IconButton icon="notify" />
        </div>
      </div>

      <h1>{greeting}, estudante!</h1>

      <div className={styles.headerMisc}></div>
    </header>
  );
}
