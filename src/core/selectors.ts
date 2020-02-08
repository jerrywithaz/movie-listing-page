import { createSelector } from 'reselect';
import { AppState } from './types';

const selectState = (state: AppState) => state;

const makeSelectState = () => {
    return createSelector(
        selectState,
        appState => appState
    );
}

/**
 * Returns the market data from the state
 */
const makeSelectMarket = () => {
    return createSelector(
        selectState,
        appState => appState.data.market
    );
}

/**
 * Returns the current selected cinema (theater)
 */
const makeSelectSelectedCinema = () => {
    return createSelector(
        selectState,
        appState => appState.data.selectedCinema
    );
}

/**
 * Returns all of the available cinemas in the current market
 */
const makeSelectCinemas = () => {
    return createSelector(
        makeSelectMarket(),
        marketState => marketState ? marketState.market.cinemas : []
    );
};

/**
 * Returns the films playing for the selected theater in the current market
 */
const makeSelectFilms = () => {
    return createSelector(
        makeSelectMarket(),
        makeSelectSelectedCinema(),
        (market, selectedCinema) => null
    );
};

export {
    selectState,
    makeSelectState,
    makeSelectCinemas,
    makeSelectFilms,
    makeSelectSelectedCinema
};


