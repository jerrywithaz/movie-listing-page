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

    const theatersSorted = sortBy(theaters, "name");

    return (
        <Styled.SelectTheaterList {...rest}>
            <Styled.Heading2>Select Theater</Styled.Heading2>
            <Styled.Theaters>
                {theatersSorted.map((theater: Cinema) => {
                    return (
                        <Styled.Theater 
                            key={theater.id}
                            id={theater.slug} 
                            title={theater.name}
                            onClick={() => onTheaterSelected(theater)}
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