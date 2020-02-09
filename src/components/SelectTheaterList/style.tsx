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
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        padding: 0px ${props.theme.spacing.small}px;
        margin: ${props.theme.spacing.xsmall}px 0px;
        letter-spacing: ${props.theme.letterSpacing.small};
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        white-space: nowrap;
        width: 176px;
        &:hover, &:focus {
            cursor: pointer;
            background: ${props.theme.palette.primary};
            border: 1px solid ${props.theme.palette.primary};
            color: ${props.theme.palette.common.white};
        }
        &:focus {
            outline: none;
        }
        &:nth-child(3n - 1) {
            margin-left: ${props.theme.spacing.small}px;
            margin-right: ${props.theme.spacing.small}px;
        }
    `}
    ${props => props.theme.media.sm`
        width: calc(50% - ${props.theme.spacing.small}px);
        margin: 0px ${props.theme.spacing.small}px ${props.theme.spacing.small}px 0px;
        &:nth-child(3n - 1) {
            margin: 0px ${props.theme.spacing.small}px ${props.theme.spacing.small}px 0px;
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