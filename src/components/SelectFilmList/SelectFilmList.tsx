import React, { useEffect, useRef } from 'react';
import sortBy from 'lodash/sortBy';
import { Film as FilmType } from 'core/types';
import { SelectFilmListProps } from './types';
import Film from './components/Film';

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
    }, [films]);

    if (selectedTheater === null) return null;

    return (
        <Styled.SelectFilmList {...rest} aria-labelledby="heading-films-playing">
            <Styled.Heading2 id="heading-films-playing">
                <span>Films Playing at </span>
                <Styled.TheaterName>{selectedTheater.name}</Styled.TheaterName>
            </Styled.Heading2>
            <Styled.Films ref={filmsRef}>
                {sortBy(films, "slug").map((film: FilmType)=> {
                    return (
                        <Film {...film} key={film.slug}/>
                    );
                })}
            </Styled.Films>
        </Styled.SelectFilmList>
    );
    
}

export default SelectFilmList;