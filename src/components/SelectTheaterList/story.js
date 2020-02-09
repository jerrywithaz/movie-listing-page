import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import SelectTheaterList from './';
import { getMockTheaters } from 'core/mocks';

const story = storiesOf('SelectTheaterList', module);

const theaters = getMockTheaters();

story.add('Default', () => (
    <SelectTheaterList 
        onTheaterSelected={action("Theater Selected")}
        theaters={theaters}/>
));
  