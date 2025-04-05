import { createSignal, createResource } from "solid-js";
import { db } from "../store/firebase";
import { collection, getDocs } from "firebase/firestore";

const fetchRentals = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "cars"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching rentals:", error);
    return [];
  }
};

const RentalList = () => {
  const [rentals, { refetch }] = createResource(fetchRentals);
  const [loading, setLoading] = createSignal(true);

  rentals.latest && setLoading(false);

  return (
    <div class="p-4">
      <h2 class="text-xl font-bold mb-4">Available Rentals</h2>

      {loading() && <p>Loading rentals...</p>}

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rentals()?.map((car) => (
          <div key={car.id} class="border p-4 rounded shadow">
            <img src={car.imageUrl} alt={car.name} class="w-full h-40 object-cover rounded mb-2" />
            <h3 class="text-lg font-semibold">{car.name}</h3>
            <p class="text-gray-700">Price: ${car.price}/day</p>
          </div>
        ))}
      </div>

      <button onClick={refetch} class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Refresh List
      </button>
    </div>
  );
};

export default RentalList;
