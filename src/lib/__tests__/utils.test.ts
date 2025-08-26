import { describe, expect, it } from 'vitest';
import { cn } from '../utils.js';

describe('cn', () => {
        it('merges class names', () => {
                expect(cn('px-2', 'py-3')).toBe('px-2 py-3');
        });

        it('resolves conflicting classes', () => {
                expect(cn('p-2', 'p-4')).toBe('p-4');
        });
});
