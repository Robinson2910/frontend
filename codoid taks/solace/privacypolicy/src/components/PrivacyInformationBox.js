function PrivacyInformationBox() {
  return (
    <section className="section">
      <div className="privacy-information-box margin-bottom-small ">
        <h2 className="heading-secondary margin-bottom-vsmall">The information we collect:</h2>
        <div>
          <p className="para margin-bottom-small">
            <span className="highlight ">Personal-data:</span>is information that relates to an
            identified or identifiable individual.
          </p>
          <p className="para margin-bottom-small">
            We may collect, use, store and disclose different kinds of personal data about you which
            we have listed below:
          </p>
          <ul className="inner-list">
            <li className="para">
              <span className="highlight"> Identity</span> Data including first name, middle name,
              last name, title, date of birth, gender, job title, and photographic identification.
            </li>
            <li className="para">
              <span className="highlight"> Contact Data</span> including billing address, delivery
              address, email address, and telephone numbers.
            </li>
            <li className="para">
              <span className="highlight">Financial Data</span> including bank account details.
            </li>
            <li className="para">
              <span className="highlight">Background Verification Data</span> including your
              passport number, driver's license number, photographic identification or other details
              requested as part of our Know Your Customer process to comply with our due diligence
              obligations, anti-money laundering laws and related ongoing monitoring commitments.
            </li>
            <li className="para">
              <span className="highlight">Transaction Data</span> including details about payments
              to you from us and from you to us and other details of products and services you have
              purchased from us or we have purchased from you.
            </li>
            <li className="para">
              <span className="highlight">Technical and Usage Data</span> including internet
              protocol (IP) address, your login data, your browser session and geo-location data,
              device and network information, statistics on page views and sessions, acquisition
              sources, search queries and/or browsing behavior, information about your access and
              use of our website, including through the use of Internet cookies, your communications
              with our website, the type of browser you are using, the type of operating system you
              are using and the domain name of your Internet service provider.
            </li>
            <li className="para">
              <span className="highlight">Interaction Data</span> including information you provide
              to us when you participate in any interactive features of our Services, including
              surveys, contests, promotions, activities, or events.
            </li>
            <li className="para">
              <span className="highlight"> Marketing and Communications Data</span> including your
              preferences in receiving marketing from us and our third parties and your
              communication preferences.
            </li>
            <li className="para">
              <span className="highlight"> Professional data</span> including where you are a worker
              of ours or applying for a role with us, your professional history such as your
              previous positions and professional experience.
            </li>
            <li className="para">
              <span className="highlight">Special Categories of Personal Data</span> is a special
              category of personal data that includes details about your race or ethnicity,
              religious or philosophical beliefs, sex life, sexual orientation, political opinions,
              trade union membership, information about your health and genetic and biometric data.
              We do not actively request special categories of data about you, nor do we collect any
              information about criminal convictions and offenses. If at any time we need to collect
              special categories of data about you, we will only collect it and use it as required
              or authorized by law.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PrivacyInformationBox;
