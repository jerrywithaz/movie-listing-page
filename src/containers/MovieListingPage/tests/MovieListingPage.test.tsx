import React from 'react';
import MovieListingPage from '..';
import renderWithProviders from 'testHelpers/renderWithProviders';
import { ReactTestRenderer } from 'react-test-renderer';

describe("containers/MovieListingPage", () => {

    it("should match snapshot", () => {

        const renderer = renderWithProviders(<MovieListingPage/>) as ReactTestRenderer;
        const tree = renderer.toJSON() ;

        expect(tree).toMatchSnapshot();

    });

});