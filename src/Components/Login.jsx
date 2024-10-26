import { createSignal, onCleanup } from "solid-js";
import { saveUser } from "../store/userStore";
import { useNavigate } from "@solidjs/router";
import "../Css/Login.css"; // Ensure to create and link a CSS file
import naiImage from "../assets/nairobi-unsplash.jpg"
import taxiImage from "../assets/taxi_eg-unsplash.jpg"
import rentalImage from "../assets/car_rent_anim.jpg"

function Login() {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const navigate = useNavigate();

  // Array of images and associated button colors
  const images = [
    { url: naiImage, color: "#ffa500" }, // Orange for example
    { url: rentalImage, color: "#ff5733" }, // Another color
    { url: taxiImage, color: "#33aaff" }  // Blue example
  ];

  const [currentIndex, setCurrentIndex] = createSignal(0);

  // Change image every 5 seconds
  const intervalId = setInterval(() => {
    setCurrentIndex((currentIndex() + 1) % images.length);
  }, 15000);

  // Cleanup the interval when the component unmounts
  onCleanup(() => clearInterval(intervalId));

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = { email: email(), password: password() };

    try {
      const response = await fetch("https://abiriapp.com/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const user = await response.json();
        saveUser(user);
        navigate("/", { replace: true });
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div class="login-container">
      <div class="login-image">
        <img
          src={images[currentIndex()].url}
          alt="Slideshow Image"
          class="slideshow-image"
        />
      </div>
      <div class="login-form">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div class="input-group">
            <label>Username</label>
            <input
              type="email"
              value={email()}
              onInput={(e) => setEmail(e.target.value)}
              placeholder="Username"
            />
          </div>

          <div class="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password()}
              onInput={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          {/* Dynamic button color */}
          <button type="submit" class="login-button" style={{ background: images[currentIndex()].color }}>
            Sign In
          </button>

          <div class="form-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" class="forgot-password">Forgot Password?</a>
          </div>
        </form>
        <div class="signup">
          <p>Not a member? <a href="#">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;

