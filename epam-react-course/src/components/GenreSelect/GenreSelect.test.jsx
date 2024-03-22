import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GenreSelect from './GenreSelect';

const genreList = ['one', 'two', 'three', 'four', 'five'];
const handleSelect = jest.fn();

describe('Testing <GenreSelect />', () => {
  beforeAll(() => {
    userEvent.setup();
  });

  afterEach(() => {
    handleSelect.mockClear();
  });

  test('should renders all genres passed in props', () => {
    render(<GenreSelect genreList={genreList} initialGenre={genreList[3]} onSelect={handleSelect} />);

    expect(screen.getAllByRole('button').length).toEqual(genreList.length);
  });

  test('should renders all genres passed in props (with snapshot)', () => {
    const { container } = render(<GenreSelect genreList={genreList} initialGenre={genreList[3]} onSelect={handleSelect} />);

    expect(container).toMatchSnapshot();
  });

  test('should highlights a selected genre passed in props', () => {
    const activeGenre = genreList[3];

    render(<GenreSelect genreList={genreList} initialGenre={activeGenre} onSelect={handleSelect} />);

    const activeGenreItem = screen
      .getAllByRole('listitem')
      .find(element => within(element).queryByText(activeGenre));

    expect(activeGenreItem).toHaveClass(/^border-red/);
  });

  test('should call "onChange" callback and passe correct genre in arguments after a click event on a genre button', async () => {
    const selectedGenre = genreList[1];

    render(<GenreSelect genreList={genreList} initialGenre={genreList[3]} onSelect={handleSelect} />);

    await userEvent.click(screen.getByRole('button', { name: selectedGenre }));

    expect(handleSelect).toHaveBeenCalledWith(selectedGenre);
  });
});
