module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:vue/recommended'
    ],
    // add your custom rules here
    rules: {
        'indent': ['warn', 4, {
            'SwitchCase': 1
        }],
        'vue/html-indent': ['warn', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
        'vue/script-indent': ['warn', 4, {
            'baseIndent': 0,
            'switchCase': 1,
            'ignores': []
        }],
        'vue/html-self-closing': ['warn', {
            'html': {
                'void': 'always',
                'normal': 'any',
                'component': 'any'
            },
            'svg': 'always',
            'math': 'always'
        }],
        'quotes': ['error', 'single', {
            'avoidEscape': false,
            'allowTemplateLiterals': true
        }],
        'semi': ['warn', 'never', {
            'beforeStatementContinuationChars': 'always'
        }],
        'vue/no-unused-components': ['warn', {
            'ignoreWhenBindingPresent': true
        }],
        'vue/no-unused-vars': ['warn'],
        'no-unused-vars': ['warn', {
            'vars': 'local',
            'args': 'after-used',
            'ignoreRestSiblings': false
        }],
        'space-before-function-paren': ['off']
    }
}
