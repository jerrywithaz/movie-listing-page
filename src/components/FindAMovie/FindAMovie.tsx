import React from 'react';
import Box from 'components/Box';
import { FindAMovieProps } from './types';
import SelectTheaterList from 'components/SelectTheaterList';
import SelectFilmList from 'components/SelectFilmList';
import { Heading1 } from 'components/Heading';

import * as Styled from './style';

const FindAMovie = (props: FindAMovieProps) => {

    const { theaters, selectedTheater, setSelectedTheater, films, ...rest } = props;
    const width = `752px`;
    const height = `722px`;

    return (
        <Box {...rest} width={width} height={height}>
            <Styled.Container>
                <Heading1>Find a Movie</Heading1>
                <SelectTheaterList 
                    onTheaterSelected={setSelectedTheater} 
                    theaters={theaters} 
                    selectedTheater={selectedTheater}/>
                <SelectFilmList
                    films={films} 
                    selectedTheater={selectedTheater}/>
            </Styled.Container>
        </Box>
    );
};

export default FindAMovie;