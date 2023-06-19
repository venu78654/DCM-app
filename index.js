const express = require('express')
const { MongoClient }= require('mongodb')
const bodyParser = require('body-parser')
const path = require('path')
const { profile } = require('console')

const app = express()
const port = 3000
let db =null

let dpstring= 'mongodb+srv://dcm-appuser:123qwerty123@cluster0.tgm5gkv.mongodb.net/dcm-app?retryWrites=true&w=majority'
let dbname ='dcm-app'
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const mongoclient = new MongoClient(dpstring,options, (err, client) =>{
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB');
  }
}) 
mongoclient.connect(function(err,client){
  if(err){
    throw err;
  }
  db = client.db(dbname)
  app.listen(3000)
})

app.use(express.static('public'))

app.use(express.urlencoded({extented:false}))
app.use(bodyParser.urlencoded({ extended: false }))


console.log(__dirname)



app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
})

 
app.post('/createnewuser' , function(req,res){
  // Extract the form data from the request body
  const { fname, lname, email, pass, conpass } = req.body;
  // Create a new document to insert into the 'userdata' collection
  const userData = { fname, lname, email, pass, conpass };
  db.collection('userdata').insertOne(userData,function(err, result){
    if (err) {
      console.error('Error inserting document:', err);
      res.send('Error inserting document');
    } else {
      console.log('Document inserted successfully');
      res.send(`<head>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
                </head>
                <body>   
                    <h1 style='text-align: center; font-size:4rem;'>
                        <i class="fa-solid fa-snowflake fa-spin" style="color: #02beed;"></i>
                            You're successfully signed up!
                                <i class="fa-solid fa-snowflake fa-spin" style="color: #02beed;"></i></h1>
                    <center><a href='/login'  style='font-size:2rem;'>Click to here to login</a></center>
                </body>`
              );
    }
  })
  
})
app.post('/makeappoint' , function(req,res){
  // Extract the form data from the request body
  const { fname, lname, date, email, phoneno, msg } = req.body;
  // Create a new document to insert into the 'userdata' collection
  const userData = { fname, lname, date, email, phoneno, msg };
  db.collection('appointmentdata').insertOne(userData,function(err, result){
    if (err) {
      console.error('Error inserting document:', err);
      res.redirect('/appointment');
    } else {
      console.log('appointment booked successfully');
      res.send(`<head>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
                </head>
                <body>   
                    <h1 style='text-align: center; font-size:4rem;'>
                        <i class="fa-solid fa-snowflake fa-spin" style="color: #02beed;"></i>
                            You're successfully Booked an appointment!
                                <i class="fa-solid fa-snowflake fa-spin" style="color: #02beed;"></i></h1>
                    <center><a href='/services'  style='font-size:2rem;'>Click to here to see other services</a></center>
                </body>`
              );
    }
  })
  
})


app.post('/userlogin',function(req,res){
  const { email, pass } = req.body;
  db.collection('userdata').findOne({ email }, (err, user) => {
    if (err) {
      console.error('Error querying the database:', err);
      // Handle the error
      return res.redirect('/login');
    }

    // Check if a user with the given email was found
    if (!user) {
      

      return res.redirect('/login');
    }

    // Check if the password matches
    if (user.pass !== pass) {
      
      return res.redirect('/login');
    }

    // User authenticated successfully, redirect to the dashboard or a success page
    res.redirect('/profile');
    
    console.log("valid user")

    // Close the database connection
    
  })
})

