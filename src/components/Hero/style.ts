import styled from 'styled-components';

export const Hero = styled.div`
    background: linear-gradient(
        159.41deg, 
        ${props => props.theme.palette.secondary} 3.42%, 
        ${props => props.theme.palette.tertiary} 96.5%
    );
    height: 560px;
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: stretch;
    flex-direction: column;
    ${props => props.theme.media.xs`
        height: 460px
    `}
`;

export const HeroSlant = styled.div`
    position: absolute;
    background: ${props => props.theme.palette.gray.primary};
    bottom: -34%;
    content: '';
    display: block;
    height: 50%;
    left: 0;
    right: 0;
    transform-origin: 100%;
    transform: skewY(-3deg);
    z-index: -1;
`;

export const HeroInner = styled.div`
    position: relative;
`;

export const Arrow = styled.img`
    width: 260px;
    height: auto;
    display: block;
    margin: 0 auto;
`;

export const Logo = styled.img`
    width: 552px;
    height: auto;
    display: block;
    margin: 0 auto;
    ${props => props.theme.media.md`
        max-width: calc(100% - ${props => props.theme.spacing.medium * 2}px);
    `}
`;