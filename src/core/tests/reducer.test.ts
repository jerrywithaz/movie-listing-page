import reducer, { initialState } from './../reducer';
import { requestAustinFeedFailure, requestAustinFeedSuccess, setSelectedCinema } from './../actions';
import { MarketData } from 'core/types';

describe("core/reducer", () => {

    it("should handle REQUEST_AUSTIN_FEED_FAILURE", () => {
        
        const error = new Error();
        const action = requestAustinFeedFailure(error);

        expect(reducer(initialState, action)).toEqual({
            data: initialState.data,
            error: error
        });

    });

    it("should handle REQUEST_AUSTIN_FEED_SUCCESS", () => {
        
        const payload = {} as MarketData;
        const action = requestAustinFeedSuccess(payload);

        expect(reducer(initialState, action)).toEqual({
            data: {
                market: payload,
                selectedCinema: null
            },
            error: null
        });

    });

    it("should handle SET_SELECTED_CINEMA", () => {
        
        const cinema = {
            "id": "0003",
            "slug": "village",
            "name": "Village",
            "status": "OPEN"
        };
        const action = setSelectedCinema(cinema);

        expect(reducer(initialState, action)).toEqual({
            data: {
                market: null,
                selectedCinema: cinema
            },
            error: null
        });

    });

});