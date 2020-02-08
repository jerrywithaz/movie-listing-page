import React from 'react';
import arrow from 'assets/images/hero-arrow.svg';
import logo from 'assets/images/hero-logo.svg';

import * as Styled from './style';

const Hero = () => {

    return (
        <Styled.Hero>
            <Styled.HeroInner>
                <Styled.Arrow src={arrow} alt="Welcome to"/>
                <Styled.Logo src={logo} alt="Alamo Drafthouse Cinema"/>
            </Styled.HeroInner>
        </Styled.Hero>
    );

};

export default Hero;