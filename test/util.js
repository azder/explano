'use strict'; // ALWAYS

const str = (

    val => null === val || void 0 === val ? '' : String(val)

);

const now$ = (

    () => new Date()

);


const random$ = (

    prefix => (
        str(prefix)
        +
        ' '
        + now$().toISOString()
        + ' '
        + str(Math.random()).substr(2)
    )

);


module.exports = Object.freeze({

    random$,

});
