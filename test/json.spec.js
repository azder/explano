const E = require('../src/index.cjs');
const {random$} = require('./util.js');


describe('JSON', () => {


    it('stringifies the tag to a proper string', () => {

        const name = 'json test name' + random$();

        const actual = JSON.stringify(E[name]);
        const expected = `"${name}"`;

        expect(actual).toBe(expected);

    });


});
