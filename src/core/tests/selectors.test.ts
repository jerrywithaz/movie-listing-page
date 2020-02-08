import { makeSelectState, selectState } from './../selectors';

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

});
