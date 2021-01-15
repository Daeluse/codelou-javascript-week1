/**
 * The Object type in JavaScript is one of the two 'Complex' types.
 * It is used to store data as Key-Value-Pairs. Keys are always of the String
 * type, but Values can be of any type.
 * 
 * Example: { color: 'Green', enabled: true, value: 5 }
 * 
 * Objects support both Bracket and Dot notation. Instead of using a number
 * with bracket notation, we use a string matching the key we want to access.
 * 
 * object['color']
 * 
 * To use dot notation, we simply use the name of the key following the dot.
 * 
 * object.color
 * 
 * One of the main benefits of using bracket notation over dot notation is that
 * you can resolve variables inside of the brackets.
 * 
 * let key = 'color'
 * object[key]
 * 
 * To run this suite, you can execute `npm run test:objects` from the root folder.
 */

class ObjectSuite {

    /**
     * Challenge 1, how can I retrieve the value for a given key within an object.
     * 
     * Hint: You can look for Dot Notation and Bracket Notation on Google for help.
     * 
     * @param {Object} object
     * @param {String} key 
     */
    getValueOf(object, key) {
    }

}

module.exports = ObjectSuite;