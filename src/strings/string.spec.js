const StringSuite = require('./string');

describe('Strings', () => {
    const stringSuite = new StringSuite();

    describe('removeWhiteSpace', () => {
        it('should trim leading and trailing whitespace', () => {
            expect(stringSuite.removeWhiteSpace('  foo  ')).toEqual('foo');
        });
    });

    describe('containsSubString', () => {
        it('should return truthy when the subString is present', () => {
            expect(stringSuite.containsSubString('barFoo', 'bar')).toBe(true);
        });

        it('should return truthy when the subString is present (case insensitive)', () => {
            expect(stringSuite.containsSubString('barFoo', 'foo')).toBe(true);
        });

        it('should return falsy when the subString is not present', () => {
            expect(stringSuite.containsSubString('barFoo', 'baz')).toBe(false);
        });
    });

});