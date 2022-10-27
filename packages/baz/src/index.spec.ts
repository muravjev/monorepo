import { bazcalc } from './index';

describe('test Baz', () => {
    test.each([
        [0, 0],
        [1, 2],
        [2, 4]
    ])('%d -> %d', (input, expected) => {
        expect(bazcalc(input)).toBe(expected);
    });
});
