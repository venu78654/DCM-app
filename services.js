const express = require('express')
const app = express()



const services = (req,res) => {
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
        <h1>Our dental clinic’s team provides many kinds of dentistry services such as:</h1>
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
            <div class="box" style="margin-left: 60px;">
            <a href="/details/4">
                <img src="/images/services/5.jpg">
                <p class="boxtext">Orthodontics</p>
                <button class="btn" href="./services/details/4.html">Read more</button>
            </a>
            
            </div>
            <div class="box">
            <a href="/details/3">
                <img src="/images/services/6.jpg">
                <p class="boxtext">Dentures & denture repair</p>
                <button class="btn" href="./services/details/3.html">Read more</button>
            </a>
            
            </div>
            <div class="box">
            <a href="/details/2">
                <img src="/images/services/7.jpg">
                <p class="boxtext">Diagnostics</p>
                <button class="btn" href="./services/details/2.html">Read more</button>
            </a>
            
            </div>
            <div class="box">
            <a href="/details/1">
                <img src="/images/services/8.jpg">
                <p class="boxtext">Pediatric dentistry</p>
                <button class="btn" href="./services/details/1.html">Read more</button>
            </a>
            
            <div>
        
        </div>
  
    </body>
    `)
};


module.exports = services;
//Services








