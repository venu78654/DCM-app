const six = (req,res) => {
    res.send(`
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
    <h1>Restorative solutions</h1>
    <h2>Restorative dentistry is vital for fixing all kinds of teeth damages and defects.

    </h2>
    <p>

        It bears a lot of similarities with both the preventive dental care and cosmetic dentistry.
        <br><br>
        Firstly in the way it deals with detecting any oral diseases. Such as Hepatitis; numbs, dental caries… It begins to offer solutions as soon as teeth get damaged in an aesthetically bad way.
        <br><br>
        Also, when it takes to repair or restore dentures, sealants or crowns the restorative dentistry comes to an aid.
        
    </p>
</section>
    <img src="/images/services/details/img/11.jpg"> 
    


</body>`
)
};


module.exports = six;