import { ActionType } from './../types';
import { 
    requestAustinFeed, 
    requestAustinFeedFailure, 
    requestAustinFeedSuccess 
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

            const action = requestAustinFeedSuccess({});

            expect(action).toEqual({
                type: ActionType.REQUEST_AUSTIN_FEED_SUCCESS,
                payload: {}
            });
            
        });

    });

});