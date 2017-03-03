import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Logo from './Logo';

storiesOf('ui.Logo', module)
  .add('with default style', () => (
    <Logo />
  ))
  .add('with custom width', () => (
    <Logo width="200" />
  ))
