/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    overrides: [
        {
            files: ['src/views/**/*.vue', 'src/components/**/*.vue'],
            rules: {
                'vue/multi-word-component-names': 0,
                'no-unused-vars': 'off',
            },
        },
    ],
};
