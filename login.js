



const login =(req,res) => {
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
        <div class="login-box">
        <h1>Login</h1>
        
        <form action="/userlogin" method="POST">
         <label>Email</label>
         <input type="email" placeholder="" name="email" required/>
         <label>Password</label>
         <input type="password" placeholder="" name="pass" required/>
         <input type="submit" value="Submit" />
        </form>
    </div>
         <p class="para-2">
         Not have an account? <a href="/signup" class="signup">Sign Up Here</a>
        </p>
    </body>
    
`)

};

module.exports = login;