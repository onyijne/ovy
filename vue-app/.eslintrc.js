module.exports = {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:vue/recommended",
      "prettier"
    ],
    "rules": {
      "no-console": "off",
      "vue/name-property-casing": [1],
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "never",
          "normal": "always",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }]
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
