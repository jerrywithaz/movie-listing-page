import React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from './';

const story = storiesOf('Hero', module);

story.add('Default', () => <Hero/>);
  