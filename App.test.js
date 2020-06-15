import React from 'react';
import App from '../components/Lista';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<list />).toJSON();
  expect(rendered).toBeTruthy();
});
