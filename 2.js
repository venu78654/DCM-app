const two = (req,res) => {
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
    <h1>Oral health diagnostics</h1>
    <h2>What it takes to keep your teeth always healthy and your smile always bright?
    </h2>
    <p>
        That’s right, a regular assessment of dental caries lesions, plaque, calculus, and staining!
        <br><br>
        That is why we recommend all our customers a regular, quarterly visit to our dentists. Such a checkup will ensure that any problem will be spotted on time and there will be an option to easily get it fixed. Also, oral health diagnostics is a built-in part of all our appointments. Especially when there’s any next procedure to follow.
        
    </p>
</section>
    <img src="/images/services/details/img/15.jpg"> 
    


</body>`
)
};


module.exports = two;