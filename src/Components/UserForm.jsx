import { createSignal } from "solid-js";

function UserForm({ endpoint }) {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [name, setName] = createSignal("");
  const [tel, setTel] = createSignal("");
  const [notificationId, setNotificationId] = createSignal("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email: email(),
      password: password(),
      name: name(),
      tel: tel(),
      notification_id: notificationId(),
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        // Handle successful response
      } else {
        console.error("Error:", response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email()} onInput={(e) => setEmail(e.target.value)} required />

      <label>Password:</label>
      <input type="password" value={password()} onInput={(e) => setPassword(e.target.value)} required />

      <label>Name:</label>
      <input type="text" value={name()} onInput={(e) => setName(e.target.value)} required />

      <label>Tel:</label>
      <input type="tel" value={tel()} onInput={(e) => setTel(e.target.value)} required />

      <label>Notification ID:</label>
      <input type="text" value={notificationId()} onInput={(e) => setNotificationId(e.target.value)} required />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
