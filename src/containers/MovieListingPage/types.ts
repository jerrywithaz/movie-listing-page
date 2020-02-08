import { Cinema, SelectedCinema, Session, Film } from "core/types";

export type MovieListingPageMappedProps = {
    selectedTheater: SelectedCinema,
    theaters: Cinema[],
    films: Film[]
};

export type MovieListingPageMappedDispatch = {
    setSelectedTheater: (cinema: Cinema) => void
};

export type MovieListingPageProps = (
    React.HTMLAttributes<HTMLDivElement> & 
    MovieListingPageMappedProps & 
    MovieListingPageMappedDispatch
);