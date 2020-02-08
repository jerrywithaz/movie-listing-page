import React from 'react';
import Hero from './../';
import renderWithTheme from 'testHelpers/renderWithTheme';

describe("components/Hero", () => {

    it("should match snapshot", () => {

        const tree = renderWithTheme(<Hero/>).toJSON();

        expect(tree).toMatchSnapshot();

    });

});