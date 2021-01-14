const ObjectSuite = require('./object');

describe('Objects', () => {
    const objectSuite = new ObjectSuite();

    describe('getValueOf', () => {
        it('should return the value of a given key', () => {
            expect(objectSuite.getValueOf({foo: 'bar', baz: 'qux'}, 'baz')).toEqual('qux');
        });
    });
});