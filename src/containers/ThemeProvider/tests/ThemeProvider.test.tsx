import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { mount, ReactWrapper } from 'enzyme';
import ThemeProvider from './../';
import theme from '../theme';
import { ThemeProviderProps } from '../types';

const Child = () => <div></div>;

describe("containers/ThemeProvider", () => {

    let wrapper: ReactWrapper<ThemeProviderProps>;

    beforeEach(() => {
        wrapper = mount((
            <ThemeProvider>
                <Child/>
            </ThemeProvider>
        ));
    });

    it("should pass theme object to theme provider", () => {
        expect(wrapper.find(Provider).props().theme).toEqual(theme);
    });

    it("should render children", () => {
        expect(wrapper.find(Child)).toHaveLength(1);
    });

});