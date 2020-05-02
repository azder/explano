const E = require('../src/index.cjs');
const {random$} = require('./util.js');


describe('tag', () => {


    it('is the the same string to the key used to access it', () => {

        const expected = 'tag test name' + random$();
        const actual = E[expected];

        expect(actual).toBe(expected);

    });

    it('is memoized for future use', () => {

        const expected = 'future use tag test name' + random$();
        const actual = E[expected];

        expect(actual).toBe(expected);


        const memoized = Reflect.has(E, expected);

        expect(memoized).toBeTruthy();


        const retrieved = Reflect.get(E, expected);
        expect(retrieved).toBe(actual);

    });

});
