import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectFilmList from './';

const story = storiesOf('SelectFilmList', module);

const selectedTheater = {
    "id": "0003",
    "slug": "village",
    "name": "Village",
    "status": "OPEN"
};

const films = [
    {"slug": "birds-of-prey"},
    {"slug": "event-1917"},
    {"slug": "the-gentlemen"}
];

story.add('Default', () => (
    <SelectFilmList 
        selectedTheater={selectedTheater}
        films={films}/>
));
  