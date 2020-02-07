import React from 'react';
import renderer from 'react-test-renderer';
import ThemeProvider from 'containers/ThemeProvider';

function renderWithTheme(component: JSX.Element) {
    return renderer.create(
        <ThemeProvider>
          {component}
        </ThemeProvider>
      );
}

export default renderWithTheme;