import { 
    ActionType, 
    RequestAustinFeedAction, 
    RequestAustinFeedSuccessAction, 
    RequestAustinFeedFailureAction, 
    MarketData,
    SetSelectedCinemaAction,
    Cinema
} from './types';

export function requestAustinFeed(): RequestAustinFeedAction {
    return {
        type: ActionType.REQUEST_AUSTIN_FEED
    };
}

export function requestAustinFeedSuccess(
    payload: MarketData
): RequestAustinFeedSuccessAction {
    return {
        type: ActionType.REQUEST_AUSTIN_FEED_SUCCESS,
        payload: payload
    };
}

export function requestAustinFeedFailure(
    error: Error
): RequestAustinFeedFailureAction{
    return {
        type: ActionType.REQUEST_AUSTIN_FEED_FAILURE,
        error: error
    };
}

export function setSelectedCinema(
    cinema: Cinema
): SetSelectedCinemaAction{
    return {
        type: ActionType.SET_SELECTED_CINEMA,
        payload: { cinema }
    };
}