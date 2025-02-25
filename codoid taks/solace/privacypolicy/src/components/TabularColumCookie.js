import React from "react";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";

const TabularColumnCookie = () => (
  <section className="section-table margin-bottom-vsmall">
    <p className="para margin-bottom-vsmall">
      You can find more information about the individual cookies we use, their category, and the
      purposes for which we use them in the table below:
    </p>
    <div className="table-box margin-bottom-vsmall">
      <div className="column">
        <TableHeader>Cookie</TableHeader>
        {renderTableColumn([
          ["Currency"],
          ["Language"],
          ["PHPSESSIONID"],
          ["newsbcsub"],
          ["TLSCookiesEU"],
          ["_ga / _gid / _gat"],
        ])}
      </div>

      <div className="column">
        <TableHeader>Category</TableHeader>
        {renderTableColumn([
          ["Functionality"],
          ["Functionality"],
          ["Analytical/Performance"],
          ["Functionality"],
          ["Strictly Necessary"],
          ["Analytical/Performance"],
        ])}
      </div>

      <div className="column grid-full-width">
        <TableHeader>Purpose</TableHeader>
        {renderTableColumn([
          ["This cookie stores the currency used for the online Services (£GBP)."],
          ["This cookie stores the language used for the online Services (English)."],
          [
            "This cookie contains a unique ID to support functions (e.g., last viewed pages) to improve user experience.",
          ],
          [
            "This cookie is stored once the user has completed or closed the Register Pop Up, preventing it from re-appearing until after 7 days.",
          ],
          [
            "This cookie tracks when a user has accepted that the online Services use cookies, preventing the popup from being displayed again during that session.",
          ],
          [
            "These cookies are used by our Google Analytics account to track customer traffic through the website, helping us understand how our website is being used by our users.",
          ],
        ])}
      </div>
    </div>
    <p className="para margin-bottom-vsmall">
      You can block cookies by activating the setting on your browser that allows you to refuse the
      setting of all or some cookies. However, if you use your browser settings to block all cookies
      (including strictly necessary cookies) you may not be able to access all or parts of our
      online Services.
    </p>
    <p className="para">
      We may, at any time and at our discretion, vary this Cookie Policy by publishing the amended
      Cookie Policy on our website. We recommend you check our website regularly to ensure you are
      aware of our current Cookie Policy.
    </p>
  </section>
);

const renderTableColumn = (columnDataList) =>
  columnDataList.map((data, index) => {
    return <TableContent key={index}>{data}</TableContent>;
  });

export default TabularColumnCookie;
