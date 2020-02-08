import React from 'react';
import { BoxProps } from './types';

import * as Styled from './style';

const Box = (props: BoxProps) => {
    return (
        <Styled.Box {...props}/>
    );
}

export default Box;