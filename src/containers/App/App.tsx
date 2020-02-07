import React from 'react';
import GlobalStyles from 'components/GlobalStyles';
import MovieListingPage from 'components/MovieListingPage';
import ThemeProvider from 'containers/ThemeProvider';

function App() {
    return (
        <ThemeProvider>
            <GlobalStyles/>
            <MovieListingPage/>
        </ThemeProvider>
    );
}

export default App;