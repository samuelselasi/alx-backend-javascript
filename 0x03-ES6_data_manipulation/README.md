# 0x03. ES6 data manipulation
#### `JavaScript` `ES6`

![6ab7bec4727cb5c91257](https://github.com/samuelselasi/alx-backend-javascript/assets/85158665/f585b275-be2d-4d70-b2ee-c08974cdd97a)

## Resources
**Read or watch**:

* [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
* [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
* [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Requirements
* All your files will be executed on Ubuntu `18.04` LTS using NodeJS `12.11.x`
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `js` extension
* Your code will be tested using `Jest` and the command `npm run test`
* Your code will be verified against lint using `ESLint`
* Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
* All of your functions must be exported

## Setup
### Install NodeJS 12.11.x
(in your home directory):
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
### Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

## Configuration files
Add the files below to your project directory

#### `package.json`
```

{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

#### `babel.config.js`
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

#### `.eslintrc.js`
```
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

```

#### and...
Don’t forget to run `$ npm install` when you have the `package.json`

## Tasks

[0. Basic list of objects](./0-get_list_students.js)

Create a function named `getListStudents` that returns an array of objects.

Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

The array contains the following students in order:

* `Guillaume`, id: `1`, in `San Francisco`
* `James`, id: `2`, in `Columbia`
* `Serena`, id: `5`, in `San Francisco`
```
bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$
```
