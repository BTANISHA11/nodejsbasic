Node js
 client request to server 
 request in event queue  go in event loop acc to fifo 
 blocking opn - synchornous call - go to thread pool(worker) - return res
 non blocking opn - asynchronous call - process

 url- user friendly name of ip address
 query parameter- q(query)- js+inter+ques and source ie hp , request 

 http get- when we want to get some data from the server  browser get data wala kaam krta h
 http post- when we want to send and mutate (data change) some data to the server  browser post data wala ka (forms se data send)
 put - for photo and file upload
 patch- changing any entry existing
 delete - for account deleting
  express writes myhandler function for us

  # Versioning
  1.0.0 - major.minor.patch
  ^4.18.2 4th version (4.18.2-> <5.0.0)
  ^ -- Install all recommended and minor fixes automatically
   1st part->4 -- major and breaking update
   2nd part->18 -- recommended bug fix(security fix)
   3rd part->2 -- minor fixes (optional update)

   # Rest API
   rules
   work on server client architecture
    allways respect all -- use http methods
   fast and secure
   use json(key value pairs -- raw data) for data exchange phle xml
   1. Resource - data
   2. Action - CRUD
   3. Resource identifier - id
   4. HTTP method - get, post, put, patch, delete

   https://www.mockaroo.com/  -- fake data api
   work with json

   server is hybrid should support

   postman - utility tool for cleaning , testing

http header --  request and response
middleware - client request go to middleware first do processing if not good return even end this cycle of return response 
multiple one can be also there 
can execute any code , make changes to request and response objects , end cycle , call next middleware func in stack

# http headers
headers- original data in packete extra info out mam is client info is headers
http headrs are imp part of api request and response as they represnt meta data associated with api req and res.
carry info for the req and res body

# Status codes
 404 not found
100-199 --- informational responses
200-299 --- success res
300-399 --- redirct res msg
400-499 --- client error
500-599 --- server error
 201-- created
 202-- accepted
 203 -- non authoratative info
 204-no content
 205-reset content
 206 -- partial content
 400- bad request
 401- unauthorized

 nodemon for starting server by itself

 # Mongodb
 no sql document based database
 strong support for aggregation pipes
 works for bson format
 best for node app

 mongosh to activate
 commands: 
 show dbs
 use <db_name>
 show collections
 db.coll.find()
 db.coll.insert()

 # FInally MVC
 comtroller - manipulate model
 model - update view
 user calls route -- route calls controller -- controller change model

 for server side rendering problems
 ejs ,  pug , handlebars
ejs makes server side rendering easy

# Node js authetication from scratch
authentication 2 patterns
statefull-- which maintains state or data or server side
stateless -which has no state
state- basically data jiske saath map krte h kcuh maintain krne ke lia

how to transfer uid?
using cookies , response, headers

express flow-- client -- auth middleware(checks for cookie value or uid if valid caals next() else rejects the request) -- endpoint route

# jwt autheication
jwt - json web token

stateful is memory intensive
so therefore use stateless authetication for less memory 
in token keep state
keep the state in payload only -- follow csm architecture
use jwt token for this
data is basically stored in the form of token
npm i jsonwebtoken

# Cookies
made by server
uid token data rakhte h give it to user
browser pe jaati h user se
if cookie h then token ki value nikalenge
cookies are domain specific
cookies are path specific
jo server jis domain ke lia cookies bnata h usi ke paas vapas jata h
can keep expiry date
bearer authorization use

authtication means a user belong to this appplication

# Authorization
Authorization is the process of giving someone the ability to access a resource.

# Discord bot
intent means what permission giivng to bot