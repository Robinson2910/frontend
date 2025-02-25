import "../css/Policy.css";
import CookieDescription from "../components/CookieDescription";

import TabularColumCookie from "../components/TabularColumCookie";
import ContactInformationCookie from "../components/ContactInformationCookie";
function CookiePolicy() {
  return (
    <section className="cookie-policy-section">
      <div className="container">
        <CookieDescription />
        <TabularColumCookie />
        <ContactInformationCookie />
      </div>
    </section>
  );
}

export default CookiePolicy;
