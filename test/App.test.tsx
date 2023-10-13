import { render, screen } from '@testing-library/react'
import App from "../src/App"
import React from 'react'


test('renders App component with ColorTabs and CheckboxList', () => {
  render(<App />);

  // Check if the ColorTabs component is rendered
  expect(screen.getByTestId('tabs-component')).toBeTruthy(); // Assuming ColorTabs renders a tablist

  // Check if the CheckboxList component is rendered
  const checkboxList = screen.getByTestId('checkbox-list'); // Add data-testid="checkbox-list" to your CheckboxList component
  expect(checkboxList).toBeTruthy(); // to test
});