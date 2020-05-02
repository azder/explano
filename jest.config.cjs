module.exports = ({

    testEnvironment: 'node',

    testMatch: [
        '**/test/**/*.(spec|test).js',
    ],

    coverageReporters: [
        'json',
        'lcov',
        'text',
        'text-summary',
    ],

    transform: {
        // eslint-disable-next-line no-useless-escape
        './src/.*\.js$': ['babel-jest', {}],
    },

});
