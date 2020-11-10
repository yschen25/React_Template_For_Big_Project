module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "plugins": ["prettier"],
    "parser": "babel-eslint",
    "extends": [
        "prettier",
        "eslint:recommended",
        'plugin:react/recommended'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 4],
        "quotes": ["error", "single"],
        "no-var": ["error"],
        "no-mixed-spaces-and-tabs": ["error"],
        "space-infix-ops": ["error", {"int32Hint": false}],
    }
};