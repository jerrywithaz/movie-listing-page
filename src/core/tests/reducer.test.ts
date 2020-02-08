import reducer, { initialState } from './../reducer';
import { requestAustinFeedFailure, requestAustinFeedSuccess } from './../actions';
import { MarketData } from 'core/types';

describe("core/reducer", () => {

    it("should handle REQUEST_AUSTIN_FEED_FAILURE", () => {
        
        const error = new Error();
        const action = requestAustinFeedFailure(error);

        expect(reducer(initialState, action)).toEqual({
            data: null,
            error: error
        });

    });

    it("should handle REQUEST_AUSTIN_FEED_SUCCESS", () => {
        
        const payload = {} as MarketData;
        const action = requestAustinFeedSuccess(payload);

        expect(reducer(initialState, action)).toEqual({
            data: payload,
            error: null
        });

    });

});