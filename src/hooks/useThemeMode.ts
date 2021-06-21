import { useContext } from 'react';
import { ThemeMode, ThemeModeContext } from '../providers/themeMode';

export const useThemeMode = (): ThemeMode => {
  const context = useContext(ThemeModeContext);
  return context;
};
