import { Cinema, SelectedCinema } from "core/types";

export type FindAMovieProps = {
    theaters: Cinema[],
    selectedTheater: SelectedCinema,
    setSelectedTheater: (cinema: Cinema) => void
} & React.HTMLAttributes<HTMLDivElement>;