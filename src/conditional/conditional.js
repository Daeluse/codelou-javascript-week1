/**
 * To run this suite, you can execute `npm run test:conditional` from the root folder.
 */

class ConditionalSuite {

    /**
     * In JavaScript, if..else logic is the most basic version of conditonal logic.
     * This type of logic consists of three parts: a condition and two statements.
     * 
     * Challenge 1. Use if..else logic to make the following condition return true
     * if the number is even, and false if the number is odd.
     * 
     * @param {Number} n - Number to be checked if odd/even
     * @returns {Boolean}
     */
    isEven(n) {}

    /**
     * if..else logic can be extended to include additional statements by chaining
     * conditions. In this form, we can describe the logic as if..else if..else.
     * 
     * Challenge 2. Use if..else if..else logic to classify sheep. If the sheep's age
     * is younger than 1, it is a lamb, if it older than one and is a male, it is a ram,
     * otherwise it is a ewe.
     * 
     * @param {String} gender - 'Male' or 'Female'
     * @param {Number} age - Age of the sheep
     * @returns {String} - 'Lamb', 'Ewe', 'Raw'
     */
    sheepClassification(gender, age) {}

    /**
     * if..else logic can often times be shortened for readability by using ternaries.
     * A ternary, follows the same flow of logic with a different syntax: condition ? if : else.
     * 
     * Challenge 3. Use ternary syntax to solve challenge 1 in a different way.
     * 
     * @param {Number} n - Number to be checked if odd/even
     * @returns {Boolean}
     */
    isEvenTernary(n) {}

    /**
     * Challenge 4. When buying and selling grain in bulk, prices are often based on the amount
     * of product being purchased. Using the following table below, complete this method so it
     * returns the correct price based on the number of units (n) being purchased.
     * 
     * +---------------+-------------+
     * |    units n    |   price     |
     * +---------------+-------------+
     * | < 2000        |    100      |
     * +---------------+-------------+
     * |>= 2000,<= 4000|     95      |
     * +---------------+-------------+
     * | > 4000        |     90      |
     * +---------------+-------------+
     * 
     * @param {Number} n - Number of units being purchased
     * @returns {Number} - Price
     */
    getPurchasePrice(n) {}

    /**
     * In addition so simple if..else / ternary logic. We can perform logic based off a flag using
     * a switch statement. A switch statement has a flag which matches cases that are blocked off
     * with their own function.
     * 
     * switch('Foo') {
     *  case 'Foo':
     *   console.log('Its Foo');
     *   break;
     *  case 'Bar':
     *   console.log('Its Bar');
     *   break;
     *  default:
     *   console.log('Its neither Foo nor Bar');
     * }
     * 
     * If you return a value from within a case, you do not have to break from that case.
     * 
     * Challenge 5. Use a switch statement to return the name of the day when provided the number of
     * the day in the week where Sunday === 0 and Saturday === 6.
     * 
     * @param {Number} n - Numerical day of the week
     * @returns {String} - Name of the day
     */
    whatDayIsToday(n) {}
}

module.exports = ConditionalSuite;