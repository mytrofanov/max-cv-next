/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Logos from '../components/logos';

describe('Logos', () => {
    it('Logos renders images correctly', () => {
        render(<Logos />);

        // Отримуємо всі елементи <img> в компоненті
        const images = screen.getAllByRole('img');

        // Перевіряємо, чи знайдено хоча б один <img> елемент
        expect(images.length).toBeGreaterThan(0);

        // Перевіряємо, чи кожен <img> має атрибути src та alt
        images.forEach(img => {
            expect(img).toHaveAttribute('src');
            expect(img).toHaveAttribute('alt');
        });
    });
});
