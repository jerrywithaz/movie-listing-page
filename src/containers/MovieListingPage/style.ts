import styled from 'styled-components';
import DefaultHero from 'components/Hero';
import DefaultFindAMovie from 'components/FindAMovie';

export const MovieListingPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const Hero = styled(DefaultHero)`
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const FindAMovie = styled(DefaultFindAMovie)`
    position: relative;
    z-index: 2;
    margin-top: -150px;
    margin-bottom: ${props => props.theme.spacing.large}px;
`;