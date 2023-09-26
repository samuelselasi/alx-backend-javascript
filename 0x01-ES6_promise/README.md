# 0x01. ES6 Promises
#### `JavaScript` `ES6`
![75862d67ca51a042003c](https://github.com/samuelselasi/alx-backend-javascript/assets/85158665/fcc69067-e92d-476c-ad10-70f81ccb5723)

## Resources
**Read or watch**:

* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [JavaScript Promise: An introduction](https://web.dev/promises/)
* [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
* [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Requirements
### General
* All your files will be executed on Ubuntu `18.04` LTS using NodeJS `12.11.x`
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `js` extension
* Your code will be tested using the [Jest Testing Framework](https://jestjs.io/) and the command `npm run test`
* Your code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that we’ll provide
* All of your functions must be exported

## Setup
#### Install NodeJS 12.11.x
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
#### Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

### Configuration files
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
### `utils.js`
Use when you get to tasks requiring `uploadPhoto` and `createUser`.
```
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
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

#### and…
Don’t forget to run `$ npm install` when you have the `package.json`

## Response Data Format
`uploadPhoto` returns a response with the format
```
{
  status: 200,
  body: 'photo-profile-1',
}
```
`createUser` returns a response with the format
```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

## Tasks

[0. Keep every promise you make and only make promises you can keep](./0-promise.js)

Return a Promise using this prototype function `getResponseFromAPI()`

```
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$
```

[1. Don't make a promise...if you know you can't keep it](./1-promise.js)

Using the prototype below, return a `promise`. The parameter is a `boolean`.
```
getFullResponseFromAPI(success)
```
When the argument is:

* `true`
	* resolve the promise by passing an object with 2 attributes:
		* `status`: `200`
		* `body`: `'Success'`
* `false`
		* reject the promise with an error object with the message `The fake API is not working currently`
Try testing it out for yourself
```
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$
```

[2. Catch me if you can!](./2-then.js)

Using the function prototype below
```
function handleResponseFromAPI(promise)
```
Append three handlers to the function:

* When the Promise resolves, return an object with the following attributes
	* `status`: `200`
	* `body`: `success`
* When the Promise rejects, return an empty `Error` object
* For every resolution, log `Got a response from the API to the console`
```
bob@dylan:~$ cat 2-main.js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
Got a response from the API
bob@dylan:~$
```
