export enum ActionType {
    REQUEST_AUSTIN_FEED = "app/REQUEST_AUSTIN_FEED",
    REQUEST_AUSTIN_FEED_SUCCESS = "app/REQUEST_AUSTIN_FEED_SUCCESS",
    REQUEST_AUSTIN_FEED_FAILURE = "app/REQUEST_AUSTIN_FEED_FAILURE",
};

export interface Cinema {
    id: string,
    slug: string,
    name: string,
    status: string
};

export interface MarketString {
    key: string,
    value: string
};

export interface Market {
    id: string,
    slug: string,
    name: string,
    status: string,
    isOpenAccessSeasonPassMarket: boolean,
    cinemas: Cinema[],
    marketStrings: MarketString[],
};

export interface Session {
    cinemaId: string,
    sessionId: string,
    filmHeadOfficeCode: string,
    filmSlug: string,
    filmName: string,
    screenNumber: string,
    recognitionIds: string[]
};

export interface Film {
    headOfficeCode: string,
    slug: string,
    title: string,
    headline: string,
    landscapeHeroImage: string,
    portraitHeroImage: string,
    isRepertory: boolean,
    rating: string
};

export type MarketData = {
    market: Market,
    sessions: Session[],
    films: Film[]
};

export type RequestAustinFeedAction = {
    type: ActionType.REQUEST_AUSTIN_FEED
};

export type RequestAustinFeedSuccessAction = {
    type: ActionType.REQUEST_AUSTIN_FEED_SUCCESS,
    payload: MarketData
};

export type RequestAustinFeedFailureAction = {
    type: ActionType.REQUEST_AUSTIN_FEED_FAILURE,
    error: Error
};

export type Actions = (
    RequestAustinFeedAction |
    RequestAustinFeedSuccessAction |
    RequestAustinFeedFailureAction
);

export type AppState = {
    data: MarketData | null,
    error: Error | null
};
