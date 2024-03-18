import { within, userEvent, expect } from '@storybook/test';
import { fn } from '@storybook/test';
import GenreSelect from './GenreSelect';

const GENRE_LIST = ['all', 'documentary', 'comedy', 'horror', 'crime'];

export default {
  title: 'Components/Genre Select',
  component: GenreSelect,
  tags: ['autodocs'],
  args: {
    genreList: GENRE_LIST,
    initialGenre: GENRE_LIST[0],  
    onSelect: fn(),
  },
};

export const Default = {
  args: {
  }
};

export const ComedySelected = {
  args: {
    initialGenre: GENRE_LIST[2],    
  },
};

export const SelectDocumentary = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const allButton = canvas.getByRole('button', { name: /all/i });
    await expect(allButton.parentElement).toHaveClass('border-red-400');

    const documentaryButton = canvas.getByRole('button', { name: /documentary/i });
    await expect(documentaryButton).toBeInTheDocument();
    await userEvent.click(documentaryButton);
    await expect(documentaryButton.parentElement).toHaveClass('border-red-400');
  },
};
