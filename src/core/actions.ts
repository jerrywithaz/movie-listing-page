import { 
    ActionType, 
    RequestAustinFeedAction, 
    RequestAustinFeedSuccessAction, 
    RequestAustinFeedFailureAction 
} from './types';

export function requestAustinFeed(): RequestAustinFeedAction {
    return {
        type: ActionType.REQUEST_AUSTIN_FEED
    };
}

export function requestAustinFeedSuccess(
    payload: object
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