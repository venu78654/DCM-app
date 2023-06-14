const three = (req,res) => {
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
      <h1>Dentures & denture repair</h1>
      <h2>Dentures and crowns help you when your teeth problems get out of hand.
      </h2>
      <p>
  
          For example in case of cracking, chipping or losing your teeth due to a mechanical injury or an accident.
          <br><br>
          The dentures secure your artificial teeth and keep them in place, so to say. Installing dentures lets you live a normal life again and chew that apple up! Also, besides installing new dentures, we offer dentures repair and cleaning services.
          
      </p>
  </section>
      <img src="/images/services/details/img/14.jpg"> 
      
  
  
  </body>`
  )
};


module.exports = three;