import { MarketData, Session, Film } from './../types';
import { 
    selectState, 
    makeSelectCinemas,
    makeSelectFilms,
    makeSelectSelectedCinema,
} from './../selectors';

describe("core/selectors", () => {

    describe("selectState", () => {

        it("should return the state", () => {

            const mockedState = {
                data: {
                    market: null,
                    selectedCinema: null
                },
                error: null
            };
        
            expect(selectState(mockedState)).toEqual(mockedState);

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
                        market: {
                            cinemas: cinemas
                        }
                    } as MarketData,
                    selectedCinema: null
                },
                error: null
            };
        
            expect(makeSelectCinemas()(mockedState)).toEqual(cinemas);

        });

    });

    describe("makeSelectFilms", () => {

        it("should return the films", () => {

            const sessions = [{
                "cinemaId": "0003",
                "sessionId": "35751",
                "filmHeadOfficeCode": "A000023456",
                "filmSlug": "birds-of-prey",
                "filmName": "BIRDS OF PREY",
            }];
            const films = [{
                "slug": "birds-of-prey"
            }];
            const selectedCinema = {
                "id": "0003",
                "slug": "village",
                "name": "Village",
                "status": "OPEN"
            };
            const market = {
                sessions: sessions as Session[],
                films: films as Film[]
            } as MarketData;

            const mockedState = {
                data: {
                    market,
                    selectedCinema
                },
                error: null
            };
        
            expect(makeSelectFilms()(mockedState)).toEqual(films);

        });

    });

    describe("makeSelectSelectedCinema", () => {

        it("should return the selectedCinema", () => {

            const selectedCinema = {
                "id": "0003",
                "slug": "village",
                "name": "Village",
                "status": "OPEN"
            };
            const market = {} as MarketData;
            
            const mockedState = {
                data: {
                    market,
                    selectedCinema
                },
                error: null
            };
        
            expect(makeSelectSelectedCinema()(mockedState)).toEqual(selectedCinema);

        });

    });

});
