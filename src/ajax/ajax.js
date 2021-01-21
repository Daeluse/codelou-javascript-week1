/**
 * AJAX (Asynchronous Javascript And XML) is a transport system designed to be
 * able to retrieve resources from a server and shuttle them back to the page.
 * It is standard fare in any application to make dozens of XHR requests over
 * the course of a session to keep data updated as the user navigates.
 * 
 * To run this suite, you can execute `npm run test:ajax` from the root folder.
 */

class AjaxSuite {

    /**
     * This is the base url for making requests to the PokeAPI. To find a mon,
     * append the search term to the end of the url.
     * 
     * https://pokeapi.co/api/v2/pokemon/ditto
     */
    _baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

    /**
     * Challenge 1: Return the results of an XHR request to the PokeAPI for any
     * given name.
     * 
     * Note: This challenge is meant to be difficult. We have not yet covered all
     * the ideas that are necessary to accomplish this task. At this point, you should
     * know how to structure and send an XHR request, but how do we return it?
     * 
     * Javascript is a synchronous language. How can we return something that is
     * asynchronous?
     * 
     * @param {String} name 
     */
    wordSearch(name) {
        // Implement your solution below this line
        
        // Implement your solution above this line
    }

}

module.exports = AjaxSuite;