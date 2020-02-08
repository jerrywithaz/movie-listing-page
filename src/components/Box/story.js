import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './';

const story = storiesOf('Box', module);

story.add('Default', () => (
    <Box width="400px" height="400px">
        <div>hey</div>
    </Box>
));
  