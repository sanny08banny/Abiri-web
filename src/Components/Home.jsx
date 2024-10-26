import { createSignal , onMount } from "solid-js";
import "../Css/Home.css"; // Ensure this CSS file styles your new layout
import abiriRidesIcon from "../assets/local_taxi.png";
import massageIcon from "../assets/Massage.png";
import carRentalsIcon from "../assets/car_rental_new.png";
import funspacesIcon from "../assets/celebration.png";
import dropdownIcon from "../assets/dropdown.png";
import logoutIcon from "../assets/logout_icon.png";
import helpIcon from "../assets/help_icon.png";
import getAppsImage from "../assets/get_app.jpg";
import heroImage from "../assets/hero-image-root.jpg";
import { useNavigate } from "@solidjs/router";
import { loadUserFromStorage, userStore} from "../store/userStore";
function Home() {
  // State for active tab in the "Make Money" and "Download Apps" sections
  loadUserFromStorage
  const [activeTab, setActiveTab] = createSignal("Abiri Rides");
  const [activeAppTab, setActiveAppTab] = createSignal("Rides");
  const image = heroImage;
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
  const [pickup, setPickup] = createSignal("");
  const [destination, setDestination] = createSignal("");
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = createSignal(false);

  let pickupInput;
  let destinationInput;

  onMount(async () => {
    // Load the Places library
    await google.maps.importLibrary("places");

    // Initialize Google Places Autocomplete for the inputs
    const pickupAutocomplete = new google.maps.places.Autocomplete(pickupInput);
    const destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);

    pickupAutocomplete.addListener("place_changed", () => {
      const place = pickupAutocomplete.getPlace();
      setPickup(place.formatted_address || place.name);
    });

    destinationAutocomplete.addListener("place_changed", () => {
      const place = destinationAutocomplete.getPlace();
      setDestination(place.formatted_address || place.name);
    });
  });

  const handleRequestTaxi = () => {
    navigate(`/taxi?pickup=${encodeURIComponent(pickup())}&destination=${encodeURIComponent(destination())}`);
  };

const toggleMenu = () => {
  setShowMenu(!showMenu());
};

const logout = () => {
  // Logic for logging out the user
};

const openHelpOptions = () => {
  // Provide options for the user to contact support via phone, WhatsApp, or email
  const choice = prompt('Choose a help option: 1. Call, 2. WhatsApp, 3. Email');
  switch (choice) {
    case '1':
      window.location.href = 'tel:+1234567890'; // Phone number for support
      break;
    case '2':
      window.open('https://wa.me/1234567890', '_blank'); // WhatsApp message
      break;
    case '3':
      window.location.href = 'mailto:support@example.com'; // Email link
      break;
    default:
      alert('Invalid option');
  }
};



  return (
    <div class="home">
       <header>
        <div class="containerhead">
          <h1>Abiri Africa</h1>
          <div class="user-view" onClick={toggleMenu}>
  <span class="username">{userStore.user ? userStore.user.user_name : "Guest"}</span>
  <button class="end-button">
    <img src={dropdownIcon} alt="Dropdown Icon" class="dropdown-icon" />
  </button>

  {/* Dropdown menu */}
  {showMenu() && (
    <div class="dropdown-menu">
      <div class="menu-item" onClick={logout}>
        <img src="/assets/logout_icon.png" alt="Logout" class="menu-icon" /> Logout
      </div>
      <div class="menu-item" onClick={openHelpOptions}>
        <img src={helpIcon} alt="Help" class="menu-icon" /> Help
      </div>
    </div>
  )}
</div>


        </div>
      </header>
      {/* Hero Section */}
      <section class="hero">
        <div class="hero-content">
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

      <section class="request-taxi">
      <h2>Request a Taxi</h2>
      <div class="input-group">
        <label for="pickup">Pickup Location</label>
        <input
          id="pickup"
          type="text"
          ref={pickupInput}
          value={pickup()}
          onInput={(e) => setPickup(e.target.value)}
          placeholder="Enter pickup location"
        />
      </div>
      <div class="input-group">
        <label for="destination">Destination</label>
        <input
          id="destination"
          type="text"
          ref={destinationInput}
          value={destination()}
          onInput={(e) => setDestination(e.target.value)}
          placeholder="Enter destination"
        />
      </div>
      <button onClick={handleRequestTaxi}>Request Taxi</button>
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
      <section class="services">
        <div class="container_services">
          <h2>Our Services</h2>
          <div class="service-cards">
            <div class="card">
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
            <div class="card">
              <h3>
                Massage
                <img src={massageIcon} alt="Massage Icon" className="icon" />
              </h3>
              <p>Request for massage services at the comfort of your home</p>
            </div>
            <div class="card">
              <h3>
                Car Rentals
                <img src={carRentalsIcon} alt="Car Rentals Icon" class="icon" />
              </h3>
              <p>
                Find any type of car and rent for your next trip or vacation
              </p>
            </div>
            <div class="card">
              <h3>
                Funspaces
                <img src={funspacesIcon} alt="Funspaces Icon" class="icon" />
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
        <div className="about_container">
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
        <div class="download-apps-container">
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
          <div class="tab-content1">
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
        <div class="footer_container">
          <div class="company-info">
            <p class="company-name">Abiri Africa</p>
          </div>
          <div class="office-info">
            <p>Office location</p>
            <p class="office-location">Mirage Towers, Westlands</p>
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
              <a
                href="https://www.tiktok.com/@abiriafrica?_t=8oj0kiDnKh4&_r=1"
                class="social-icon"
                style="color: black;"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/abiriafrica?igsh=emN0c2RsZ290bXhl"
                class="social-icon"
                style="color: black;"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://x.com/AbiriAfrica?t=CkNXkXrr3NyklDs85JlUGQ&s=09"
                class="social-icon"
                style="color: black;"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#" class="social-icon" style="color: black;">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              {/* https://www.tiktok.com/@abiriafrica?_t=8oj0kiDnKh4&_r=1 */}
            </div>

            <div class="contact-numbers">
              <p>+254721220054</p>
              {/* <p>+254728220045</p> */}
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

export default Home;
