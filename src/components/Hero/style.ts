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
    &:before {
        background: ${props => props.theme.palette.gray.primary};
        bottom: -25%;
        content: '';
        display: block;
        height: 50%;
        left: 0;
        position: absolute;
        right: 0;
        transform: skewY(-3deg);
        transform-origin: 100%;
        z-index: -1;
    }
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
`;