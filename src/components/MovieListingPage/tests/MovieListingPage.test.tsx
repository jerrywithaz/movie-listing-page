import React from 'react';
import MovieListingPage from './../';
import renderWithTheme from 'testHelpers/renderWithTheme';

describe("components/MovieListingPage", () => {

    it("should match snapshot", () => {

        const tree = renderWithTheme(<MovieListingPage/>).toJSON();

        expect(tree).toMatchSnapshot();

    });

});