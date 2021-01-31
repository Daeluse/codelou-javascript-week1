const OOPSuite = require('./oop');

describe('Object Oriented Programming', () => {
    const oopSuite = new OOPSuite();

    describe('Dog', () => {
        let dog;

        beforeEach(() => {
            dog = oopSuite.createDog('Wren', 4, 'Anatolian Shpeherd', 'Brindle', 6);
        });

        it('should return something', () => {
            expect(dog).toBeDefined();
        });

        it('should have accessible properties', () => {
            expect(dog.name).toEqual('Wren')
            expect(dog.breed).toEqual('Anatolian Shpeherd');
        });
    });

    describe('Cat', () => {
        let cat;

        beforeEach(() => {
            cat = oopSuite.createCat('Rook', 4, 'Domestic Shorthair', 'White / Brown', 1);
        });

        it('should return something', () => {
            expect(cat).toBeDefined();
        });

        it('should have accessible properties', () => {
            expect(cat.name).toEqual('Rook')
            expect(cat.breed).toEqual('Domestic Shorthair');
        });
    });
});