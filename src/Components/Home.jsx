import { createSignal } from "solid-js";
import "../Css/Home.css";

function Home() {
  return (
    <div>
      <div class="header">
        <a href="#" class="logo">
          Abiri
        </a>
        <nav class="nav-items">
          <a href="/">Home</a>
          <a href="/about_abiri">About</a>
          <a href="/privacy_policy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="mailto:abiriafrica@gmail.com">Contact</a>
        </nav>
      </div>
      <div>
        <div class="intro">
          <h1>100% Fare is Fair Riders Pay Less, Drivers Earn More</h1>
          <p>Your ultimate travel companion.</p>
          <button>Learn More</button>
        </div>
        <div class="achievements">
          <div class="work">
            <i class="fas fa-taxi"></i>
            <p class="work-heading">Taxi Hailing</p>
            <p class="work-text">
              We provide seamless taxi hailing services through our Android app,
              ensuring quick and reliable pickups for our users.
            </p>
          </div>
          <div class="work">
            <i class="fas fa-car"></i>
            <p class="work-heading">Car Renting</p>
            <p class="work-text">
              Our Android app offers hassle-free car renting experiences,
              allowing users to browse, book, and manage rentals with ease.
            </p>
          </div>
          <div class="work">
            <i class="fas fa-ellipsis-h"></i>
            <p class="work-heading">Others</p>
            <p class="work-text">
              Explore our other services seamlessly integrated into our Android
              app, providing smooth and efficient experiences for all our users.
            </p>
          </div>
        </div>
        <div class="about-us">
          <div class="about-us-text">
            <h2>About Our Company</h2>
            <p>
              We are a leading tech company dedicated to revolutionizing the way
              people access transportation services. Through our innovative
              Android app, we aim to provide convenient and reliable solutions
              for commuters worldwide.
            </p>
            <p>
              At our core, we believe in leveraging technology to enhance
              everyday experiences. Our team of passionate developers is
              committed to delivering cutting-edge solutions that prioritize
              user satisfaction and safety.
            </p>
            <p>
              With a focus on efficiency and customer-centricity, we strive to
              set new standards in the transportation industry. Join us on our
              journey as we continue to redefine mobility for the digital age.
            </p>
          </div>
          <div class="background-image" />
          <div class="download-app">
            <h2>Download Our Android App</h2>
            <a
              href="https://play.google.com/store/apps/details?id=com.yourpackagename"
              target="_blank"
            >
              <img
                src="https://th.bing.com/th/id/OIP.NXcs4eJRZO2uZBw_-LLBkgHaDz?rs=1&pid=ImgDetMain"
                alt="Download from Google Play Store"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="copy">&copy; 2024 Developer</div>
        <div class="bottom-links">
          <div class="links">
            <span>More Info</span>
            <a href="/">Home</a>
            <a href="/about_abiri">About</a>
            <a href="/privacy_policy">Privacy Policy</a>{" "}
            {/* Added Privacy Policy link */}
            <a href="mailto:contact@example.com">Contact</a>{" "}
            {/* Added Contact email link */}
          </div>
          <div class="links">
            <span>Social Links</span>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
