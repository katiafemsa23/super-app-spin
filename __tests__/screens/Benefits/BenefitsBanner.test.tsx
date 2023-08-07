import React from 'react';
import { render } from '@testing-library/react-native';
import { BenefitsBanner } from '../../../src/screens/Benefits/BenefitsBanner';

describe('Benefits Banner', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<BenefitsBanner />);
    expect(toJSON()).toMatchSnapshot();
  });
});
