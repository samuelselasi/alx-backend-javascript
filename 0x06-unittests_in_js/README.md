# 0x06. Unittests in JS
#### `UnitTests` `Back-end` `JavaScript` `ES6` `NodeJS` `ExpressJS` `Mocha`
![90f79a666e174e6c4ffc](https://github.com/samuelselasi/alx-backend-javascript/assets/85158665/64a612c4-43fa-48eb-bc9e-3731751df3f0)

## Resources
**Read or watch**:

* [Mocha documentation](https://mochajs.org/)
* [Chai](https://www.chaijs.com/api/)
* [Sinon](https://sinonjs.org/releases/v7)
* [Express](https://expressjs.com/en/guide/routing.html)
* [Request](https://www.npmjs.com/package/request)
* [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

## Requirements
* All of your code will be executed on Ubuntu `18.04` using `Node 12.x.x`
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `js` extension
* When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

## Tasks

[0. Basic test with Mocha and Node assertion library](./0-calcul.test.js)

#### Install Mocha using npm:

* Set up a scripts in your `package.json` to quickly run `Mocha` using `npm test`
* You have to use `assert`

#### Create a new file named `0-calcul.js`:

* Create a function named `calculateNumber`. It should accepts two arguments (*number*) `a` and `b`
* The function should round `a` and `b` and return the `sum` of it

#### Test cases

* Create a file `0-calcul.test.js` that contains test cases of this function
* You can assume `a` and `b` are always `number`
* Tests should be around the `“rounded”` part

#### Tips:

* For the sake of the example, this test suite is slightly extreme and probably not needed
* However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

#### Requirements:

* You have to use `assert`
* You should be able to run the test suite using `npm test 0-calcul.test.js`
* Every test should pass without any warning

#### Expected output:
```
> const calculateNumber = require("./0-calcul.js");
> calculateNumber(1, 3)
4
> calculateNumber(1, 3.7)
5
> calculateNumber(1.2, 3.7)
5
> calculateNumber(1.5, 3.7)
6
>
```
#### Run test
```
bob@dylan:~$ npm test 0-calcul.test.js 

> task_0@1.0.0 test /root
> ./node_modules/mocha/bin/mocha "0-calcul.test.js"

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
bob@dylan:~$
```

[1. Combining descriptions](./1-calcul.test.js)

#### Create a new file named `1-calcul.js`:

* Upgrade the function you created in the previous task ([0-calcul.js](./0-calcul.js))
* Add a new argument named `type` at first argument of the function. type can be `SUM`, `SUBTRACT`, or `DIVIDE` (*string*)
* When `type` is `SUM`, round the two numbers, and add `a` and `b`
* When `type` is `SUBTRACT`, round the two numbers, and subtract `b` from `a`
* When `type` is `DIVIDE`, round the two numbers, and divide `a` with `b` - if the rounded value of `b` is equal to `0`, return the string `Error`

#### Test cases

* Create a file `1-calcul.test.js` that contains test cases of this function
* You can assume `a` and `b` are always `number`
* Usage of `describe` will help you to organize your test cases

#### Tips:

* For the sake of the example, this test suite is slightly extreme and probably not needed
* However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

#### Requirements:

* You have to use `assert`
* You should be able to run the test suite using `npm test 1-calcul.test.js`
* Every test should pass without any warning

#### Expected output:
```
> const calculateNumber = require("./1-calcul.js");
> calculateNumber('SUM', 1.4, 4.5)
6
> calculateNumber('SUBTRACT', 1.4, 4.5)
-4
> calculateNumber('DIVIDE', 1.4, 4.5)
0.2
> calculateNumber('DIVIDE', 1.4, 0)
'Error'
```

