import { createSignal } from "solid-js";
import { db } from "../store/firebase"; // Firestore only (no storage)
import { collection, addDoc } from "firebase/firestore";
import "../Css/CarRentalForm.css"; // Import CSS file

const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY; // Load from env
const IMGBB_UPLOAD_URL = "https://api.imgbb.com/1/upload";

function CarRentalForm() {
  const [name, setName] = createSignal("");
  const [price, setPrice] = createSignal("");
  const [image, setImage] = createSignal(null);
  const [loading, setLoading] = createSignal(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !["image/jpeg", "image/png"].includes(file.type)) {
      alert("Only JPEG and PNG images are allowed.");
      return;
    }
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name() || !price() || !image()) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);

    try {
      // Convert image to Base64
      const base64Image = await toBase64(image());

      // Upload to ImgBB
      const formData = new FormData();
      formData.append("key", IMGBB_API_KEY);
      formData.append("image", base64Image.split(",")[1]); // Remove base64 header

      const response = await fetch(IMGBB_UPLOAD_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok || !data.data.url) {
        throw new Error("Image upload failed.");
      }

      // Store ImgBB image URL in Firestore
      await addDoc(collection(db, "cars"), {
        name: name(),
        price: price(),
        imageUrl: data.data.url, // Use ImgBB URL
      });

      alert("Car added successfully!");
      setName("");
      setPrice("");
      setImage(null);
    } catch (error) {
      console.error("Error adding car:", error);
      alert("Failed to add car. Please try again.");
    }
    setLoading(false);
  };

  // Convert file to Base64
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <form onSubmit={handleSubmit} class="car-rental-form">
      <label>Car Name:</label>
      <input type="text" value={name()} onChange={(e) => setName(e.target.value)} required />

      <label>Price per Day ($):</label>
      <input type="number" value={price()} onChange={(e) => setPrice(e.target.value)} required />

      <label>Car Image:</label>
      <input type="file" accept="image/*" onChange={handleFileChange} required />

      <button type="submit" disabled={loading()}>
        {loading() ? "Uploading..." : "Add Car"}
      </button>
    </form>
  );
}

export default CarRentalForm;

