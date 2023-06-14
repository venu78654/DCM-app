const one = (req,res) => {
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
    <h1>Pediatric dentistry</h1>
    <h2>A period of life from birth to the adolescence is probably the most important one with regard to a person’s health…
    </h2>
    <p>

        This is a period when kids lose baby teeth. This is a period of life when oral hygiene may be breached by a child and cause an infection, disease or simply dental caries.
        <br><br>
        Also, this is the critical time to implement any cosmetic, restorative or straightening decisions early on. With our welcoming atmosphere and our friendly team of professionals, your kid will love sitting in a dentist’s chair for once!
        
    </p>
</section>
    <img src="/images/services/details/img/9.jpg"> 
    


</body>`
)
};


module.exports = one;