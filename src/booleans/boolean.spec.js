const BooleanSuite = require('./boolean');

describe('Booleans', () => {
    const booleanSuite = new BooleanSuite();

    describe('executeConditional', () => {
        it('should take the second path', () => {
            expect(booleanSuite.executeConditional()).toEqual('Path Two');
        });
    });
});