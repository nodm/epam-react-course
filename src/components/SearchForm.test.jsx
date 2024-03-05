import { describe, expect, test, afterEach, beforeAll, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm';

const initialQuery = 'What is React';
const query = 'What is Testing Library';
const handleSearch = vi.fn();

describe('Testing <SearchForm />', () => {
  beforeAll(() => {
    userEvent.setup();
  });

  beforeEach(() => {
    render(<SearchForm initialQuery={initialQuery} onSearch={handleSearch} />);
  });

  afterEach(() => {
    handleSearch.mockClear();
  });

  test('should render an input with the value equal to initial value passed in props', () => {
    const searchInputElement = screen.getByRole('searchbox');
    expect(searchInputElement.value).toEqual(initialQuery);
  });

  test('should call the "onChange" prop with proper value after typing to the input and a "click" event on the Submit button', async () => {
    const searchInputElement = screen.getByRole('searchbox');

    await userEvent.clear(searchInputElement);
    await userEvent.type(searchInputElement, query);

    await userEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(handleSearch).toHaveBeenCalledWith(query);
  })

  test('should call the "onChange" prop with proper value after typing to the input and pressing Enter key', async () => {
    const searchInputElement = screen.getByRole('searchbox');

    await userEvent.clear(searchInputElement);
    await userEvent.type(searchInputElement, query);
    await userEvent.keyboard('{enter}');

    expect(handleSearch).toHaveBeenCalledWith(query);
  })
});
