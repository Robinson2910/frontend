import PrivacDescriptionBox from "../components/PrivacDescriptionBox";
import PrivacyInformationBox from "../components/PrivacyInformationBox";
import PersonalDataCollection from "../components/PersonalDataCollection";

import TabularColumn from "../components/TabularColumn";
import Disclosures from "../components/Disclosures";
import OverseasTransfers from "../components/OverseasTransfers";
import DataRetention from "../components/DataRetention";
import RightsAndControl from "../components/RightsAndControl";
import StorageAndSecurity from "../components/StorageAndSecurity";
import Cookies from "../components/Cookies";

import Amendments from "../components/Amendments";
import ContactInformation from "../components/ContactInformation";
import "../css/Policy.css";

function PrivacyPolicy() {
  return (
    <section className="section-privacyPolicy">
      <div className="container">
        <PrivacDescriptionBox />
        <PrivacyInformationBox />
        <PersonalDataCollection />

        <TabularColumn />

        <Disclosures />
        <OverseasTransfers />
        <DataRetention />
        <RightsAndControl />
        <StorageAndSecurity />
        <Cookies />
        <Amendments />
        <ContactInformation />
      </div>
    </section>
  );
}

export default PrivacyPolicy;
