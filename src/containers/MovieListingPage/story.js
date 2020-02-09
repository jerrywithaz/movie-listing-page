import React from 'react';
import { storiesOf } from '@storybook/react';
import MovieListingPage from '.';
import { getMockFilms, getMockTheaters } from 'core/mocks';

const story = storiesOf('MovieListingPage', module);

const films = getMockFilms();
const theaters = getMockTheaters();

story.add('Default', () => <MovieListingPage films={films} theaters={theaters}/>);
  