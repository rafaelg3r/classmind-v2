import styles from "./infoButton.module.css";

type InfoButtonProps = {
  content: string;
};

export function InfoButton({ content }: InfoButtonProps) {
  return <div className={styles.infoContainer}>{content}</div>;
}
