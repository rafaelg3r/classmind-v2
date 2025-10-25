import styles from "./iconButton.module.css";

// import icon from "../Header/index.tsx"

type IconButtonProps = {
  icon: string;
};

export function IconButton({ icon }: IconButtonProps) {
  return (
    <button className={`elementContainer ${styles.iconButton}`}>
      <img src={"src/assets/icons/" + icon + ".svg"} alt="" />
    </button>
  );
}
