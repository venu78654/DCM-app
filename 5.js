const five = (req,res) => {
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
    <h1>Additional treatments</h1>
    <h2>When your oral health is concerned, solutions vary. There might be hundreds of different diseases, issues and treatments involved.
    </h2>
    <p>

        So to sum up everything besides the main dental services we provide, we pulled up this additional treatments list.
        <br><br>
        Just keep in mind, that there might be plenty of miscellaneous ways to approach your specific oral health case.
        <br><br>
        So starting with an x-ray, dental implants and non-conventional side medications – we’ve got it all here…
        
    </p>
</section>
    <img src="/images/services/details/img/12.jpg"> 
    


</body>`
    )
};


module.exports = five;