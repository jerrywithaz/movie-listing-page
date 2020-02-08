import styled from 'styled-components';

export const Heading1 = styled.h1`
    font-size: 26px;
    line-height: 30px;
    letter-spacing: ${props => props.theme.letterSpacing.large};
    color: ${props => props.theme.palette.common.black};
    text-transform: uppercase;
    margin: 0px 0px ${props => props.theme.spacing.medium}px 0px;
`;

export const Heading2 = styled.h2`
    font-size: 16px;
    line-height: 20px;
    letter-spacing: ${props => props.theme.letterSpacing.small};
    color: ${props => props.theme.palette.gray.secondary};
    text-transform: uppercase;
    margin: ${props => props.theme.spacing.medium}px 0px;
`;