import React from 'react';

export default class Counter extends React.Component {
  static createButtonElement(label, onClick) {
    return React.createElement(
      'button',
      {
        className: 'h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900',
        onClick,
      },
      label
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/prop-types
      count: props?.initialValue ?? 0,
    };
  }

  decrease() {
    this.setState((state) => ({ count: state.count - 1}));
  }

  increase() {
    this.setState((state) => ({ count: state.count + 1}));
  }

  #createCounterElement() {
    return React.createElement(
      'span',
      {
        className: 'mx-4 py-2 px-8 font-bold rounded-md border border-slate-200 text-slate-900',
      },
      this.state.count,
    );
  }

  render() {
    return React.createElement(
      'div',
      {
        className: 'my-4 mx-auto max-w-lg py-4 px-8 rounded-md border border-slate-200 shadow-md flex justify-center'
      },
      Counter.createButtonElement('Decrease', this.decrease.bind(this)),
      this.#createCounterElement(),
      Counter.createButtonElement('Increase', this.increase.bind(this)),
    );
  }
}