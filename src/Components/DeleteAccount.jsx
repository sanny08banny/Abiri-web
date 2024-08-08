// DeleteAccount.jsx

import { createSignal } from 'solid-js';
import '../Css/deleteAccount.css'; // Import the CSS file

const DeleteAccount = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [message, setMessage] = createSignal('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://3.83.176.95:4000/delete_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email(),
          password: password()
        }),
      });

      if (response.ok) {
        setMessage('Account deleted successfully.');
      } else {
        setMessage('Failed to delete account. Please check your credentials.');
      }
    } catch (error) {
      setMessage('An error occurred while processing your request. Please try again later.');
    }
  };

  return (
    <div class="delete-account-container">
      <h2>Delete Account</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" value={email()} onInput={(e) => setEmail(e.target.value)} required />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" value={password()} onInput={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Delete Account</button>
        {message() && <p>{message()}</p>}
      </form>
    </div>
  );
};

export default DeleteAccount;
