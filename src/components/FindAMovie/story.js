import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FindAMovie from './';
import { getMockFilms, getMockTheaters } from 'core/mocks';

const story = storiesOf('FindAMovie', module);

const films = getMockFilms();
const theaters = getMockTheaters();
const selectedTheater = theaters[0];

story.add('FindAMovie', () => (
    <FindAMovie
        films={films}
        setSelectedTheater={action("setSelectedTheater")} 
        theaters={theaters} 
        selectedTheater={selectedTheater}/>
));
  