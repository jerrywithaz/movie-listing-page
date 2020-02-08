import { createSelector } from 'reselect';
import { AppState } from './types';

const selectState = (state: AppState) => state;

const makeSelectState = () => {
    return createSelector(
        selectState,
        appState => appState
      );
}

const makeSelectCinemas = () => {
    return createSelector(
        selectState,
        appState => appState.data?.market.cinemas
      );
};

export {
    selectState,
    makeSelectState,
    makeSelectCinemas
};


