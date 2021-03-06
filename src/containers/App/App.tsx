import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from 'components/GlobalStyles';
import MovieListingPage from 'containers/MovieListingPage';
import ThemeProvider from 'containers/ThemeProvider';
import configureStore from 'core/store';
import { requestAustinFeed } from 'core/actions';

import 'assets/styles/fonts.css';

const store = configureStore();

function App() {

    useEffect(() => {
        store.dispatch(requestAustinFeed());
    }, []);

    return (
        <Provider store={store}>
            <ThemeProvider>
                <GlobalStyles/>
                <MovieListingPage/>
            </ThemeProvider>
        </Provider>
        
    );
}

export default App;