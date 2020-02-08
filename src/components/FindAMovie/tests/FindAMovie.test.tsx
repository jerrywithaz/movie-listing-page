import React from 'react';
import FindAMovie from './../';
import renderWithTheme from 'testHelpers/renderWithTheme';

describe("components/FindAMovie", () => {

    it("should match snapshot", () => {

        const tree = renderWithTheme(<FindAMovie/>).toJSON();

        expect(tree).toMatchSnapshot();

    });

});