/**
 * Scope In Javascript is divided into two main types, Global and Local.
 * Local scope includes variables defined inside of a function, while global
 * scope refers to those defined outside of a function.
 * 
 * Each function creates a new scope when invoked.
 */

/**
 * Global Scope is the Default scope and can be accessed and mutated within any
 * other scope.
 */
const color = 'Blue';

function logColor() {
    // We are now in a Local scope, but we can still access the Global scope
    console.log(color); // 'Blue'
}

logColor(); // Prints 'Blue' to the console

/**
 * Local Scopes in Javascript are not connected, and variables defined in one Local
 * scope cannot be used in another.
 */

function createVariable() {
    const word = 'Apple';
}

function logVariable() {
    console.log(word);
}

createVariable();
logVariable();

/**
 * In addition to Scope in Javascript, there is also Context. Context is what the value
 * of the this keyword is referred to. When working with the Global scope, our context
 * will always be the Window object.
 * 
 * When our scope changes to be a method of an object, our context becomes the object
 * the method is a part of.
 */

function logScope() {
    console.log(this);
}

logScope(); // Prints the Window object to the console

class ObjectContext {
    logScope() {
        console.log(this);
    }
}

(new ObjectContext()).logScope(); // Prints the ObjectContext object instance to the console

/**
 * Additionally, we can localize the context of a function called outside of an object by
 * using the this keyword.
 */

new logScope(); // Prints logScope {} to the console

/**
 * Execution Context references the Scope and NOT the Context. While this is an odd naming
 * convention, it makes sense when you begin to think of what it means. When the interpreter
 * reads code line by line, we can see the idea of Lexical Scope take form.
 * 
 * This means that
 * when the interpreter first begins, we only have the default Global scope, but as we begin
 * to nest groups of functions we create a Scope Chain.
 * 
 * This Scope Chain is used to then resolve the variables in the execution. Thus resulting in
 * the idea of Execution Context.
 * 
 * As the interpreter maneuvers through the following functions, it creates a variable object
 * and a scope chain. It uses these two pointers as well as context to determine how to handle
 * the logic.
 */

function parent() {
    // Global Scope is available here, I can access things like color defined at line 19.
    const step = 0;
    function child() {
        // Global Scope and my Parent Scope is available here, I can access both color and step.
        const iteration = 0;
        function grandChild() {
            // Global Scope, Child Scope and Parent Scope all available here.
            const marker = 0;
        }
    }
}

/**
 * Closures in Javascript are a way of using Lexical Scoping to allow the Local scope
 * to maintain access to all the resources of the outer function.
 * 
 * This also allows us to encapsulate variables so that they cannot be modified.
 */

 function closure() {
    const greeting = 'Hello World';
    return function() {
        console.log(greeting);
    }
 }

 closure(); // Nothing happens

 const invocation = closure(); // The returned function from closure() gets saved in the invocation variable

 invocation(); // Prints 'Hello World' to the console