

const profile =(req,res) => {
    res.send(`<head>
    <title>HOME</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
    <header class="head" id="head">
  
          
    <a herf="index.html" class="logo"> <i class="fas fa-tooth fa-fade" style="color: #0000ff;"></i>Dental Clinic</a>
    <nav class="navbar">
        <a href="/">Home</a>
        <a href="/services">Our Services</a>
        <a href="/appointment">Make An Appointment</a>
        <a href="/contact">Contact Us</a>
        <a href="/" id="">Profile</a>
    </nav>
  </header>  
   
  <div class="sec1">
        <img class="topimg" src="/images/4.jpg">
        <p class="sen">There is nothing more beautiful than a healthy smile</p>
        <h2 class="topcon"><i class='fas fa-phone fa-fade' style='font-size:46px'></i>Contact</h2>
        <p class="topcon1"><b>(+1 236 7070 77)</b></p>
  </div>
  
  <div class="sec2">
        <img src="/images/5.jpg" class="neximg">
        <div class="nextext">
             <h1>Welcome to BeDentist</h1>
             <h3>Dental clinic BeDentist welcomes you!</h3>
            <p>
  
            We're glad you hand your dental health concerns to our skilled hands. We’ll make sure to deliver the best possible healthcare to all our patients! Of course, we always complement our main services with a customer service oriented approach.
            <br><br>
            We sincerely believe that visiting a dentist shouldn’t be a frightening or stressful experience! We provide an equally comfortable experience of relaxation for all our young and adult customers! Also we implement a lot of pain management and anesthesia options.
            <b>Everything we do is aimed at making you feel comfortable, while we take care of your oral healthcare!</b>
            <br><br>
            It includes both local anesthesia for mouth-numbing as well as a sedative anesthesia. Altogether, this helps relief any pain which might occur in the process of treatment. All in all, we’ve got it all under control at our BeDentist dental health clinic.
            <br>
            We invite you to explore the information about our dental office on our website! Feel free to read our terms and conditions and all the additional info we have posted here.
            <br><br>
            Once our customer, you will be leaving our dental clinic with a bright, wide smile!
            </p>
        </div>           
  </div>
  <br><br><br><hr>
  <div class="nexserv">
    <h1>Our services</h1>
    <div class="serv">
        <div class="box" style="margin-left: 60px;">
            <a href="/details/8">
                <img src="/images/services/1.jpg">
                <p class="boxtext">General and preventive care</p>
                <button class="btn" href="./services/details/8.html">Read more</button>
            </a>
            
        </div>
        <div class="box">
            <a href="/details/7">
               <img src="/images/services/2.jpg">
               <p class="boxtext">Cosmetic solutions</p>
               <button class="btn" href="./services/details/7.html">Read more</button>
            </a> 
        </div>
        <div class="box">
            <a href="/details/6">
              <img src="/images/services/3.jpg">
              <p class="boxtext">Restorative solutions</p>
              <button class="btn" href="./services/details/6.html">Read more</button>
            </a>  
        </div>
        <div class="box">
            <a href="/details/5"> 
             <img src="/images/services/4.jpg">
             <p class="boxtext">Additional treatments</p>
             <button class="btn" href="./services/details/5.html">Read more</button>
            </a> 
        </div>
       <div class="allserv">
          <a href="/services">View all services</a>
       </div>    
    </div>
    <div class="video">
        <center>
            <video autoplay loop muted width="100%">
                <source src="/video/Dental clinic Commercial video.mp4" type="video/mp4" />
            </video> 
        </center>
    </div>
  <footer class="foot">
    <h1 class="footh1">Contact us</h1>
    <div class="contact">
        <h2><i class='fas fa-map-marker-alt fa-fade' style='font-size:36px'></i>Location</h2> 
       <p>209 E 56th St New York, NY 10022</p>
       
       <h2><i class='fas fa-phone fa-fade' style='font-size:36px'></i>Phone number</h2>
       <p>+1 236 7070 77</p>
       
       <h2><i class='fas fa-location-arrow fa-fade' style='font-size:36px'></i>Email address</h2>
       <p>info@example.com</p>
    </div>
  
    
  </footer>
   
  <a href="#head" id="goToTopButtton"><i class="fa-solid fa-arrow-up fa-fade" style="color: #47ffea;"></i></a>  
  
  <script>
    $(document).ready(function() {
      // Show/hide the button based on scroll position
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('#goToTopButtton').addClass('show');
        } else {
          $('#goToTopButtton').removeClass('show');
        }
      });
  
      // Smooth scroll to the top when the button is clicked
      $('#goToTopButton').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
      });
    });
  </script>
  
  
  </body>
    `)
  }


  module.exports = profile;