import mapSessionsToFilms from './../mapSessionsToFilms';
import { MarketData } from 'core/types';

describe("utils/mapSessionsToFilms", () => {

    it("return array of films given sessions", () => {

        const marketData = {
            sessions: [{
                "cinemaId": "0003",
                "sessionId": "35751",
                "filmHeadOfficeCode": "A000023456",
                "filmSlug": "birds-of-prey",
                "filmName": "BIRDS OF PREY",
            }],
            films: [{
                "slug": "birds-of-prey",
            }, {
                "slug": "event-1917",
            }]
        } as MarketData;
        const cinema = {
            "id": "0003",
            "slug": "village",
            "name": "Village",
            "status": "OPEN"
        };
        const films = mapSessionsToFilms(marketData, cinema);

        expect(films).toEqual([
            { "slug": "birds-of-prey" }
        ]);

    });

});