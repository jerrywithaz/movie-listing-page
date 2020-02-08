import React from 'react';
import { Heading1, Heading2 } from './../';
import renderWithTheme from 'testHelpers/renderWithTheme';

describe("components/Heading", () => {

    describe("Heading 1", () => {

        it("should match snapshot", () => {

            const tree = renderWithTheme(<Heading1>Heading 1</Heading1>).toJSON();
    
            expect(tree).toMatchSnapshot();
    
        });

    });

    describe("Heading 2", () => {

        it("should match snapshot", () => {

            const tree = renderWithTheme(<Heading2>Heading 2</Heading2>).toJSON();
    
            expect(tree).toMatchSnapshot();
    
        });

    });

});