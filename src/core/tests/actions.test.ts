import { ActionType, MarketData } from './../types';
import { 
    requestAustinFeed, 
    requestAustinFeedFailure, 
    requestAustinFeedSuccess ,
    setSelectedCinema
} from './../actions';

describe("core/actions", () => {

    describe("requestAustinFeed", () => {

        it("should return correct action", () => {

            const action = requestAustinFeed();

            expect(action).toEqual({
                type: ActionType.REQUEST_AUSTIN_FEED
            });

        });

    });

    describe("requestAustinFeedFailure", () => {

        it("should return correct action", () => {

            const error = new Error();
            const action = requestAustinFeedFailure(error);

            expect(action).toEqual({
                type: ActionType.REQUEST_AUSTIN_FEED_FAILURE,
                error: error
            });

        });

    });

    describe("requestAustinFeedSuccess", () => {

        it("should return correct action", () => {

            const payload = {} as MarketData;
            const action = requestAustinFeedSuccess(payload);

            expect(action).toEqual({
                type: ActionType.REQUEST_AUSTIN_FEED_SUCCESS,
                payload: payload
            });

        });

    });

    describe("setSelectedCinema", () => {

        it("should return correct action", () => {

            const cinema = {
                "id": "0003",
                "slug": "village",
                "name": "Village",
                "status": "OPEN"
            };
            const action = setSelectedCinema(cinema);

            expect(action).toEqual({
                type: ActionType.SET_SELECTED_CINEMA,
                payload: {cinema}
            });

        });

    });

});