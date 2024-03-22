import { fn } from '@storybook/test';
import SortControl from './SortControl';

export default {
  title: 'Components/Sort Control',
  component: SortControl,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    selectedOption: 'Title',
    onChange: fn(),
  }
};

