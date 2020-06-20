import React from 'react';
import {Button} from 'components';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button onClick={() => console.log('Hey')} type="primary">
    Primary
  </Button>
);
