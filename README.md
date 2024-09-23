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