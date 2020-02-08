import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './';

const story = storiesOf('Heading', module);

story.add('Heading 1', () => (
    <Heading level="h1">Heading 1</Heading>
));

story.add('Heading 2', () => (
    <Heading level="h2">Heading 2</Heading>
));
  