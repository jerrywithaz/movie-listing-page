import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from 'redux';
import { makeSelectCinemas, makeSelectSelectedCinema, makeSelectFilms } from 'core/selectors';
import { MovieListingPageProps, MovieListingPageMappedProps, MovieListingPageMappedDispatch } from './types';
import { AppState, Cinema } from 'core/types';
import { setSelectedCinema } from 'core/actions';

import * as Styled from './style';

function MovieListingPage({
    theaters, 
    selectedTheater,
    setSelectedTheater,
    films,
    ...rest
}: MovieListingPageProps) {

    return (
        <Styled.MovieListingPage {...rest}>
            <Styled.Hero/>
            <Styled.FindAMovie
                films={films} 
                theaters={theaters} 
                selectedTheater={selectedTheater}
                setSelectedTheater={setSelectedTheater}/>
        </Styled.MovieListingPage>
    );

}

const mapStateToProps = createStructuredSelector<AppState, MovieListingPageMappedProps>({
    theaters: makeSelectCinemas(),
    selectedTheater: makeSelectSelectedCinema(),
    films: makeSelectFilms()
});

const mapDispatchToProps = (dispatch: Dispatch): MovieListingPageMappedDispatch => {
    return {
        setSelectedTheater: (cinema: Cinema) => dispatch(setSelectedCinema(cinema))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListingPage);