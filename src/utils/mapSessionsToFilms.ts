import { MarketData, Cinema, Film } from 'core/types';

function mapSessionsToFilms(market: MarketData, cinema: Cinema): Film[] {

    // Find all sessions playing at current cinema
    const sessions = market.sessions.filter(session => session.cinemaId === cinema.id);

    // Get unique film slugs
    const filmSlugs = [...new Set(sessions.map(session => session.filmSlug))];

    // Returns films that have their slug in the filmSlugs array
    return market.films.filter(film => filmSlugs.indexOf(film.slug) > -1);

};

export default mapSessionsToFilms;