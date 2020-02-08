import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from 'components/GlobalStyles';
import MovieListingPage from 'components/MovieListingPage';
import ThemeProvider from 'containers/ThemeProvider';
import configureStore from 'core/store';
import { requestAustinFeed } from 'core/actions';

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