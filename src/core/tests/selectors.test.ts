import { MarketData } from './../types';
import { makeSelectState, selectState, makeSelectCinemas } from './../selectors';

describe("core/selectors", () => {

    describe("selectState", () => {

        it("should return the state", () => {

            const mockedState = {
                data: null,
                error: null
            };
        
            expect(selectState(mockedState)).toEqual(mockedState);

        });

    });

    describe("makeSelectState", () => {

        it("should return the state", () => {

            const mockedState = {
                data: null,
                error: null
            };
        
            expect(makeSelectState()(mockedState)).toEqual(mockedState);

        });

    });

    describe("makeSelectCinemas", () => {

        it("should return the cinemas", () => {

            const cinemas = [{
                "id": "0003",
                "slug": "village",
                "name": "Village",
                "status": "OPEN"
            }];
            
            const mockedState = {
                data: {
                    market: {
                        cinemas: cinemas
                    }
                } as MarketData,
                error: null
            };
        
            expect(makeSelectCinemas()(mockedState)).toEqual(cinemas);

        });

    });

});
