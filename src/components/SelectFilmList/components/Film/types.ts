import { Film } from "core/types";

export type FilmProps = {
    onClick: (slug: string) => void,
} & Film;
