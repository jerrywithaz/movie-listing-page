import { Cinema, SelectedCinema } from "core/types";

export type MovieListingPageMappedProps = {
    selectedTheater: SelectedCinema,
    theaters: Cinema[]
};

export type MovieListingPageMappedDispatch = {
    setSelectedTheater: (cinema: Cinema) => void
};

export type MovieListingPageProps = (
    React.HTMLAttributes<HTMLDivElement> & 
    MovieListingPageMappedProps & 
    MovieListingPageMappedDispatch
);