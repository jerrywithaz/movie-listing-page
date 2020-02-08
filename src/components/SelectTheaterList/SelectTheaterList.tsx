import React from 'react';
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
                {theaters.map((theater: Cinema) => {
                    return (
                        <Styled.Theater 
                            key={theater.id} 
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