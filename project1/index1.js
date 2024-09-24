const express = require("express");
const fs = require("fs");
const app = express();
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");

const PORT = 8000;

// Load users from MOCK_DATA.json file
// Note: This is a mock data file, in a real-world scenario, you would fetch data from a database

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/utube-app-1') 
  // Connect to the MongoDB instance at localhost:27017, using the database named 'utube-app-1'
  .then(() => {
    console.log("MongoDB Connected"); 
    // If the connection is successful, log a success message to the console
  })
  .catch((err) => {
    console.log("Mongo Error", err); 
    // If there's an error during the connection process, log an error message to the console along with the error details
  });

// Define the user schema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  }, 
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  }
});

// Create a model for the user schema
const User = mongoose.model("user", userSchema);

// Middleware -- Plugin
app.use(express.urlencoded({ extended: false })); // plugin for now

// Middleware to log requests
app.use((req, res, next) => {
  fs.appendFile('log.txt', `${Date.now()}: ${req.method} : ${req.path}`, (err, data) => {
    next();
  });
  // console.log("Hello from middleware 1"); // holds request
  // req.myUserName = "tanishabansal.dev"
  // return res.json({ msg: "Hello from middleware 1"}) // users just return this
  // next(); // for calling other users
});

// Route to get all users in HTML format
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map(user => `<li>${user.first_name}</li>`)}
  </ul>
  `;
  res.send(html);
});

// Routes for REST API
app.get("/api/users", (req, res) => {
  res.setHeader("X-MyName", "Tanisha Bansal") // custom header
  // always add X to custom headers
  // console.log('I am in get route', req.myUserName)
  return res.json(users);
});

// Route to get a single user by ID
app.route('/api/users/:id').get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
})

// Route to update a user by ID
app.route('/api/users/:id').patch((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    // Update the user object with the new data from the request body
    Object.assign(user, req.body);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
      return res.json({ status: "updated" });
    });
  } else {
    return res.status(404).json({ status: "not found" });
  }
})

// Route to delete a user by ID
app.route('/api/users/:id').delete((req, res) => {
  const id = Number(req.params.id);
  const user = users.findIndex((user) => user.id === id);
  if (user !== -1) {
    users.splice(user, 1);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
      return res.json({ status: "deleted" });
    });
  } else {
    return res.status(404).json({ status: "not found" });
  }
});

// Route to create a new user
app.post('/api/users', async (req, res) => {
  // Extract the request body
  const body = req.body;

  // Check if the request body is empty or missing any required fields
  if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
    // If any required fields are missing, return a 400 Bad Request response
    return res.status(400).json({ status: "bad request" });
  }

  try {
    // Create a new user document using the User model
      const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
      });
  
      // Log the result to the console for debugging purposes
      console.log("result", result);
  
      // Return a 201 Created response with a success message
      return res.status(201).json({ msg: "success" });
    } catch (err) {
      // If there's an error during the user creation process, log the error and return a 500 Internal Server Error response
      console.error(err);
      return res.status(500).json({ msg: "error creating user" });
    }
  });

//   user.push( { ...body, id: users.length + 1 });
//   //users.push(newUser);
//   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//     return res.status(201).json({ status: "created", id: users.length });
//   });


app.listen(PORT, () => console.log(`Server started at PORT:${PORT} `));

// app.patch('/api/users/:id', (req,res)=>{
//     // todo: edi tuser with id
//     return res.json({status:"pending"});

// })

// app.delete('/api/users/:id', (req,res)=>{
//     // todo: delete user with id
//     return res.json({status:"pending"});

// }
