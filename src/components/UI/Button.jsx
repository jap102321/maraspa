import styles from "./Button.module.css";
import { useEffect, useState } from "react";

const Button = ({ title, theme }) => {
  const [thema, setTheme] = useState("test");

  // useEffect to set theme based on prop
  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  //set style to the theme
  const stylingTest = styles[thema];

  return <button className={stylingTest}>{title}</button>;
};

export default Button;
