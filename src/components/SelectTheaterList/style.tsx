import React from 'react';
import styled from 'styled-components';
import { Heading2 as DefaultHeading2 } from 'components/Heading';
import { TheaterProps } from './types';

export const SelectTheaterList = styled.div``;

export const Heading2 = styled(DefaultHeading2)`
    ${props => `
        margin-left: ${props.theme.spacing.xsmall}px;
        margin-right: ${props.theme.spacing.xsmall}px;
        margin-bottom: ${props.theme.spacing.small}px;
    `}
`;

export const Theaters = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
    justify-content: flex-start;
`;

export const Theater = styled(({
    selected, ...rest
}: TheaterProps) => 
    <button {...rest}/>
)`
    ${props => `
        background: ${props.selected ? `${props.theme.palette.primary}`: `${props.theme.palette.common.white}`};
        border: 1px solid ${props.selected ? `${props.theme.palette.primary}`: `${props.theme.palette.common.black}`};
        border-radius: ${props.theme.borderRadius.default}px;
        color: ${props.selected ? `${props.theme.palette.common.white}`: `${props.theme.palette.common.black}`};
        line-height: 40px;
        padding: 0px ${props.theme.spacing.small}px;
        margin: ${props.theme.spacing.xsmall}px;
        width: 176px;
        letter-spacing: ${props.theme.letterSpacing.small};
        text-transform: uppercase;
        text-align: center;
        &:focus {
            outline: none;
        }
        &:hover {
            cursor: pointer;
            background: ${props.theme.palette.primary};
            border: 1px solid ${props.theme.palette.primary};
            color: ${props.theme.palette.common.white};
        }
    `}
    
`;