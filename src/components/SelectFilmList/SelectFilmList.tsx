import React from 'react';
import { Film } from 'core/types';
import { SelectFilmListProps } from './types';
import FilmComponent from './components/Film';

import * as Styled from './style';

const SelectFilmList = ({
    films,
    selectedTheater,
    ...rest
}: SelectFilmListProps) => {

    if (selectedTheater === null) return null;

    function onFilmClick(slug: string) {
        window.open(`https://drafthouse.com/show/${slug}`);
    }

    return (
        <Styled.SelectFilmList {...rest}>
            <Styled.Heading2>
                <span>Films Playing at </span>
                <Styled.TheaterName>{selectedTheater.name}</Styled.TheaterName>
            </Styled.Heading2>
            <Styled.Films>
                {films.map((film: Film)=> {
                    return (
                        <FilmComponent
                            {...film}
                            key={film.slug} 
                            onClick={onFilmClick}/>
                    );
                })}
            </Styled.Films>
        </Styled.SelectFilmList>
    );
}

export default SelectFilmList;