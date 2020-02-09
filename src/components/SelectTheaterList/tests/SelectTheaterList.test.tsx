import React from 'react';
import SelectTheaterList from './../';
import renderWithTheme from 'testHelpers/renderWithTheme';
import { getMockTheaters } from 'core/mocks';

describe("components/SelectTheaterList", () => {

    it("renders without theaters", () => {

        const tree = renderWithTheme(
            <SelectTheaterList
                onTheaterSelected={() => {}} 
                theaters={[]} 
                selectedTheater={null}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();

    });

    it("renders with theaters", () => {

        const theaters = getMockTheaters();
        const selectedTheater = theaters[0];

        const tree = renderWithTheme(
            <SelectTheaterList
                onTheaterSelected={() => {}} 
                theaters={theaters} 
                selectedTheater={selectedTheater}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();

    });

});