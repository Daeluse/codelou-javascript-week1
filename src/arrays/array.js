/**
 * The Array type in JavaScript is one of the two 'Complex' types.
 * It is used to store lists of items. Arrays are arranged with 0 based indices
 * and each value of an index can be of any type.
 * 
 * Example: [1, true, 'Foo']
 * 
 * Arrays support Bracket Notation for accessing the indices. To access the value
 * at any given index, we could use array[5], this would give us the 6th value in
 * the array. It gives us the 6th because arrays start at the 0th index.
 * 
 *    0      1      2      3       4
 * ['Foo', 'Bar', 'Baz', 'Qux', 'Corge']
 * 
 * To run this suite, you can execute `npm run test:arrays` from the root folder.
 */

class ArraySuite {

    /**
     * Challenge 1, how can I return the first value of an array?
     * 
     * Hint: You can Google Javascript Bracket Notation for additional help.
     * 
     * @param {Array} list 
     */
    getFirstIndex(list) {
    }

    /**
     * Challenge 2, how can I reverse an array?
     * 
     * Hint: The answer lies in the question.
     * 
     * @param {Array} list
     */
    reverse(list) {
    }

    /**
     * Challenge 3, how can I convert an array into a comma seperated list?
     * 
     * Hint: Use intellisense to look over all the methods available on the array.
     * 
     * @param {Array} list
     */
    getCSV(list) {
    }

}

module.exports = ArraySuite;