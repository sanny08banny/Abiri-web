import { createSignal, onMount } from 'solid-js';
import "../Css/TaxiComponent.css"; 

const TaxiComponent = () => {
  const [pickup, setPickup] = createSignal("");
  const [destination, setDestination] = createSignal("");
  const [map, setMap] = createSignal(null);
  const [marker, setMarker] = createSignal(null);

  // Initialize the map and marker for user's current position
  onMount(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const currentPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          // Create the map and center it at the current location
          const mapInstance = new google.maps.Map(document.getElementById('map'), {
            center: currentPos,
            zoom: 15,
          });
          setMap(mapInstance);

          // Create a marker at the current location
          const markerInstance = new google.maps.Marker({
            position: currentPos,
            map: mapInstance,
          });
          setMarker(markerInstance);

          // Geocode the current location and set it as the pickup location
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ location: currentPos }, (results, status) => {
            if (status === 'OK' && results[0]) {
              setPickup(results[0].formatted_address);
            }
          });
        },
        () => alert('Could not get your location.')
      );
    }
  });

  // Function to handle input changes
  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  return (
    <div class="taxi-container">
  <div class="inputs">
    <div class="input-group">
      <label for="pickup">Pickup Location</label>
      <input id="pickup" type="text" value={pickup()} readonly />
    </div>
    <div class="input-group">
      <label for="destination">Destination</label>
      <input id="destination" type="text" value={destination()} onInput={handleDestinationChange} />
    </div>
  </div>
  <div id="map" class="map"></div>
</div>

  );
};

export default TaxiComponent;
