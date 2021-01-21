const DomSuite = require('./dom');

describe('DocumentObjectModel', () => {
    const domSuite = new DomSuite();

    beforeEach(() => {
        document.body.innerHTML = '';
    });

    describe('appendParagraphToBody', () => {
        beforeEach(() => {
            domSuite.appendParagraphToBody();
        });
        
        it('should append a paragraph tag to the body', () => {
            const paragraphs = Array.from(document.body.getElementsByTagName('p'));
            expect(paragraphs.length > 0).toEqual(true);
        });

        it('should contain the string "Javascript is great!"', () => {
            const paragraphs = Array.from(document.body.getElementsByTagName('p'));
            const paragraph = paragraphs.find((p) => p.innerText.toLowerCase() === 'javascript is great!');
            expect(paragraph).toBeDefined();
        });

        it('should have the id "paragraph-1"', () => {
            const paragraphs = Array.from(document.body.getElementsByTagName('p'));
            const paragraph = paragraphs.find((p) => p.id === 'paragraph-1');
            expect(paragraph).toBeDefined();
        });
    });

    describe('updateParagraphText', () => {
        beforeEach(() => {
            domSuite.updateParagraphText();
        });

        it('should contain the string "Typescript is great!"', () => {
            const paragraphs = Array.from(document.body.getElementsByTagName('p'));
            const paragraph = paragraphs.find((p) => p.innerText.toLowerCase() === 'typescript is great!');
            expect(paragraph).toBeDefined();
        });
    });
});