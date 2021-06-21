import { createContext } from "react";

export type ThemeMode = 'light' | 'dark';

export const ThemeModeContext = createContext<ThemeMode>('light');
