import { Link } from 'gatsby';
import { useTheme } from '../../hooks/use-theme';
import Moon from '../../images/themes/moon.svg';
import Sun from '../../images/themes/sun.svg';
import { headerCss, homeLinkCss, moonCss, sunCss, themeButtonCss } from './index.css';

export const GlobalHeader = () => {
  const { setTheme } = useTheme();

  return (
    <header className={headerCss}>
      <Link className={homeLinkCss} to="/">
        Goni Log
      </Link>

      <button
        className={themeButtonCss}
        onClick={() => {
          setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
        }}
      >
        <Moon width={24} height={24} className={moonCss} />
        <Sun width={24} height={24} className={sunCss} />
      </button>
    </header>
  );
};
