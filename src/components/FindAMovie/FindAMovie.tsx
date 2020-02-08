import React from 'react';
import Box from 'components/Box';
import { FindAMovieProps } from './types';

const FindAMovie = (props: FindAMovieProps) => {

    const width = `${(752/1440) * 100}%`;
    const height = `${(722/1440) * 100}%`;

    return (
        <Box {...props} width={width} height={height}>

        </Box>
    );
};

export default FindAMovie;