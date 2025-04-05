import { createResource } from "solid-js";
import { db } from "../store/firebase";
import { collection, getDocs } from "firebase/firestore";
import "../Css/RentalPreview.css"; // Import CSS

const fetchRentals = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "cars"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })).slice(0, 5); // Fetch only 5 rentals
  } catch (error) {
    console.error("Error fetching rentals:", error);
    return [];
  }
};

const RentalPreview = () => {
  const [rentals] = createResource(fetchRentals);

  let scrollContainer; // Ref for scrolling

  // Function to handle horizontal scrolling
  const scroll = (direction) => {
    if (scrollContainer) {
      const scrollAmount = 300; // Pixels to scroll
      scrollContainer.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div class="preview-container">
      <h2 class="preview-title">Featured Rentals</h2>

      <button class="scroll-btn left" onClick={() => scroll(-1)}>‹</button>
      
      <div class="scroll-container" ref={scrollContainer}>
        {rentals()?.map((car) => (
          <div key={car.id} class="rental-card">
            <img src={car.imageUrl} alt={car.name} class="rental-image" />
            <h3 class="rental-name">{car.name}</h3>
            <p class="rental-price">${car.price}/day</p>
          </div>
        ))}
      </div>

      <button class="scroll-btn right" onClick={() => scroll(1)}>›</button>
    </div>
  );
};

export default RentalPreview;
