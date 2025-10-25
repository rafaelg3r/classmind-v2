import styles from "./iconButton.module.css";

//images
import gearIcon from "../../assets/icons/gear.svg";
import notifyIcon from "../../assets/icons/notify.svg";

type IconButtonProps = {
  icon: string;
};

export function IconButton({ icon }: IconButtonProps) {
  if (icon === "gear") {
    icon = gearIcon;
  } else if (icon === "notify") {
    icon = notifyIcon;
  }

  return (
    <button className={`elementContainer ${styles.iconButton}`}>
      <img src={icon} alt="" />
    </button>
  );
}
