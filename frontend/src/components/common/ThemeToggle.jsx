import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  return (
    <i
      className={`fa-solid ${dark ? "fa-sun" : "fa-moon"}`}
      onClick={() => setDark(!dark)}
      title="Toggle Theme"
    ></i>
  );
};

export default ThemeToggle;
