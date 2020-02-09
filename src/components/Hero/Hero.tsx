import React from 'react';
import arrow from 'assets/images/hero-arrow.svg';
import logo from 'assets/images/hero-logo.png';
import { HeroProps } from './types';

import * as Styled from './style';

const Hero = (props: HeroProps) => {

    return (
        <Styled.Hero {...props}>
            <Styled.HeroSlant/>
            <Styled.HeroInner>
                <Styled.Arrow src={arrow} alt="Welcome to"/>
                <Styled.Logo src={logo} alt="Alamo Drafthouse Cinema"/>
            </Styled.HeroInner>
        </Styled.Hero>
    );

};

export default Hero;