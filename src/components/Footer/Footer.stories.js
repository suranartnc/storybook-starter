import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Footer from './Footer';

const decorator = {
  width: '100%',
  maxWidth: '960px',
  margin: '0 auto',
  textAlign: 'center',
  border: '1px solid gray'
}

storiesOf('Footer', module)
  .addDecorator((story) => (
    <div style={decorator}>
      {story()}
    </div>
  ))
  .add('Normal', () => (
    <Footer />
  ));
