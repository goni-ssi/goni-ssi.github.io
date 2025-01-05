import { darkModeCss, headerCss, homeLinkCss, lightModeCss } from "./index.css";
import { useTheme } from "../../hooks/use-theme";

export const GlobalHeader = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className={headerCss}>
      <a className={homeLinkCss}>Goni</a>

      <button
        onClick={() => {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }}
      >
        <span className={darkModeCss}>🌙</span>
        <span className={lightModeCss}>☀️</span>
      </button>
    </header>
  );
};
