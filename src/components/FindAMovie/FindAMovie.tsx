import React from 'react';
import { FindAMovieProps } from './types';
import SelectTheaterList from 'components/SelectTheaterList';
import SelectFilmList from 'components/SelectFilmList';

import * as Styled from './style';

const FindAMovie = (props: FindAMovieProps) => {

    const { theaters, selectedTheater, setSelectedTheater, films, ...rest } = props;

    return (
        <Styled.FindAMovie {...rest} width="752px" height="722px">
            <Styled.Container>
                <Styled.Heading1>Find a Movie</Styled.Heading1>
                <SelectTheaterList 
                    onTheaterSelected={setSelectedTheater} 
                    theaters={theaters} 
                    selectedTheater={selectedTheater}/>
                <SelectFilmList
                    films={films} 
                    selectedTheater={selectedTheater}/>
            </Styled.Container>
        </Styled.FindAMovie>
    );

};

export default FindAMovie;