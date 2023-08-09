import React from 'react';
import { render } from '@testing-library/react-native';
import { Benefits } from '../../src/screens/Benefits';
import { BenefitsInfo } from '../../src/screens/Benefits/BenefitsInfo';
import { BenefitsCards } from '../../src/screens/Benefits/BenefitsCards';
import { BenefitsBanner } from '../../src/screens/Benefits/BenefitsBanner';

describe('Benefits', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Benefits />);
    expect(toJSON()).toMatchSnapshot();
  });

  describe('Benefits Info', () => {
    it('renders correctly', () => {
      const { getByTestId } = render(<BenefitsInfo />);
      const benefitsInfo = getByTestId('benefits-info');

      expect(benefitsInfo).toBeDefined();
      expect(benefitsInfo).toHaveLength(2);
    });
  });

  describe('Benefits cards', () => {
    it('renders correctly', () => {
      const { getByTestId } = render(<BenefitsCards />);
      const benefitsCards = getByTestId('benefits-cards');

      expect(benefitsCards).toBeDefined();
      expect(benefitsCards).toHaveLength(2);
    });
  });

  describe('Benefits Banner', () => {
    it('renders correctly', () => {
      const { toJSON } = render(<BenefitsBanner />);
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
