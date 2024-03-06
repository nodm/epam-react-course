import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './Counter';

const initialValue = 5;

describe('Testing <Counter />', () => {
  test('should render initial value', () => {
    render(<Counter initialValue={initialValue} />);

    const counterElement = screen.getByTestId('counter-value');

    expect(within(counterElement).getByText(initialValue)).toBeInTheDocument();
  });

  test('should decrements the displayed value by click on "Decrease" button', async () => {
    render(<Counter initialValue={initialValue} />);

    const counterElement = screen.getByTestId('counter-value');
    const decrementButton = screen.getByRole('button', { name: /decrease/i });

    await user.click(decrementButton);

    expect(within(counterElement).getByText(initialValue - 1)).toBeInTheDocument();
  })

  test('should increments the displayed value by click on "increment" button', async () => {
    render(<Counter initialValue={initialValue} />);

    const counterElement = screen.getByTestId('counter-value');
    const incrementButton = screen.getByRole('button', { name: /increase/i });

    await user.click(incrementButton);

    expect(within(counterElement).getByText(initialValue + 1)).toBeInTheDocument();
  })
});
