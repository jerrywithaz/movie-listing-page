import { Cinema, Film, Session } from './types';

/**
 * Mock Data for Stories, Tests and any other development purposes
 */

export function getMockFilms(): Film[] {
    return [{
        "slug": "birds-of-prey",
        "title": "BIRDS OF PREY (AND THE FANTABULOUS EMANCIPATION OF ONE HARLEY QUINN)",
    },
    {
        "slug": "event-1917",
        "title": "1917",
    },
    {
        "slug": "the-gentlemen",
        "title": "THE GENTLEMEN",
    }];
};

export function getMockFilm(): Film {
    return {
        "slug": "birds-of-prey",
        "title": "BIRDS OF PREY (AND THE FANTABULOUS EMANCIPATION OF ONE HARLEY QUINN)",
    };
}

export function getMockSessions(): Session[] {
    return [{
        "cinemaId": "0003",
        "sessionId": "35751",
        "filmSlug": "birds-of-prey",
        "filmName": "BIRDS OF PREY",
    }, {
        "cinemaId": "0002",
        "sessionId": "35865",
        "filmSlug": "cats-rowdy-screening",
        "filmName": "CATS Rowdy Screening",
    }, {
        "cinemaId": "0002",
        "sessionId": "35751",
        "filmSlug": "birds-of-prey",
        "filmName": "BIRDS OF PREY"
    }, {
        "cinemaId": "0004",
        "sessionId": "160776",
        "filmSlug": "the-gentlemen",
        "filmName": "THE GENTLEMEN",
    }];
}

export function getMockTheaters(): Cinema[] {
    return [{
        "id": "0003",
        "slug": "village",
        "name": "Village",
        "status": "OPEN"
    }, {
        "id": "0004",
        "slug": "south-lamar",
        "name": "South Lamar",
        "status": "OPEN",
    }, {
        "id": "0002",
        "slug": "ritz",
        "name": "Ritz",
        "status": "OPEN"
    }, {
        "id": "0008",
        "slug": "mueller",
        "name": "Mueller",
        "status": "OPEN"
    }];
}

export function getMockTheater(): Cinema {
    return {
        "id": "0003",
        "slug": "village",
        "name": "Village",
        "status": "OPEN"
    };
}