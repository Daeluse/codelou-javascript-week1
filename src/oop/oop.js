/**
 * It is recommended to read through primer.js before attempting these challenges.
 * 
 * To run this suite, you can execute `npm run test:oop` from the root folder.
 */

/**
 * Challenge 1.1: Create a new class named 'Animal'
 * 
 * Challenge 1.2: Create two properties on the Animal class:
 * name
 * legCount
 * 
 * Challenge 1.3: Create a method on the Animal class which prints the value of name.
 */

/**
 * Challenge 2.1: Create a new class named 'Dog' which extends the Animal class
 * 
 * Challenge 2.2: Create three properties on the Dog class:
 * breed
 * color
 * noseLength
 * 
 * Challenge 2.3: Create a method on the Dog class which prints the color of the dog
 * followed by the breed of the dog.
 * 'White Husky'
 */

/**
 * Challenge 3.1: Create a new class named 'Cat' which extends the Animal class
 * 
 * Challenge 3.2: Create three new properties on the Cat class:
 * breed
 * color
 * furLenth
 */

/**
 * Challenge 4.1: Refactor the classes Animal, Dog and Cat to move the duplicated
 * properties to the parent Animal class. The Dog and Cat classes should have only
 * one additional property each. The method for 2.3 should still be in the Dog class.
 * 
 * Challenge 4.2: Add a constructor method to the Animal class which allows properties
 * name, legCount, breed, and color to be passed in.
 * 
 * Challenge 4.3: Add constructor methods to the Dog and Cat classes which allow properties
 * name, legCount, breed, and color in addition to noseLength for Dog and furLength for Cat
 * to be passed in. Make sure the constructor methods include super calls to pass the inherited
 * property data to the parent.
 */

class OOPSuite {

    /**
     * Challenge 5: Update the following method to instantiate and return a new instance
     * of the Dog class with the provided information.
     * 
     * @param {String} name 
     * @param {Number} legCount 
     * @param {String} breed 
     * @param {String} color 
     * @param {Number} noseLength
     */
    createDog(name, legCount, breed, color, noseLength) {}

    /**
     * Challenge 5: Update the following method to instantiate and return a new instance
     * of the Cat class with the provided information.
     * 
     * @param {String} name 
     * @param {Number} legCount 
     * @param {String} breed 
     * @param {String} color 
     * @param {Number} furLength
     */
    createCat(name, legCount, breed, color, furLength) {}

}

module.exports = OOPSuite;