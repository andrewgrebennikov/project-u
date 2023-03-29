import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent';
import { Counter } from 'entities/Counter';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
  test('render counter', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('title')).toHaveTextContent('10');
  });

  test('increment', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId('increment'));
    expect(screen.getByTestId('title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId('decrement'));
    expect(screen.getByTestId('title')).toHaveTextContent('9');
  });
});
