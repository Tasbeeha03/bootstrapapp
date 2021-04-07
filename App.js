import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import aboutimg from './images/about-img.jpg';
import fea1 from './images/features-1.png';
import fea2 from './images/features-2.png';
import fea3 from './images/features-3.png';
import fea4 from './images/features-4.png';
import bed from './images/bed.jpg';
import kitchen from './images/kitchen.jpg';
import lamp from './images/lamp.jpg';
import lt from './images/lt.jpg';
import sofa from './images/sofa.jpg';
import sofatable from './images/sofatable.jpg';

function App() {
  return (
    <>
    <div>
    <header id="header" class="fixed-top">
    <div class="container d-flex">

      <div class="logo mr-auto">
        <h1 class="text-light"><a href="index.html">Maxim</a></h1>
       
    
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="index.html">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>

<section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="container text-center text-md-left" data-aos="fade-up">
      <h1>Welcome to Maxim</h1>
      <h2>We are team of talented designers selling best furniture</h2>
      <a href="#about" className="btn-get-started scrollto">Get Started</a>
    </div>
  </section>


  <main id="main">


<section id="about" className="about">
  <div className="container">

    <div className="row">
      <div className="col-xl-6 col-lg-7" data-aos="fade-right">
        <img src={aboutimg} className="img-fluid" alt=""></img>
      </div>
      <div className="col-xl-6 col-lg-5 pt-5 pt-lg-0">
        <h3 data-aos="fade-up">About us</h3>
        <p data-aos="fade-up">
         Maxim is the best selling furniture website in PAKISTAN. We export our furniture outside state. 
        </p>
        <div className="icon-box" data-aos="fade-up">
          <i className="bx bx-receipt"></i>
          <h4>Online Furniture and Decor Shopping Store</h4>
          <p>The vital part of every home is furniture, and it’s the first thing to be considered while
             planning a home decor. Your home furniture has to be presentable and classy, as it depicts
              your values and mood. It also represents the first impression of your home, and we are sure
               that you want it to look luxurious and stylish. Always choose to buy furniture online in Pakistan
                from reputed online furniture and decor store. UMaxim makes online furniture shopping.</p>
        </div>


        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
          <i className="bx bx-cube-alt"></i>
          <h4>High-End Modern Furniture At Your Doorstep</h4>
          <p>The world is changing so are your difficulties to find your desired furniture, but you
             can now get high- end modern furniture delivered at your doorstep. Whether it is sculptural, 
             standalone or a geometric furnishing accessory or contemporary knoll or Kartell designed furniture
              you are looking for; Maxim provides excellent material home decor products.
               Home Tour is in Sialkot.</p>
        </div>

      </div>
    </div>

  </div>
</section>

<section id="steps" className="steps section-bg">
      <div className="container">

        <div className="row no-gutters">

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-in">
            <span>01</span>
            <h4>Bed</h4>
           <img src={bed} style={{width:"100%" , height:"100"}}></img>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="100">
            <span>02</span>
            <h4>Couch Table</h4>
           <img src={sofatable} style={{width:"100%" }}></img>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="200">
            <span>03</span>
            <h4>Kitchen </h4>
            <img src={kitchen} style={{width:"100%"}}></img>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="300">
            <span>04</span>
            <h4>Table Lamp</h4>
           <img src={lt} style={{width:"100%"}}></img>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="400">
            <span>05</span>
            <h4>Lamp</h4>
           <img src={lamp} style={{width:"100%"}}></img>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="500">
            <span>06</span>
            <h4>Couch</h4>
            <img src={sofa} style={{width:"100%"}}></img>
          </div>

        </div>

      </div>
    </section>


    <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Maxim provides the best services for their customers. Customers who buy their furniture or Home decor product from
             Maxim never came back Disappointed. Customer Satisfication is the first priority of Maxim. The services Maxixm provides include
             Bed, Bed Sheets, AC, Sofa, Sofa table, Kitchen utensils, Chairs, Lamp and many more products.</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
            <div className="icon-box icon-box-pink">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"><a href=""></a>Bed</h4>
              <p className="description"> 
              Most modern beds consist of a soft, cushioned mattress on a bed frame,
               the mattress resting either on a solid base, often wood slats, or a sprung base. Beds are available in many sizes, 
               ranging from infant-sized bassinets and cribs, to small beds for a single person or adult, to large queen and 
               king-size beds designed for two people.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
            <div className="icon-box icon-box-cyan">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="">Couch</a></h4>
              <p className="description">The loveseat is designed for seating two people, while the sofa has more than two cushion seats. </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box icon-box-green">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="">Lamp</a></h4>
              <p className="description">There are two main types of light bulb cap: Edison screw (ES) and bayonet (BC).
               The most common sizes are: E27 or ES or 'standard screw', where the diameter of the light bulb cap is 27mm.
                E14 or SES or 'small Edison screw', where the diameter of light bulb cap is 14mm.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box icon-box-blue">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="">Chairs</a></h4>
              <p className="description"> Its primary features are two pieces of a durable material, attached as back and seat to 
              one another at a 90° or slightly greater angle, with usually the four corners of the horizontal seat attached in turn
               to four legs—or other parts of the seat's underside attached to three legs or to a shaft about which a four-arm turnstile
                on rollers can turn—strong enough to support the weight of a person who sits on the seat and leans against the vertical back .</p>
            </div>
          </div>

        </div>

      </div>
    </section>


    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>If your are interested in buying our furniture or any furniture product from Maxim then feel free to contact us through phone no or email
         and if you want to visit our store then you can come at the given address/Location.</p>
        </div>

        <div className="row no-gutters justify-content-center" data-aos="fade-up">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email mt-4">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>maxim@gmail.com</p>
              </div>

              <div className="phone mt-4">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div className="col-lg-5 d-flex align-items-stretch">
            <iframe style={{
              border:"0",
               width: "100%",
                height: "270px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
          </div>

        </div>

        <div className="row mt-5 justify-content-center" data-aos="fade-up">
          <div className="col-lg-10">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    </main>

    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>Maxim</h3>
              <p>
                A108 Adam Street <br></br>
                NY 535022, USA<br></br><br></br>
                <strong>Phone:</strong> +1 5589 55488 55<br></br>
                <strong>Email:</strong> info@example.com<br></br>
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subcribe!</p>
            <form action="" method="post">
              <input type="email" name="email"></input>
                <input type="submit" value="Subscribe"></input>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Maxim</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
    </div>
    </>
  );
}

export default App;
