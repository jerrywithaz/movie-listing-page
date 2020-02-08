import React from 'react';
import Box from 'components/Box';
import { FindAMovieProps } from './types';
import SelectTheaterList from 'components/SelectTheaterList';

const FindAMovie = (props: FindAMovieProps) => {

    const { theaters, selectedTheater, setSelectedTheater, ...rest } = props;
    const width = `${(752/1440) * 100}%`;
    const height = `${(722/1440) * 100}%`;

    return (
        <Box {...rest} width={width} height={height}>
            <SelectTheaterList 
                onTheaterSelected={(theater) => setSelectedTheater(theater)} 
                theaters={theaters} 
                selectedTheater={selectedTheater}/>
        </Box>
    );
};

export default FindAMovie;