import React, { useState } from 'react';
import convertSlugToName from 'utils/convertSlugToName';
import cartIcon from 'assets/images/icon-cart.svg';
import cartIconHovered from 'assets/images/icon-cart-hovered.svg';
import { FilmProps } from './types';

import * as Styled from './style';

const Film = ({ slug, onClick }: FilmProps) => {

    const [ hovered, setHovered ] = useState<boolean>(false);

    const title = convertSlugToName(slug);
    const cartSrc = hovered ? cartIconHovered : cartIcon;
    const cartAlt = `Go to showings for ${title}`;

    return (
        <Styled.Film 
            id={slug}
            onClick={() => onClick(slug)} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            role="button"
            title={title}>
                <Styled.Title>
                    {title}
                </Styled.Title>
                <img src={cartSrc} alt={cartAlt}/>
        </Styled.Film>
    );

};

export default Film;