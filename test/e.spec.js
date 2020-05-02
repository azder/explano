const E = require('../src/index.cjs');
const {random$} = require('./util.js');


describe('E', () => {


    it('is function', () => {

        expect(typeof E).toBe('function');

    });

    it('returns a function passed for an argument', () => {

        const expected = random$('E function test name');
        const actual = E(expected);

        expect(typeof actual).toBe('function');

    });

    describe('returned function for an argument', () => {

        it('can have tags', () => {

            const SEP = ': ';

            const parentTag = random$('E function parent tag test name');
            const childTag = random$('E function child tag test name');

            const parentFn = E(parentTag);

            expect(parentFn[childTag]).toBe(`${parentTag}${SEP}${childTag}`);

        });

        it('memoizes tags', () => {

            const SEP = ': ';

            const parentTag = random$('E function parent tag test name');
            const childTag = random$('E function child tag test name');

            const parentFn = E(parentTag);

            expect(parentFn[childTag]).toBe(`${parentTag}${SEP}${childTag}`);

            const retrieved = Reflect.get(parentFn, childTag);
            expect(retrieved).toBe(`${parentTag}${SEP}${childTag}`);

        });
    });


    it('returns a function passed for no argument', () => {

        const actual = E();

        expect(typeof actual).toBe('function');

    });


});
