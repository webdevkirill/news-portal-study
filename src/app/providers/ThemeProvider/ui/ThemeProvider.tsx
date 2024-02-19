import React, { useEffect, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'shared/theme';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface IThemeProviderProps {
  initialTheme?: Theme;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = props => {
  const [theme, setTheme] = useState<Theme>(props.initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>{props.children}</ThemeContext.Provider>;
};
