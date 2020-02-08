import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeProvider from './../src/containers/ThemeProvider';
import GlobalStyles from './../src/components/GlobalStyles';
import configureStore from './../src/core/store';
import { Provider } from 'react-redux';

const store = configureStore();

addDecorator(storyFn => (
    <Provider store={store}>
        <ThemeProvider>
            <GlobalStyles/>
            {storyFn()}
        </ThemeProvider>
    </Provider>
));
