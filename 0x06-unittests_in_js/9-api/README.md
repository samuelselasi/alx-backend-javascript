# Regex Integration Testing

#### Modify the file [api.js](./api.js):

* Add a new endpoint: `GET /cart/:id`
* `:id` must be only a `number` (validation must be in the route definition)
* When `access`, the endpoint should return `Payment methods for cart :id`

#### Modify the file [api.test.js](./api.test.js):

* Add a new test suite for the `cart` page:
	* Correct status code when `:id` is a number?
	* Correct status code when `:id` is NOT a number (=> `404`)?
	* etc.

#### Server

Terminal 1:
```
bob@dylan:~$ node api.js
API available on localhost port 7865
```
Terminal 2:
```
bob@dylan:~$ curl http://localhost:7865/cart/12 ; echo ""
Payment methods for cart 12
bob@dylan:~$ 
bob@dylan:~$ curl http://localhost:7865/cart/hello -v
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 7865 (#0)
> GET /cart/hello HTTP/1.1
> Host: localhost:7865
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 404 Not Found
< X-Powered-By: Express
< Content-Security-Policy: default-src 'none'
< X-Content-Type-Options: nosniff
< Content-Type: text/html; charset=utf-8
< Content-Length: 149
< Date: Wed, 15 Jul 2020 08:33:44 GMT
< Connection: keep-alive
< 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /cart/hello</pre>
</body>
</html>
* Connection #0 to host localhost left intact
bob@dylan:~$
```
#### Tips:

* You will need to add a small `regex` in your path to support the usecase

#### Requirements:

* You should be able to run the test suite using `npm test api.test.js`
* Every test should pass without any warning

