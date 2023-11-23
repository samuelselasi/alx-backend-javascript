# Deep Equality And POST Integration Testing

#### Modify the file `api.js`:

* Add an endpoint `GET /available_payments` that returns an object with the following structure:
```
{
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
}
```
* Add an endpoint `POST /login` that returns the message `Welcome :username` where `:username` is the value of the body variable `userName`.

#### Modify the file `api.test.js`:

* Add a test suite for the `/login` endpoint
* Add a test suite for the `/available_payments` endpoint

#### Server

Terminal 1:
```
bob@dylan:~$ node api.js
API available on localhost port 7865
```
Terminal 2:
```
bob@dylan:~$ curl http://localhost:7865/available_payments ; echo ""
{"payment_methods":{"credit_cards":true,"paypal":false}}
bob@dylan:~$ 
bob@dylan:~$ curl -XPOST http://localhost:7865/login -d '{ "userName": "Betty" }' -H 'Content-Type: application/json' ; echo ""
Welcome Betty
bob@dylan:~$
```
Tips:

* Look at deep equality to compare objects

#### Requirements:

* You should be able to run the test suite using `npm test api.test.js`
* Every test should pass without any warning
* Your server should not display any error

