const ArraySuite = require('./array');

describe('Arrays', () => {
    const arraySuite = new ArraySuite();

    describe('getFirstIndex', () => {
        it('should return the first index of an array', () => {
            expect(arraySuite.getFirstIndex(['foo', 'bar', 'baz'])).toEqual('foo');
        });
    });

    describe('reverse', () => {
        it('should reverse an array', () => {
            expect(arraySuite.reverse(['foo', 'bar', 'baz'])).toEqual(['baz', 'bar', 'foo']);
        });
    });

    describe('getCSV', () => {
        it('should convert an array to a comma seperated list', () => {
            expect(arraySuite.getCSV(['foo', 'bar', 'baz'])).toEqual('foo,bar,baz');
        });
    });
});