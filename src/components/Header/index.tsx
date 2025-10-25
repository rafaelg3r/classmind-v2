import styles from "./header.module.css";

import { greeting } from "../../utils/greeting.ts";
import { IconButton } from "../IconButton/index.tsx";
import { InfoButton } from "../InfoButton/index.tsx";

//images
import teacherIcon from "../../assets/icons/teacher.svg";

export function Header() {
  return (
    <header>
      <div className={styles.headerNav}>
        <div className={`elementContainer ${styles.logotipoContainer}`}>
          <img src={teacherIcon} alt="" />
          <strong>ClassMind</strong>
        </div>

        <div className={styles.options}>
          <IconButton icon="gear" />
          <IconButton icon="notify" />
        </div>
      </div>

      <h1>{greeting}, estudante!</h1>

      <InfoButton content="Última atualização: 15:30" />
    </header>
  );
}
