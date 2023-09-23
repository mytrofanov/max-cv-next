/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Home from '../app/[lang]/page';

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: /Home page/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
