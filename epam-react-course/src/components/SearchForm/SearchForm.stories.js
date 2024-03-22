import { fn } from '@storybook/test';
import SearchForm from './SearchForm';

export default {
  title: 'Components/Search Form',
  component: SearchForm,
  tags: ['autodocs'],
  args: {
    onSearch: fn(),
  },
}

export const Default = {
  args: {
  }
};

export const Initialized = {
  args: {
    initialQuery: 'Star Wars',
  }
};
