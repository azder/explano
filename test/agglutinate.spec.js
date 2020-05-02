const E = require('../src/index.cjs');
const {random$} = require('./util.js');


describe('agglutinate', () => {


    it('works with nested functions', () => {

        const SEP = ': ';

        const outerNm = random$('outer function test name');
        const outerFn = E(outerNm);
        expect(typeof outerFn).toBe('function');
        expect(outerFn.name).toBe(outerNm);

        const innerNm = random$('inner function test name');
        const innerFn = outerFn(innerNm);
        expect(typeof innerFn).toBe('function');
        expect(innerFn.name).toBe(`${outerNm}${SEP}${innerNm}`);

        const tagNm = 'some tag test name' + random$();
        const expected = `${outerNm}${SEP}${innerNm}${SEP}${tagNm}`;
        expect(innerFn[tagNm]).toBe(expected);

    });


    it('does not work with nested strings', () => {

        const outerNm = 'outer function test name' + random$();
        const innerNm = 'inner function test name' + random$();

        expect(E[outerNm]).toBe(outerNm);
        expect(E[outerNm][innerNm]).toBe(void 0);

    });


});
