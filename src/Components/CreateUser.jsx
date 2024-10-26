import { createSignal } from "solid-js";
import { saveUser } from "../store/userStore";
import { useNavigate } from "@solidjs/router";

function CreateUser() {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [name, setName] = createSignal("");
  const [tel, setTel] = createSignal("");
  const navigate = useNavigate();

  const handleCreateUser = async (e) => {
    e.preventDefault();

    const newUser = {
      email: email(),
      password: password(),
      name: name(),
      tel: tel(),
      notification_id: "some-notification-id" // Add logic to fetch actual notification ID if needed
    };

    // Call API to create user (replace with your actual backend API)
    try {
      const response = await fetch("https://abiriapp.com/v1/user/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      });

      if (response.ok) {
        const user = await response.json();
        saveUser(user); // Save user globally and in localStorage
        navigate("/", { replace: true }); // Redirect to home page
      } else {
        // Handle error, e.g. show a message
        alert("Failed to create user");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form onSubmit={handleCreateUser}>
      <label>Email:</label>
      <input type="email" value={email()} onInput={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password()} onInput={(e) => setPassword(e.target.value)} />

      <label>Name:</label>
      <input type="text" value={name()} onInput={(e) => setName(e.target.value)} />

      <label>Telephone:</label>
      <input type="tel" value={tel()} onInput={(e) => setTel(e.target.value)} />

      <button type="submit">Create Account</button>
    </form>
  );
}

export default CreateUser;
