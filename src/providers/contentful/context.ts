import { ContentfulClientApi } from 'contentful';
import { createContext } from 'react';

export interface IContentfulContext {
    client?: ContentfulClientApi;
}

export const ContentfulContext = createContext<IContentfulContext>({});
