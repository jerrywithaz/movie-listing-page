import produce, { Draft } from 'immer';
import { ActionType, Actions, AppState } from './types';

export const initialState: AppState = {
    data: null,
    error: null
};

const reducer = (
  state = initialState, 
  action: Actions
): AppState =>
  produce(state, (draft: Draft<AppState>) => {
    switch (action.type) {
        case ActionType.REQUEST_AUSTIN_FEED_SUCCESS:
            draft.data = action.payload;
            draft.error = null;
            break;
        case ActionType.REQUEST_AUSTIN_FEED_FAILURE:
            draft.data = null;
            draft.error = action.error;
        break;
    }
});

export default reducer;