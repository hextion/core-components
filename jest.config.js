const ignoredModules = ['simplebar'];

const baseConfig = {
    preset: 'ts-jest/presets/js-with-ts',
    modulePathIgnorePatterns: ['dist'],
    globalSetup: './packages/globalSetup.ts',
    globals: {
        'ts-jest': {
            babelConfig: {
                plugins: [
                    '@babel/plugin-proposal-optional-chaining',
                    '@babel/plugin-proposal-nullish-coalescing-operator',
                ],
            },
            tsconfig: 'tsconfig.test.json',
        },
    },
    moduleNameMapper: {
        '@balafla/core-components-(.*)/(.*)$': '<rootDir>/packages/$1/src/$2',
        '@balafla/core-components-(.*)$': '<rootDir>/packages/$1/src',
        '\\.css$': 'identity-obj-proxy',
    },
    testPathIgnorePatterns: ['codemod'],
    transformIgnorePatterns: [`node_modules/(?!${ignoredModules.join('|')})`],
};

module.exports = {
    projects: [
        {
            ...baseConfig,
            displayName: 'csr' /* client side rendering */,
            testEnvironment: 'jest-environment-jsdom-sixteen',
            setupFilesAfterEnv: ['./packages/setupTests.ts'],
            testMatch: ['**/*.test.ts?(x)', '!**/*.(screenshots|ssr).test.ts?(x)'],
            coveragePathIgnorePatterns: ['index.ts'],
            coverageReporters: ['lcov', 'text', 'text-summary', 'clover'],
        },
        {
            ...baseConfig,
            displayName: 'ssr' /* server side rendering */,
            testEnvironment: 'node',
            testMatch: ['**/*.ssr.test.ts?(x)'],
        },
    ],
};
