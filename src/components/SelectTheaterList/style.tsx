import React from 'react';
import styled from 'styled-components';
import { Heading2 as DefaultHeading2 } from 'components/Heading';
import { TheaterProps } from './types';

export const SelectTheaterList = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 196px;
    margin-bottom: ${props => props.theme.spacing.large}px;
    overflow: hidden;
`;

export const Heading2 = styled(DefaultHeading2)`
    ${props => `
        margin-bottom: ${props.theme.spacing.small}px;
    `}
`;

export const Theaters = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
    justify-content: flex-start;
    flex: 1;
    overflow: auto;
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
        height: 40px;
        padding: 0px ${props.theme.spacing.small}px;
        margin: ${props.theme.spacing.xsmall}px 0px;
        width: 176px;
        letter-spacing: ${props.theme.letterSpacing.small};
        text-transform: uppercase;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        white-space: nowrap;
        min-width: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:focus {
            outline: none;
        }
        &:hover, &:focus {
            cursor: pointer;
            background: ${props.theme.palette.primary};
            border: 1px solid ${props.theme.palette.primary};
            color: ${props.theme.palette.common.white};
        }
        &:nth-child(3n - 1) {
            margin-left: ${props.theme.spacing.small}px;
            margin-right: ${props.theme.spacing.small}px;
        }
        
    `}
    ${props => props.theme.media.sm`
        margin-right: ${props.theme.spacing.small}px;
        width: calc(33.33% - 16px);
        &:nth-child(3n - 1) {
            margin-left: 0px;
        }
    `}
    ${props => props.theme.media.xs`
        width: 100%;
        margin: 0px 0px ${props.theme.spacing.small}px 0px;
        &:nth-child(3n - 1) {
            margin: 0px 0px ${props.theme.spacing.small}px 0px;
        }
    `}
    
`;