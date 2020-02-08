import React from 'react';
import styled from 'styled-components';
import { BoxProps } from './types';

export const Box = styled(({
    width, 
    height, 
    ...rest
}: BoxProps) => 
    <div {...rest}/>
)`
    height: ${props => props.height};
    width: ${props => props.width};
    box-shadow: ${props => props.theme.boxShadow.small};
    border-radius: ${props => props.theme.borderRadius.default}px;
    padding: ${props => props.theme.spacing.large}px;
`;