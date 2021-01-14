/**
 * The String type in JavaScript is one of the three 'Primitive' types.
 * It is used to convey text and other data, and can be easily identified
 * by the surrounding single or double quotes.
 * 
 * Example: 'Hello World'
 * 
 * To run this suite, you can execute `npm run test:strings` from the root folder.
 */

class StringSuite {

    /**
     * Challenge 1, why doesn't this function properly return a trimmed string?
     * 
     * Hint: The answer lies in the question.
     * 
     * @param {String} string 
     */
    removeWhiteSpace(string) {
        string.trim();
    }

    /**
     * Challenge 2, make this function return a truthy value if string contains subString.
     * Challenge 2.1, make the function case insensitive.
     * 
     * Hint: There are two methods available on Strings that can be used to accomplish this.
     * To find one of them, find a method which is named a synonym of contains.
     * 
     * 
     * @param {String} string
     * @param {String} subString
     */
    containsSubString(string, subString) {
    }

}

module.exports = StringSuite;