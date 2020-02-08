import { Cinema, SelectedCinema } from "core/types";

export type SelectTheaterListProps = {
    onTheaterSelected: (theater: Cinema) => void,
    theaters: Cinema[],
    selectedTheater: SelectedCinema
} & React.HTMLAttributes<HTMLDivElement>;

export type TheaterProps = {
    selected: boolean
} & React.HTMLAttributes<HTMLButtonElement>;