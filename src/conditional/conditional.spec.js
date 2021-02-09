const ConditionalSuite = require('./conditional');

describe('Conditional Logic', () => {
    const conditionalSuite = new ConditionalSuite();

    describe('isEven', () => {
        it('should return true when the number is even', () => {
            expect(conditionalSuite.isEven(2)).toBe(true);
        });

        it('should return false when the number is odd', () => {
            expect(conditionalSuite.isEven(1)).toBe(false);
        });
    });

    describe('sheepClassification', () => {
        it('should return lamb when age is less than 1 and gender is Male', () => {
            expect(conditionalSuite.sheepClassification('Male', 0.5).toLowerCase()).toEqual('lamb');
        });

        it('should return lamb when age is less than 1 and gender is Female', () => {
            expect(conditionalSuite.sheepClassification('Female', 0.8).toLowerCase()).toEqual('lamb');
        });

        it('should return ram when age is greater than 1 and gender is Male', () => {
            expect(conditionalSuite.sheepClassification('Male', 2.5).toLowerCase()).toEqual('ram');
        });

        it('should return ewe when age is greater than 1 and gender is Female', () => {
            expect(conditionalSuite.sheepClassification('Female', 3).toLowerCase()).toEqual('ewe');
        });
    });

    describe('isEvenTernary', () => {
        it('should return true when the number is even', () => {
            expect(conditionalSuite.isEvenTernary(2)).toBe(true);
        });

        it('should return false when the number is odd', () => {
            expect(conditionalSuite.isEvenTernary(1)).toBe(false);
        });
    });

    describe('getPurchasePrice', () => {
        it('should return 100 when units are less than 2000', () => {
            expect(conditionalSuite.getPurchasePrice(500)).toEqual(100);
            expect(conditionalSuite.getPurchasePrice(1000)).toEqual(100);
            expect(conditionalSuite.getPurchasePrice(1999)).toEqual(100);
        });

        it('should return 95 when units are greater than 2000 but less than 4000', () => {
            expect(conditionalSuite.getPurchasePrice(2000)).toEqual(95);
            expect(conditionalSuite.getPurchasePrice(3000)).toEqual(95);
            expect(conditionalSuite.getPurchasePrice(4000)).toEqual(95);
        });

        it('should return 90 when units are greater than 4000', () => {
            expect(conditionalSuite.getPurchasePrice(4001)).toEqual(90);
            expect(conditionalSuite.getPurchasePrice(5000)).toEqual(90);
            expect(conditionalSuite.getPurchasePrice(10000)).toEqual(90);
        });
    });

    describe('whatDayIsToday', () => {
        it('should return Sunday when 0 is given', () => {
            expect(conditionalSuite.whatDayIsToday(0).toLowerCase()).toEqual('sunday');
        });

        it('should return Monday when 1 is given', () => {
            expect(conditionalSuite.whatDayIsToday(1).toLowerCase()).toEqual('monday');
        });

        it('should return Tuesday when 2 is given', () => {
            expect(conditionalSuite.whatDayIsToday(2).toLowerCase()).toEqual('tuesday');
        });

        it('should return Wednesday when 3 is given', () => {
            expect(conditionalSuite.whatDayIsToday(3).toLowerCase()).toEqual('wednesday');
        });

        it('should return Thursday when 4 is given', () => {
            expect(conditionalSuite.whatDayIsToday(4).toLowerCase()).toEqual('thursday');
        });

        it('should return Friday when 5 is given', () => {
            expect(conditionalSuite.whatDayIsToday(5).toLowerCase()).toEqual('friday');
        });

        it('should return Saturday when 6 is given', () => {
            expect(conditionalSuite.whatDayIsToday(6).toLowerCase()).toEqual('saturday');
        });
    });
});