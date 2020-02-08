import React, { useEffect, useRef } from 'react';
import sortBy from 'lodash/sortBy';
import { Film } from 'core/types';
import { SelectFilmListProps } from './types';
import FilmComponent from './components/Film';

import * as Styled from './style';

const SelectFilmList = ({
    films,
    selectedTheater,
    ...rest
}: SelectFilmListProps) => {

    const filmsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (filmsRef.current) {
            filmsRef.current.scrollTop = 0;
        }
    }, [filmsRef, films]);

    if (selectedTheater === null) return null;

    return (
        <Styled.SelectFilmList {...rest}>
            <Styled.Heading2>
                <span>Films Playing at </span>
                <Styled.TheaterName>{selectedTheater.name}</Styled.TheaterName>
            </Styled.Heading2>
            <Styled.Films ref={filmsRef}>
                {sortBy(films, "slug").map((film: Film)=> {
                    return (
                        <FilmComponent {...film} key={film.slug}/>
                    );
                })}
            </Styled.Films>
        </Styled.SelectFilmList>
    );
}

export default SelectFilmList;