/**
 * The Boolean (Bool) type in JavaScript is one of the three 'Primitive' types.
 * It is used to identify Truthy (true) and Falsy (false) scenarios, commonly
 * as the result of comparisons.
 * 
 * Example: true
 * 
 * To run this suite, you can execute `npm run test:booleans` from the root folder.
 */

class BooleanSuite {

    /**
     * Challenge 1, why doesn't this conditional return 'Path Two'?
     * 
     * Hint: Remember how different types are written
     */
    executeConditional() {
        var conditional = 'false';

        // Don't change anything below this line.
        if (conditional) { 
            return 'Path One';
        } else {
            return 'Path Two';
        }
    }

}

module.exports = BooleanSuite;