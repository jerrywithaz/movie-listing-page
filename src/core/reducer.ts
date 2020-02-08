import produce, { Draft } from 'immer';
import { ActionType, Actions, AppState } from './types';

export const initialState: AppState = {
    data: {
        market: null,
        selectedCinema: null
    },
    error: null
};

const reducer = (
  state = initialState, 
  action: Actions
): AppState =>
  produce(state, (draft: Draft<AppState>) => {
    switch (action.type) {
        case ActionType.REQUEST_AUSTIN_FEED_SUCCESS:
            draft.data = {
                market: action.payload,
                selectedCinema: null
            };
            draft.error = null;
            break;
        case ActionType.REQUEST_AUSTIN_FEED_FAILURE:
            draft.data = {
                market: null,
                selectedCinema: null
            };
            draft.error = action.error;
            break;
        case ActionType.SET_SELECTED_CINEMA:
            draft.data.selectedCinema = action.payload.cinema;
        break;
    }
});

export default reducer;