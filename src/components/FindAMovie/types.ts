import { Cinema, Film, SelectedCinema } from "core/types";

export type FindAMovieProps = {
    films: Film[],
    theaters: Cinema[],
    selectedTheater: SelectedCinema,
    setSelectedTheater: (cinema: Cinema) => void
} & React.HTMLAttributes<HTMLDivElement>;