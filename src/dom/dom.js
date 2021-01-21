/**
 * The DOM (Document Object Model) is a representation of a web page. It is very
 * important to understand how we can interact with the different layers of the DOM.
 * 
 * To run this suite, you can execute `npm run test:dom` from the root folder.
 */

class DomSuite {

    /**
     * Challenge 1: Append a paragraph (<p> tag) to the end of the document's body.
     * Challenge 1.1: The text inside of the paragraph should read 'Javascript is great!'
     * Challenge 1.2: The paragraph should have an id of 'paragraph-1'
     */
    appendParagraphToBody() {
        // Implement your solution below this line
        const p = document.createElement('p');
        p.innerText = 'Javascript is great!';
        p.id = 'paragraph-1';
        document.body.appendChild(p);
        // Implement your solution above this line
    }

    /**
     * Challenge 2: Get reference to the paragraph tag created using the ID and
     * update its text to 'Typescript is great!'
     */
    updateParagraphText() {
        this.appendParagraphToBody();
        // Implement your solution below this line
        const p = document.getElementById('paragraph-1');
        p.innerText = 'Typescript is great!';
        // Implement your solution above this line
    }

}

module.exports = DomSuite;