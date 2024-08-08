import { createSignal } from "solid-js";
import "../Css/Home1.css"; // Ensure this CSS file styles your new layout
import abiriRidesIcon from "../assets/local_taxi.png";
import massageIcon from "../assets/Massage.png";
import carRentalsIcon from "../assets/car_rental_new.png";
import funspacesIcon from "../assets/celebration.png";
import getAppsImage from "../assets/get_app.jpg";

function Home1() {
  // State for active tab in the "Make Money" and "Download Apps" sections
  const [activeTab, setActiveTab] = createSignal("Abiri Rides");
  const [activeAppTab, setActiveAppTab] = createSignal("Rides");
  const image =
    "https://s3-alpha-sig.figma.com/img/85e3/bbbe/fac083a7c44aaf45e9e3a887a311bf38?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAPef9wsahu4v2hw4~IbbDpmCEsfRPBfz23EJKsUx~U6XH7QfeARM5KRJuyJyIM7WIAC0bZS~a3xxG25R8WtvwoyHvSZXWeUdH8DSfOAoK-vvL4WTFSgNCElI~pI49utYSPslorS80~9zmGL0OgEmTUoGRDmkgRChsgUe8ou6XuThH8AyukyfYSXWL80NdqNc0ntGPUQHargFY1TMtqdkUmnJQeSwWRap-d290hqowUUs29diSNBfLmB~M-zINriGrti5Sq610mAb32KbKXYIoXycsQwGD1DAhD9d8eAMdgKD9igCO6gztVa2TwhBY02KaEOCPHZifc9ZRMJx2-j9A__";
  const getImageSrc = (tab) => {
    switch (tab) {
      case "Abiri Rides":
        return image;
      case "Massage":
        return "path/to/massage-image.jpg";
      case "Rentals":
        return "path/to/rentals-image.jpg";
      case "Funspaces":
        return "path/to/funspaces-image.jpg";
      default:
        return "path/to/default-image.jpg";
    }
  };

  return (
    <div class="home">
      <header>
        <div class="containerhead">
          <h1>Abiri Africa</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/about_abiri">About Us</a>
            <a href="/privacy_policy">Privacy Policy</a>
            <a href="/terms">Terms</a>
            <a href="mailto:abiriafrica@gmail.com">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section class="hero">
        <div class="">
          <h2>Request Affordable Rides</h2>
          <p>
            Request for a ride and get picked up by a driver near you in
            minutes.
          </p>
          <button onclick="window.location.href='https://play.google.com/store/apps/details?id=com.sanny_tech.carapp';">
            Get the App
          </button>
        </div>
      </section>

      {/* Make Money Section */}
      <section class="earn-money">
        <div class="containerdefault">
          <h2>Make money with Abiri Africa</h2>
          <div class="about-tabs">
            {["Abiri Rides", "Massage", "Rentals", "Funspaces"].map((tab) => (
              <button
                class={activeTab() === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
                aria-selected={activeTab() === tab}
              >
                {tab}
              </button>
            ))}
          </div>

          <div class="content-container">
            <div className="image-container">
              <img
                src={getImageSrc(activeTab())}
                alt={`Image for ${activeTab()} tab`}
              />
            </div>
            <div class="tab-content">
              {activeTab() === "Abiri Rides" && (
                <>
                  <h3>Drive and earn money</h3>
                  <p class="title">Subscription and not commission</p>
                  <p>
                    We only charge you a monthly fee and you can earn as much as
                    possible from each trip.
                  </p>
                  <p class="title">Use any vehicle of your choice</p>
                  <p>
                    You can use any means of transport to make successful rides
                    on our platform. Motorbikes, economy and Luxurious
                  </p>
                  <button onclick="window.location.href='https://play.google.com/store/apps/details?id=com.sanny_tech.carapp';">
                    Get the app
                  </button>
                </>
              )}
              {/* Add similar content for other tabs if needed */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services">
        <div className="container-services">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="card">
              <h3>
                Abiri Rides
                <img
                  src={abiriRidesIcon}
                  alt="Abiri Rides Icon"
                  className="icon"
                />
              </h3>
              <p>
                Request Abiri taxi from anywhere to a funspace and massage
                parlour
              </p>
            </div>
            <div className="card">
              <h3>
                Massage
                <img src={massageIcon} alt="Massage Icon" className="icon" />
              </h3>
              <p>Request for massage services at the comfort of your home</p>
            </div>
            <div className="card">
              <h3>
                Car Rentals
                <img
                  src={carRentalsIcon}
                  alt="Car Rentals Icon"
                  className="icon"
                />
              </h3>
              <p>
                Find any type of car and rent for your next trip or vacation
              </p>
            </div>
            <div className="card">
              <h3>
                Funspaces
                <img
                  src={funspacesIcon}
                  alt="Funspaces Icon"
                  className="icon"
                />
              </h3>
              <p>
                Find out funspaces near you that have been reviewed by others
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about">
        <div className="about-container">
          <h2>About us</h2>
          <div className="aboutcontent">
            <div className="image-container">
              <img src={image} alt="About Us Image" />
            </div>
            <div className="text">
              <p>
                Abiri Africa is a leading tech company dedicated to
                revolutionizing the way people access transportation services.
                Through our innovative Android app, we aim to provide convenient
                and reliable solutions for commuters worldwide.
              </p>
              <div className="stats">
                <p className="title">3K+ Customers</p>
                <p>Onboarded in the platform</p>
                <p className="title">500+ Drivers</p>
                <p>We have created employment for 500 drivers in Kenya</p>
                <p className="title">200+ Masseuse and Spa's</p>
                <p>
                  We have a pool of 200+ masseuse and Spa's that offer services
                </p>
                <p className="title">300+ Rental Cars</p>
                <p>About 300+ rental cars generate revenue from our solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Apps Section */}
      <section class="download-apps">
        <div class="download-apps">
          <h2>Download our Apps</h2>
          <div class="nav-tabs">
            {["Rides", "Service Provider"].map((tab) => (
              <button
                class={activeAppTab() === tab ? "active" : ""}
                onClick={() => setActiveAppTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div class="tab-content">
            {activeAppTab() === "Rides" && (
              <div class="content-card">
                <div class="content-text">
                  <h3>Get access to our services as a customer</h3>
                  <p>Download our Android app. iOS is coming soon.</p>
                  <button onclick="window.location.href='https://play.google.com/store/apps/details?id=com.sanny_tech.carapp';">
                    Get the app
                  </button>
                </div>
                <img src={getAppsImage} alt="App Image" class="content-image" />
              </div>
            )}
            {/* Add similar content for other tabs if needed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div class="container">
          <div class="company-info">
            <p class="company-name">Abiri Africa</p>
          </div>
          <div class="office-info">
            <p>Office location</p>
            <p class="office-location">
              Ngong Road, Nairobi, Mbaki House, Office 408
            </p>
          </div>
          <div class="useful-links">
            <p>Useful Links</p>
            <a href="/">Home</a>
            <a href="/about_abiri">About</a>
            <a href="/privacy_policy">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </div>
          <div class="contact">
            <p>Contact us</p>
            <div class="social-media">
              <a href="#" class="social-icon" style="color: black;">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#" class="social-icon" style="color: black;">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" class="social-icon" style="color: black;">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#" class="social-icon" style="color: black;">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>

            <div class="contact-numbers">
              <p>+254721220054</p>
              <p>+254728220045</p>
            </div>
          </div>
        </div>
        <p class="copyright">
          &copy; 2024 Copyright Abiri Africa. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home1;
