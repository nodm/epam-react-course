import { describe, expect, test, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './Counter';

const initialValue = 5;
let counterElement;

describe('Testing <Counter />', () => {
  beforeEach(() => {
    render(<Counter initialValue={initialValue} />);
    counterElement = screen.getByTestId('counter-value');
  });

  test('should render initial value', () => {
    expect(within(counterElement).getByText(initialValue)).toBeInTheDocument();
  });

  test('should decrements the displayed value by click on "Decrease" button', async () => {
    const decrementButton = screen.getByRole('button', { name: /decrease/i });

    await user.click(decrementButton);

    expect(within(counterElement).getByText(initialValue - 1)).toBeInTheDocument();
  })

  test('should increments the displayed value by click on "increment" button', async () => {
    const incrementButton = screen.getByRole('button', { name: /increase/i });

    await user.click(incrementButton);

    expect(within(counterElement).getByText(initialValue + 1)).toBeInTheDocument();
  })
});
