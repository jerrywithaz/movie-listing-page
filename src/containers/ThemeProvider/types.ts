import { Theme } from './theme';

export type ThemeProviderProps = {
    children: React.ReactNode
};

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}