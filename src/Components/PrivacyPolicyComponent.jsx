import { createSignal } from "solid-js";
import  "../Css/PrivacyPolicy.css";

function PrivacyPolicyContent() {
  return (
    <div class="containerprivacy">
      <h1 class="heading">Privacy Policy</h1>
      <p class="paragraph">
        This Privacy Policy outlines how Abiri Africa collects, uses, and
        safeguards your personal information when you use our Android
        application. We are committed to protecting your privacy and ensuring
        the security of your data.
      </p>
      <h2 class="sub-heading">1. Information We Collect</h2>
      <p class="paragraph">
        When you use the Abiri Africa app, we may collect the following types
        of information:
      </p>
      <ul class="list">
        <li>
          <strong>Location Information:</strong> We may collect precise or
          approximate location information to provide location-based services
          such as taxi booking and navigation. This information helps us
          improve our services and tailor them to your needs.
        </li>
        <li>
          <strong>Network and Internet Connection:</strong> We collect
          information about your device's network connection and internet
          access to ensure seamless app functionality and to troubleshoot any
          issues that may arise.
        </li>
        <li>
          <strong>Storage Access:</strong> We may request access to your
          device's external storage to store relevant data, such as app settings
          or user preferences. This access is necessary for the proper
          functioning of the app.
        </li>
        <li>
          <strong>Media Access:</strong> We may request access to your device's
          media files, including videos and images, to enhance your user
          experience. This access allows us to provide features such as photo
          uploads or multimedia content within the app.
        </li>
      </ul>
      <h2 class="sub-heading">2. How We Use Your Information</h2>
      <p class="paragraph">
        We use the information collected for the following purposes:
      </p>
      <ul class="list">
        <li>
          <strong>Service Provision:</strong> We use your location information
          to facilitate taxi bookings, car rentals, and navigation services.
          This data helps us connect you with nearby drivers and provide
          accurate route information.
        </li>
        <li>
          <strong>Improving Our Services:</strong> We analyze user data to
          identify usage patterns, optimize app performance, and enhance user
          experience. Your feedback and usage data help us continuously improve
          our services.
        </li>
        <li>
          <strong>Customized Content:</strong> We may use your media access
          permissions to personalize your app experience by displaying relevant
          content or recommendations based on your preferences.
        </li>
      </ul>
      <h2 class="sub-heading">3. Data Security</h2>
      <p class="paragraph">
        We take appropriate measures to protect your personal information from
        unauthorized access, alteration, or disclosure. We implement
        industry-standard security protocols and regularly update our systems to
        safeguard your data.
      </p>
      <h2 class="sub-heading">4. Third-Party Services</h2>
      <p class="paragraph">
        We may use third-party services or APIs to enhance the functionality of
        our app. These services may have their own privacy policies governing
        the use of your information. We encourage you to review the privacy
        policies of these third-party services.
      </p>
      <h2 class="sub-heading">5. Consent</h2>
      <p class="paragraph">
        By using the Abiri Africa app, you consent to the collection and use of
        your personal information as outlined in this Privacy Policy. You may
        revoke your consent or manage your privacy settings within the app at
        any time.
      </p>
      <h2 class="sub-heading">6. Contact Us</h2>
      <p class="paragraph">
        If you have any questions or concerns about our Privacy Policy or the
        handling of your personal information, please contact us at{" "}
        <a class="link" href="mailto:support@abiriapp.com">contact@abiriafrica.com</a>.
      </p>
      <h2 class="sub-heading">7. Changes to This Policy</h2>
      <p class="paragraph">
        We reserve the right to update or modify this Privacy Policy at any
        time. Any changes will be reflected in the updated policy on our website
        or within the app. We recommend reviewing this policy periodically for
        any updates.
      </p>
      <p class="footer">
        <strong>Effective Date:</strong> [Insert Effective Date]
      </p>
    </div>
  );
}

export default PrivacyPolicyContent;
