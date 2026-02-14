### steps to create backend

1.Generate package.json
**npm init -y** (npm - **node package manager** - its a command line tool and registry for javascript packages.......)

## there is a pre defined library to call http request in js instead of downloading other third parties like apache tomcat in the case of java

2. create HTTP server
   a.install & import "expresss" module(there are several lakhs of modules express can create api and does whole work efficiently)
   **npm install express**
   b.import express module

### HTTP REQUEST TYPES(**Cred Operations**)

get - read resources // accessing route
post - cerate a new resoirce
put - update a resource
delete - delete a resource

GET → http://127.0.0.1:3000/users
POST → http://127.0.0.1:3000/users
PUT → http://127.0.0.1:3000/users/:id
DELETE → http://127.0.0.1:3000/users/:id

//rest api end points:
an endpoint is a url where your api can be accessed to perform specific operations on resurces
//good using
GET /users -- to get all users
DELETE /users/kiran123 -- to delete a specific user

//each route have a request and a handler request
when the both method and request path are matched then the request is handled.

http - is the protocol used for the port mnumber 3000.
//good to use plurals - users
get - http://localhost:3000/user

### data vs information

### database

### database server - software

### dbms

//comparison query operators
$eq
$neq
$gt
$gte
$lt
$lte
$in
$nin
