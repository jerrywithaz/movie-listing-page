import styled from 'styled-components';
import Box from 'components/Box';
import { Heading1 as DefaultHeading1 } from 'components/Heading';

export const FindAMovie = styled(Box)`
    ${props => props.theme.media.md`
        max-width: calc(100% - ${props.theme.spacing.large * 2}px);
    `}
`;

export const Heading1 = styled(DefaultHeading1)`
    display: block;
    text-align: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 560px;
    margin: 0 auto;
    max-width: 100%;
    height: 100%;
    overflow: hidden;
`;