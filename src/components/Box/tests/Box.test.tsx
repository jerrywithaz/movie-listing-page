import React from 'react';
import Box from './../';
import renderWithTheme from 'testHelpers/renderWithTheme';

describe("components/Box", () => {

    it("should match snapshot", () => {

        const tree = renderWithTheme(<Box width="400px" height="400px"/>).toJSON();

        expect(tree).toMatchSnapshot();

    });

});