import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import {Provider} from 'react-redux';
import ThemeProvider from 'containers/ThemeProvider';
import configureStore from 'core/store';

type Options = {
  enzyme: boolean,
  fullMount: boolean
};

const initialState = {
  data: {
    market: null,
    selectedCinema: null
  },
  error: null
};

function renderWithProviders(component: JSX.Element, options? : Options) {

    const { enzyme, fullMount } = options || { enzyme: false, fullMount: true };
    const store = configureStore(initialState);
    const node = (
      <Provider store={store}>
        <ThemeProvider>
          {component}
        </ThemeProvider>
      </Provider>
    );

    if (enzyme) {
      if (fullMount) {
        return mount(node);
      }
      else {
        return shallow(node);
      }
    }
    else {
        return renderer.create(node);
    }
    
}

export default renderWithProviders;