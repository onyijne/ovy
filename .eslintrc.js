module.exports = {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:vue/recommended"
    ],
    "rules": {
      "no-console": "off",
      "vue/name-property-casing": ["error", "PascalCase" | "kebab-case"]
    },
    "parserOptions": {
      "parser": "babel-eslint",
      "ecmaVersion": 2017,
      "sourceType": "module"
    },
    "plugins": [
      "vue"
    ]
}
