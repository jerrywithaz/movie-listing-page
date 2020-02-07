import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { ThemeProviderProps } from './types';
import theme from './theme';

function ThemeProvider(props: ThemeProviderProps) {
    return <Provider {...props} theme={theme}/>;
};

export default ThemeProvider;