/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Logos from '../components/logos';

describe('Logos', () => {
    it('Logos renders images correctly', () => {
        render(<Logos />);

        const images = screen.getAllByRole('img');

        expect(images.length).toBeGreaterThan(0);

        images.forEach(img => {
            expect(img).toHaveAttribute('src');
            expect(img).toHaveAttribute('alt');
        });
    });
});
