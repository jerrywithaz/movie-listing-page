import { Theme } from './theme';
import { ThemedCssFunction, DefaultTheme } from 'styled-components';

export type BreakpointKeys = "xs" | "sm" | "md" | "lg";

export type Breakpoints = Record<BreakpointKeys, string>;

export type Media = Record<BreakpointKeys, ThemedCssFunction<DefaultTheme>>;

export type ThemeProviderProps = {
    children: React.ReactNode
};

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}