import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Footer from './Footer';

const decorator = {
  width: '100%',
  maxWidth: '960px',
  margin: '0 auto'
}

storiesOf('layout.Footer', module)
  .addDecorator((story) => (
    <div style={decorator}>
      {story()}
    </div>
  ))
  .add('with default styles', () => (
    <Footer />
  ))
  .add('with active state', () => (
    <Footer active={true} />
  ));
