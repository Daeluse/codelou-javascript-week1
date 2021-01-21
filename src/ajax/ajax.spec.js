const AjaxSuite = require('./ajax');

describe('DocumentObjectModel', () => {
    const ajaxSuite = new AjaxSuite();

    describe('wordSearch', () => {
        it('should', (done) => {
            ajaxSuite.wordSearch('psyduck').then(() => {
                done();
            });
        });
    });
});