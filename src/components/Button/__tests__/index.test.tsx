import React from 'react';
import {mount} from 'enzyme';
import {Button} from 'components';

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <Button onClick={() => console.log('Hey')} type="primary">
        Hey
      </Button>,
    );
    expect(() => wrapper.unmount()).not.toThrow();
    expect(
      <Button onClick={() => console.log('Hey')} type="primary">
        Hey
      </Button>,
    ).toMatchSnapshot();
  });
});
