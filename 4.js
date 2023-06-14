const four = (req,res) => {
    res.send( `
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <link rel="stylesheet" href="/style.css">
        <link rel="stylesheet" href="/images/services/details/details.css">
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
        <section>
        <h1>Orthodontics</h1>
        <h2>Positioning is everything. Especially, when teeth and jaws are concerned.
        </h2>
        <p>
    
            Misalignment of any of these two can lead to serious oral health consequences and difficulties. It can easily hazard your daily normal life.
            <br><br>
            The orthodontics branch of dental medicine is here to help you! With things like braces, dental implants and other treatments. It will make your smile well proportioned, symmetric and naturally beautiful again!
            
        </p>
    </section>
        <img src="/images/services/details/img/13.jpg"> 
        
    
    
    </body>`
    )
};


module.exports = four;