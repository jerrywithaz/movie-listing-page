import { Film, SelectedCinema } from "core/types";

export type SelectFilmListProps = {
    films: Film[],
    selectedTheater: SelectedCinema
} & React.HTMLAttributes<HTMLDivElement>;