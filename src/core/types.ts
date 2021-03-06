import { Store } from 'redux';

export enum ActionType {

    REQUEST_AUSTIN_FEED = "app/REQUEST_AUSTIN_FEED",
    REQUEST_AUSTIN_FEED_SUCCESS = "app/REQUEST_AUSTIN_FEED_SUCCESS",
    REQUEST_AUSTIN_FEED_FAILURE = "app/REQUEST_AUSTIN_FEED_FAILURE",

    SET_SELECTED_CINEMA = "app/SET_SELECTED_CINEMA"

};

export interface Cinema {
    id: string,
    slug: string,
    name: string,
    status: string
};

export interface Market {
    id: string,
    slug: string,
    name: string,
    status: string,
    cinemas: Cinema[]
};

export interface Session {
    cinemaId: string,
    sessionId: string,
    filmSlug: string,
    filmName: string
};

export interface Film {
    slug: string,
    title: string
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

export type SetSelectedCinemaAction = {
    type: ActionType.SET_SELECTED_CINEMA,
    payload: {
        cinema: Cinema
    }
};

export type Actions = (
    RequestAustinFeedAction |
    RequestAustinFeedSuccessAction |
    RequestAustinFeedFailureAction |
    SetSelectedCinemaAction
);

export type SelectedCinema = Cinema | null;

export type AppData = {
    market: MarketData | null,
    selectedCinema: SelectedCinema
};

export type AppState = {
    data: AppData,
    error: Error | null
};

export type AppStore = Store<AppState, Actions> & {
    dispatch: unknown
};
