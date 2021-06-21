import { createClient } from "contentful";
import {ReactNode, useMemo } from "react";
import { ContentfulContext } from ".";

export interface ContentfulProviderProps {
    liveMode: boolean;
    children: ReactNode;
}

export const ContentfulProvider = ({
    children,
    liveMode,
}: ContentfulProviderProps) => {

    const client = useMemo(() => {
        return createClient({
            space: process.env.REACT_APP_CTF_SPACE_ID || '',
            accessToken: (liveMode ? process.env.REACT_APP_CTF_CDN_TOKEN : process.env.REACT_APP_CTF_PREVIEW_TOKEN) || '',
            host: liveMode ? 'cdn.contentful.com' : 'preview.contentful.com',
        });
    }, [liveMode]);

    return (
        <ContentfulContext.Provider value={{
            client,
        }}>
            {children}
        </ContentfulContext.Provider>
    )
};
