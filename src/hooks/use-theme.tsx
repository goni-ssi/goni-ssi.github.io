import { useTheme as useNextTheme } from 'next-themes';
import { Dispatch, SetStateAction, useMemo } from 'react';

export const useTheme = () => {
  const { theme, setTheme } = useNextTheme();

  return useMemo(() => {
    return {
      theme: theme as 'light' | 'dark' | undefined,
      setTheme: setTheme as Dispatch<SetStateAction<'light' | 'dark' | undefined>>,
    };
  }, [theme, setTheme]);
};
