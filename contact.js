const contact = (req,res) => {
    res.send(`
    <head>
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
        <br>
        <section>
             <div class="conimg">
                 <h1 class="conh1">Contact </h1>
                <img src="/images/7.jpg" alt="my image" width="100%" height="65%">
            </div>
        
        </section>
        <section>
        <div>
           <h1 class="nexconh1">Contact Info</h1>
           <h2><i class='fas fa-map-marker-alt fa-beat-fade' style='font-size:36px'></i>Location</h2> 
           <p>209 E 56th St New York, NY 10022</p>
           <br>
           <h2><i class='fas fa-phone fa-beat-fade' style='font-size:36px'></i>Phone number</h2>
           <p>+1 236 7070 77</p>
           <br>
           <h2><i class='fas fa-location-arrow fa-beat-fade' style='font-size:36px'></i>Email address</h2>
           <p>info@example.com</p>
           
        </div>
        
        </section>
    </body>
    `)

};

module.exports = contact;