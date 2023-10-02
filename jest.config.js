module.exports = {
    testMatch: [
        '(/test/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
        '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};
