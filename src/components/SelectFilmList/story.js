import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectFilmList from './';
import { getMockTheater, getMockFilms } from 'core/mocks';

const story = storiesOf('SelectFilmList', module);

const selectedTheater = getMockTheater();

const films = getMockFilms();

story.add('Default', () => (
    <SelectFilmList 
        selectedTheater={selectedTheater}
        films={films}/>
));
  