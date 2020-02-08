import { createSelector } from 'reselect';
import { AppState } from './types';

const selectState = (state: AppState) => state;

const makeSelectState = () => {
    return createSelector(
        selectState,
        appState => appState
      );
}

export {
    selectState,
    makeSelectState
};


