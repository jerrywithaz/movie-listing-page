import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeProvider from './../src/containers/ThemeProvider';
import GlobalStyles from './../src/components/GlobalStyles';

addDecorator(storyFn => (
    <ThemeProvider>
        <GlobalStyles/>
        {storyFn()}
    </ThemeProvider>
));