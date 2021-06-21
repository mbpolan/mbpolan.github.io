import { createContext } from "react";

export interface ICacheContext {
    data: Record<string, any>;
}

export const CacheContext = createContext<ICacheContext>({
    data: {},
});
