const signup = (req,res) => {
    res.send(`
    <head>
        <link rel="stylesheet" href="/login.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <header class="head">

        
            <a herf="#" class="logo"><i class="fas fa-tooth fa-fade" style="color: #0000ff;"></i>Dental Clinic</a>
            <nav class="navbar">
            <a href="/">Home</a>
            <a href="/services">Our Services</a>
            <a href="/appointment">Make An Appointment</a>
            <a href="/contact">Contact Us</a>
            <a href="/login" id="login">Login</a>
            </nav>
        </header>
        <div class="signup-box">
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <form action="/createnewuser" method="POST">
        <label>First Name</label>
        <input type="text" placeholder="" name="fname" required/>
        <label>Last Name</label>
        <input type="text" placeholder="" name="lname"/>
        <label>Email</label>
        <input type="email" placeholder="" name="email" required/>
        <label>Password</label>
        <input type="password" placeholder="" name="pass" required/>
        <label>Confirm Password</label>
        <input type="password" placeholder="" name="conpass" required/>
        <input type="submit" value="Submit" />
      </form>
      
    </div>
    <p class="para-2">
      Already have an account? <a href="/login">Login here</a>
    </p>
  </body>
    
    `)

};


module.exports = signup;