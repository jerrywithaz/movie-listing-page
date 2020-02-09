import mapSessionsToFilms from './../mapSessionsToFilms';
import { MarketData, Session, Film } from 'core/types';

describe("utils/mapSessionsToFilms", () => {

    it("return array of films given sessions", () => {

        const sessions = [{
            "cinemaId": "0003",
            "sessionId": "35751",
            "filmHeadOfficeCode": "A000023456",
            "filmSlug": "birds-of-prey",
            "filmName": "BIRDS OF PREY",
        }];
        const films = [{
            "slug": "birds-of-prey",
        }, {
            "slug": "event-1917",
        }];
        const marketData = {
            sessions: sessions as Session[],
            films: films as Film[]
        } as MarketData;
        const cinema = {
            "id": "0003",
            "slug": "village",
            "name": "Village",
            "status": "OPEN"
        };
        const expected = mapSessionsToFilms(marketData, cinema);

        expect(expected).toEqual([
            {"slug": "birds-of-prey"}
        ]);

    });

});