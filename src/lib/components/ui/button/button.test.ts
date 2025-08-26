import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Button from './button.svelte';

describe('Button', () => {
        it('renders a button element', () => {
                const { getByRole } = render(Button);
                const button = getByRole('button');
                expect(button).toBeInTheDocument();
        });
});
