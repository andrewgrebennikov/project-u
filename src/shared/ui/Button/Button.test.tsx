import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('button', () => {
  test('display button', () => {
    render(<Button>Test button</Button>);
    expect(screen.getByText('Test button')).toBeInTheDocument();
    screen.debug();
  });
});
