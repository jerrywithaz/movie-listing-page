import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import SelectTheaterList from './';

const story = storiesOf('SelectTheaterList', module);

const theaters = [{
    "id": "0003",
    "slug": "village",
    "name": "Village",
    "status": "OPEN"
}, {
    "id": "0004",
    "slug": "south-lamar",
    "name": "South Lamar",
    "status": "OPEN",
}, {
    "id": "0002",
    "slug": "ritz",
    "name": "Ritz",
    "status": "OPEN"
}, {
    "id": "0008",
    "slug": "mueller",
    "name": "Mueller",
    "status": "OPEN"
}];

story.add('Default', () => (
    <SelectTheaterList 
        onTheaterSelected={action("Theater Selected")}
        theaters={theaters}/>
));
  