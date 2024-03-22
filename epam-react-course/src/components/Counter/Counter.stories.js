import Counter from './Counter';

const configuration =  {
  title: 'Components/Counter',
  component: Counter,
  tags: ['autodocs'],
};

export default configuration;

export const Default = {
};

export const Initialized = {
  args: {
    initialValue: 7,
  },
};