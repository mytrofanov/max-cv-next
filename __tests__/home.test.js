/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
jest.mock('server-only', () => require('../__mocks__/server-only'));

describe('Home', () => {
    const Home = require('../app/[lang]/page').default;

    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: /Home page/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
