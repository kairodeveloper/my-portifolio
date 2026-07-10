import { render, screen } from '@testing-library/react';
import { Header } from './index';

describe('Header', () => {
  it('renderiza corretamente', () => {
    render(<Header />);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
