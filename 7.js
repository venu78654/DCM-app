const seven = (req,res) => {
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
      <h1>Cosmetic Solutions</h1>
      <h2>Cosmetic dental care is an essential part of our modern life.
  
      </h2>
      <p>
  
          It may take care of purely aesthetic concerns of the patient (teeth whitening, straightening; etc…). Also, it may involve fixing teeth that were mechanically damaged or chipped off.
          <br><br>
          Sometimes it involves Dental Filling and Bonding, which are quite simple dental procedures. Usually, they do not require numbing or any kind of anesthesia applied.
          <br><br>
          Just with the help of bonding and adhering materials, the damaged tooth area can be easily visually fixed.
          <br><br>        
          The same goes for other aesthetic and generally cosmetic dental procedures which we offer.
          
      </p>
  </section>
      <img src="/images/services/details/img/10.jpg"> 
      
  
  
  </body>`
  )
};


module.exports = seven;