const NumberSuite = require('./number');

describe('Numbers', () => {
    const numberSuite = new NumberSuite();

    describe('convertToNumber', () => {
        it('should convert a numberString to a number', () => {
            expect(numberSuite.convertToNumber('12')).toBe(12);
        });
    });

    describe('calculateStringLength', () => {
        it('should calculate the length of a string', () => {
            expect(numberSuite.calculateStringLength('fooBar')).toBe(6);
        });
    });
});