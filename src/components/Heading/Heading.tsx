import React from 'react';
import { HeadingProps, BaseHeadingProps } from './types';

import * as Styled from './style';

const Heading = ({
    level, 
    ...rest
}: HeadingProps) => {
    switch (level) {
        case "h1":
            return <Styled.Heading1 {...rest}/>;
        case "h2":
            return <Styled.Heading2 {...rest}/>;
    };
}

const Heading1 = (props: BaseHeadingProps) => {
    return <Heading {...props} level="h1"/>
};

const Heading2 = (props: BaseHeadingProps) => {
    return <Heading {...props} level="h2"/>
};

export {
    Heading1,
    Heading2
};

export default Heading;