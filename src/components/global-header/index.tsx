import { Link } from 'gatsby';
import { useTheme } from '../../hooks/use-theme';
import Moon from '../../images/themes/moon.svg';
import Sun from '../../images/themes/sun.svg';
import {
  bottomWrapperCss,
  headerCss,
  homeLinkCss,
  linkCss,
  moonCss,
  selectedLinkCss,
  sunCss,
  themeButtonCss,
  topWrapperCss,
} from './index.css';
import clsx from 'clsx';
import { Paths } from '../../constants/paths';
import { useLocation } from '@reach/router';

export const GlobalHeader = () => {
  const { pathname } = useLocation();
  const { setTheme } = useTheme();

  return (
    <header className={headerCss}>
      <div className={topWrapperCss}>
        <Link className={homeLinkCss} to={Paths.home}>
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
      </div>
      <div className={bottomWrapperCss}>
        {Object.entries(PathMap).map(([path, label]) => {
          return (
            <Link
              key={path}
              className={clsx(linkCss, {
                [selectedLinkCss]: pathname === path,
              })}
              to={path}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

const PathMap = {
  [Paths.posts]: 'Posts',
  [Paths.categories]: 'Categories',
  [Paths.tags]: 'Tags',
} as const;
