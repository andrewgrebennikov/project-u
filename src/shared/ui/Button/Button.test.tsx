import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('Button', () => {
  test('render button', () => {
    renderWithTranslation(<Button>Test button</Button>);
    expect(screen.getByText('Test button')).toBeInTheDocument();
  });

  test('render contained button', () => {
    render(<Button variant={ButtonVariant.CONTAINED}>Test button</Button>);
    expect(screen.getByText('Test button')).toHaveClass('contained');
  });

  test('render outlined button', () => {
    render(<Button variant={ButtonVariant.OUTLINED}>Test button</Button>);
    expect(screen.getByText('Test button')).toHaveClass('outlined');
  });
});
