import { ReactNode } from "react";
import { ThemeMode, ThemeModeContext } from "./context";

export interface ThemeModeProviderProps {
    children: ReactNode;
    mode: ThemeMode;
}

export const ThemeModeProvider = ({ children, mode }: ThemeModeProviderProps) => {
    return (
        <ThemeModeContext.Provider value={mode}>
            {children}
        </ThemeModeContext.Provider>
    )
}