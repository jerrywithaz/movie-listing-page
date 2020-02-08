import React from 'react';
import sortBy from 'lodash/sortBy';
import { Cinema } from 'core/types';
import { SelectTheaterListProps } from './types';

import * as Styled from './style';

const SelectTheaterList = ({
    onTheaterSelected,
    theaters,
    selectedTheater,
    ...rest
}: SelectTheaterListProps) => {

    return (
        <Styled.SelectTheaterList {...rest}>
            <Styled.Heading2>Select Theater</Styled.Heading2>
            <Styled.Theaters>
                {sortBy(theaters, "name").map((theater: Cinema) => {
                    return (
                        <Styled.Theater 
                            key={theater.slug}
                            id={theater.slug} 
                            title={theater.name}
                            onClick={() => onTheaterSelected(theater)}
                            onKeyUp={e => e.keyCode === 9 && onTheaterSelected(theater)}
                            selected={selectedTheater?.id === theater.id}>
                                {theater.name}
                        </Styled.Theater>
                    );
                })}
            </Styled.Theaters>
        </Styled.SelectTheaterList>
    );

};

export default SelectTheaterList;