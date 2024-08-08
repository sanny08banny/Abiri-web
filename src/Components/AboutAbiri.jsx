import { createSignal } from "solid-js";
import "../Css/AboutAbiri.css";

function AboutAbiri() {
  const [info] = createSignal({
    slogan: "100% Fare is Fair - Riders Pay Less, Drivers Earn More",
    mission: "To make transportation more accessible and equitable for everyone. Our mission is to provide drivers with equitable pay and riders with affordable, reliable transportation.",
    about: "Take a look under the hood of Kenya’s largest and safest car-sharing marketplace. At Abiri, we're committed to making transportation more accessible and equitable for everyone. We are passionate about making a difference in the lives of both drivers and riders. After listening and documenting hundreds of conversations with riders and the reasons behind why people become drivers; Supporting families, sending money back home, and putting kids through college and university, we knew that something had to be done to provide a better experience for everyone, and we did it.",
    phases: [
      {
        title: "Phase 1",
        description: "Offer On-demand Rides (taxi service and Delivery) through the Abiri Africa app. Build the community, Our First phase is to Promote our membership model to existing rideshare drivers to demonstrate that we effectively increase the pay for drivers and lower the cost of service for customers. Once we Make sure the drivers are happy and our customers are satisfied, we move on to phase 2."
      },
      {
        title: "Phase 2",
        description: "Revolutionize the in-ride experience with an approach focused on hospitality making Abiri the best experience in On-demand Private Transportation/Car rental."
      },
      {
        title: "Phase 3",
        description: "Add other types of services to the platform. Those services include Fun Spaces and Massage services. Fun Spaces, will be offering options for recreational places for both families and adults. Fun Spaces will include information on prices at different recreational spaces, photos of the spaces, Abiri taxi estimates to/from the fun space of your choice. Massage Services, customers will be able to request massage services from our well-vetted and professional service providers. Customers will be able to book the service on demand on the app."
      },
      {
        title: "Phase 4",
        description: "Add new technologies to our platform that elevate Abiri beyond the ranks of simply a car-sharing company."
      }
    ],
    future: "Abiri is Kenya’s largest and safest car-sharing marketplace where you can hail a ride or book any car you want, for whatever the occasion, from a vibrant community of trusted drivers and hosts across Kenya. Whether you're flying in from afar or looking for a taxi or a car in your neighborhood, searching for a rugged truck or something smooth and swanky, guests can take the wheel of the perfect car for any occasion, while drivers and hosts can take the wheel of their future by building an accessible, flexible, and scalable car sharing business from the ground up."
  });

  return (
    <div class="about-abiri">
      <h1>{info().slogan}</h1>
      <p>{info().mission}</p>
      <section>
        <h2>About Us</h2>
        <p>{info().about}</p>
      </section>
      <section>
        <h2>The Road Map</h2>
        {info().phases.map(phase => (
          <div class="phase" key={phase.title}>
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Future Vision</h2>
        <p>{info().future}</p>
      </section>
    </div>
  );
}

export default AboutAbiri;
