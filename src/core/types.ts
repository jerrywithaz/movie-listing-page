export enum ActionType {
    REQUEST_AUSTIN_FEED = "app/REQUEST_AUSTIN_FEED",
    REQUEST_AUSTIN_FEED_SUCCESS = "app/REQUEST_AUSTIN_FEED_SUCCESS",
    REQUEST_AUSTIN_FEED_FAILURE = "app/REQUEST_AUSTIN_FEED_FAILURE",
};

export type RequestAustinFeedAction = {
    type: ActionType.REQUEST_AUSTIN_FEED
};

export type RequestAustinFeedSuccessAction = {
    type: ActionType.REQUEST_AUSTIN_FEED_SUCCESS,
    payload: {}
};

export type RequestAustinFeedFailureAction = {
    type: ActionType.REQUEST_AUSTIN_FEED_FAILURE,
    error: Error
};

export type Actions = (
    RequestAustinFeedSuccessAction |
    RequestAustinFeedFailureAction
);

export type AppState = {
    data: object | null,
    error: Error | null
};
