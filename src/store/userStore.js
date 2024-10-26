import { createStore } from "solid-js/store";

// Initialize the store with null user
export const [userStore, setUserStore] = createStore({
  user: null
});

// Helper function to save user globally and in localStorage
export function saveUser(user) {
  setUserStore("user", user);
  localStorage.setItem("user", JSON.stringify(user));
}

// Helper function to remove user
export function clearUser() {
  setUserStore("user", null);
  localStorage.removeItem("user");
}

export function loadUserFromStorage() {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        // Parse the user data from localStorage
        const userData = JSON.parse(savedUser);
        console.log("User loaded from localStorage:", userData);
        setUserStore("user", userData);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        // If there's an error parsing the data, set user to null
        setUserStore("user", null);
      }
    } else {
      console.log("No user found in localStorage.");
      // Set user to null if no data was found
      setUserStore("user", null);
    }
  }
  