import { ReactNode } from "react";
import { Prism } from "react-syntax-highlighter";
import { 
    materialLight, 
    materialDark, 
    prism as lightTheme,
    materialDark as darkTheme,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useThemeMode } from "../../hooks";

export interface PrismRendererProps {
    className?: string;
    inline?: boolean;
    children: ReactNode;
}

export const PrismRenderer = ({ className, children, inline, ...props }: PrismRendererProps) => {
    const themeMode = useThemeMode();
    const match = /language-(\w+)/.exec(className || '');

    return !inline && match ? (
        <Prism style={themeMode === 'dark' ? darkTheme : lightTheme} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    )
};
