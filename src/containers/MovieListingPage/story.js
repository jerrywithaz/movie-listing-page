import React from 'react';
import { storiesOf } from '@storybook/react';
import MovieListingPage from '.';

const story = storiesOf('MovieListingPage', module);

story.add('Default', () => <MovieListingPage/>);
  