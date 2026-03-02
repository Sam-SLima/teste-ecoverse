import styles from "./styles.module.scss";
import type { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}
const SimpleButton = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...rest
}: ButtonProps) => {
  const buttonClass = `
  ${styles.button}
  ${styles[variant]}
  ${fullWidth ? styles.fullWidth : ""}
  ${className || ""}
  `.trim();

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default SimpleButton;
