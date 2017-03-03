import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './Button';

storiesOf('ui.Button', module)
  .add('with default text', () => (
    <Button />
  ))
  .add('with custom text', () => (
    <Button text="Custom Text" />
  ));
