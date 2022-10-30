import { render, screen } from '@testing-library/react';

import { Bar } from './Bar';

test('Bar', () => {
    render(<Bar value={100} />);
    expect(screen.getByText(/Bar:(\s*)100/)).toBeTruthy();
});
