import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

test('renders the hello message correctly', () => {
  const {getByText} = render(<App />);
  const helloText = getByText('Hello, Lavanya!!!');
  expect(helloText).toBeTruthy();
});
