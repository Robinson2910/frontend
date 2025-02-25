import React from "react";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
import TableCellList from "./TableCellList";

// const TabularColumn = () => (
//   <section className="section-table">
//     <div className="table-box margin-bottom-vsmall ">
//       <TableHeader>Purpose of use / disclosure</TableHeader>
//       <TableHeader>Type of Data</TableHeader>
//       <TableHeader>Legal Basis for processing</TableHeader>

//       {renderTableRow(
//         "To assess whether to offer a property to you, including to perform anti-money laundering, anti-terrorism, sanction screening, fraud and other background checks on you.",
//         ["Identity Data", "Contact Data", "Background verification Data"],
//         [
//           "Performance of a contract with you",
//           "To comply with a legal obligation",
//           "Public interest",
//           "Legitimate interests: ensuring we do not deal with proceeds of criminal activities or assist in any other unlawful or fraudulent activities for example terrorism",
//         ]
//       )}

//       {renderTableRow(
//         "To provide our Services to you, including to manage and maintain your property.",
//         ["Identity Data", "Contact Data"],
//         ["Performance of a contract with you"]
//       )}

//       {renderTableRow(
//         "To contact and communicate with you about our Services including in response to any support requests you lodge with us or other enquiries you make with us.",
//         ["Identity Data", "Contact Data"],
//         ["Performance of a contract with you"]
//       )}

//       {renderTableRow(
//         "To contact and communicate with you about any enquiries you make with us via our website.",
//         ["Identity Data", "Contact Data"],
//         [
//           "Legitimate interests: to ensure we provide the best client experience we can offer by answering all of your questions",
//         ]
//       )}

//       {renderTableRow(
//         "For internal record keeping, administrative, invoicing and billing purposes.",
//         ["Identity Data", "Contact Data", "Financial Data", "Transaction Data"],
//         [
//           "Performance of a contract with you",
//           "To comply with a legal obligation",
//           "Legitimate interests: to recover debts due to us and ensure we can notify you about changes to our terms of business and any other administrative points",
//         ]
//       )}

//       {renderTableRow(
//         "For analytics, market research and business development, including to operate and improve our Services, associated applications and associated social media platforms",
//         ["Profile Data", "Technical and usage Data"],
//         [
//           "Legitimate interests: to keep our website updated and relevant, to develop our business, improve our Services and to inform our marketing strategy",
//         ]
//       )}

//       {renderTableRow(
//         "For advertising and marketing, including to send you promotional information about our events and experiences and information that we consider may be of interest to you.",
//         ["Identity Data", "Contact Data"],
//         ["Legitimate interests: to develop our Services and grow our business"]
//       )}

//       {renderTableRow(
//         "To run promotions, competitions and/or offer additional benefits to you.",
//         ["Identity Data", "Contact Data", "Interaction Data", "Marketing and communications Data"],
//         ["Legitimate interests: to facilitate engagement with our business and grow our business"]
//       )}

//       {renderTableRow(
//         "If you have applied to work with us; to consider your application.",
//         ["Identity Data", "Contact Data", "Professional Data"],
//         ["Legitimate interests: to consider your employment application"]
//       )}

//       {renderTableRow(
//         "To comply with our legal obligations or if otherwise required or authorised by law",
//         ["All relevant Personal Data"],
//         ["To comply with a legal obligation"]
//       )}
//     </div>
//     {/* <p className="para margin-bottom-vsmall">
//       If you have consented to our use of data about you for a specific purpose, you have the right
//       to change your mind at any time, but this will not affect any processing that has already
//       taken place. Where we are using your data because we or a third party have a legitimate
//       interest to do so, you have the right to object to that use though, in some cases, this may
//       mean no longer using our services. Further information about your rights is available below.
//     </p> */}
//   </section>
// );

// const renderTableRow = (content, dataList, legalBasisList) => (
//   <>
//     <TableContent>{content}</TableContent>
//     <TableCellList dataList={dataList} />
//     <TableCellList dataList={legalBasisList} />
//   </>
// );

// export default TabularColumn;

// import React from "react";
// import TableHeader from "./TableHeader";
// import TableContent from "./TableContent";
// import TableCellList from "./TableCellList";

// const TabularColumn = () => (
//   <section className="section-table">
//     <div className="table-box margin-bottom-vsmall ">
//       <TableHeader>Purpose of use / disclosure</TableHeader>
//       <TableHeader>Type of Data</TableHeader>
//       <TableHeader>Legal Basis for processing</TableHeader>

//       {renderTableRow(
//         "To assess whether to offer a property to you, including to perform anti-money laundering, anti-terrorism, sanction screening, fraud and other background checks on you.",
//         ["Identity Data", "Contact Data", "Background verification Data"],
//         [
//           "Performance of a contract with you",
//           "To comply with a legal obligation",
//           "Public interest",
//           "Legitimate interests: ensuring we do not deal with proceeds of criminal activities or assist in any other unlawful or fraudulent activities for example terrorism",
//         ]
//       )}

//       {renderTableRow(
//         "To provide our Services to you, including to manage and maintain your property.",
//         ["Identity Data", "Contact Data"],
//         ["Performance of a contract with you"]
//       )}

//       {renderTableRow(
//         "To contact and communicate with you about our Services including in response to any support requests you lodge with us or other enquiries you make with us.",
//         ["Identity Data", "Contact Data"],
//         ["Performance of a contract with you"]
//       )}

//       {renderTableRow(
//         "To contact and communicate with you about any enquiries you make with us via our website.",
//         ["Identity Data", "Contact Data"],
//         [
//           "Legitimate interests: to ensure we provide the best client experience we can offer by answering all of your questions",
//         ]
//       )}

//       {renderTableRow(
//         "For internal record keeping, administrative, invoicing and billing purposes.",
//         ["Identity Data", "Contact Data", "Financial Data", "Transaction Data"],
//         [
//           "Performance of a contract with you",
//           "To comply with a legal obligation",
//           "Legitimate interests: to recover debts due to us and ensure we can notify you about changes to our terms of business and any other administrative points",
//         ]
//       )}

//       {renderTableRow(
//         "For analytics, market research and business development, including to operate and improve our Services, associated applications and associated social media platforms",
//         ["Profile Data", "Technical and usage Data"],
//         [
//           "Legitimate interests: to keep our website updated and relevant, to develop our business, improve our Services and to inform our marketing strategy",
//         ]
//       )}

//       {renderTableRow(
//         "For advertising and marketing, including to send you promotional information about our events and experiences and information that we consider may be of interest to you.",
//         ["Identity Data", "Contact Data"],
//         ["Legitimate interests: to develop our Services and grow our business"]
//       )}

//       {renderTableRow(
//         "To run promotions, competitions and/or offer additional benefits to you.",
//         ["Identity Data", "Contact Data", "Interaction Data", "Marketing and communications Data"],
//         ["Legitimate interests: to facilitate engagement with our business and grow our business"]
//       )}

//       {renderTableRow(
//         "If you have applied to work with us; to consider your application.",
//         ["Identity Data", "Contact Data", "Professional Data"],
//         ["Legitimate interests: to consider your employment application"]
//       )}

//       {renderTableRow(
//         "To comply with our legal obligations or if otherwise required or authorised by law",
//         ["All relevant Personal Data"],
//         ["To comply with a legal obligation"]
//       )}
//     </div>
//     {/* <p className="para margin-bottom-vsmall">
//       If you have consented to our use of data about you for a specific purpose, you have the right
//       to change your mind at any time, but this will not affect any processing that has already
//       taken place. Where we are using your data because we or a third party have a legitimate
//       interest to do so, you have the right to object to that use though, in some cases, this may
//       mean no longer using our services. Further information about your rights is available below.
//     </p> */}
//   </section>
// );

// const renderTableRow = (content, dataList, legalBasisList) => (
//   <>
//     <TableContent>{content}</TableContent>
//     <TableCellList dataList={dataList} />
//     <TableCellList dataList={legalBasisList} />
//   </>
// );

// export default TabularColumn;

const TabularColumn = () => (
  <section className="section-table margin-bottom-vsmall">
    <h2 className="heading-secondary margin-bottom-vsmall">
      Purposes and legal bases for processing:
    </h2>
    <p className="para margin-bottom-vsmall">
      We collect and process personal data about you only where we have legal bases for doing so
      under applicable laws. We have set out below, in a table format, a description of all the ways
      we plan to use your personal data, and which of the legal bases we rely on to do so. We have
      also identified what our legitimate interests are where appropriate. Note that we may process
      your personal data for more than one lawful ground depending on the specific purpose for which
      we are using your data. Please reach out to us if you need further details about the specific
      legal ground we are relying on to process your personal data where more than one ground has
      been set out in the table below.
    </p>
    <div className="table-box margin-bottom-vsmall">
      <div className="column">
        <TableHeader>Purpose of use / disclosure</TableHeader>
        {renderTableColumn([
          "To assess whether to offer a property to you, including to perform anti-money laundering, anti-terrorism, sanction screening, fraud and other background checks on you.",
          "To provide our Services to you, including to manage and maintain your property.",
          "To contact and communicate with you about our Services including in response to any support requests you lodge with us or other enquiries you make with us.",
          "To contact and communicate with you about any enquiries you make with us via our website.",
          "For internal record keeping, administrative, invoicing and billing purposes.",
          "For analytics, market research and business development, including to operate and improve our Services, associated applications and associated social media platforms",
          "For advertising and marketing, including to send you promotional information about our events and experiences and information that we consider may be of interest to you.",
          "To run promotions, competitions and/or offer additional benefits to you.",
          "If you have applied to work with us; to consider your application.",
          "To comply with our legal obligations or if otherwise required or authorised by law",
        ])}
      </div>

      <div className="column">
        <TableHeader>Type of Data</TableHeader>
        {renderTableColumn([
          ["Identity Data", "Contact Data", "Background verification Data"],
          ["Identity Data", "Contact Data"],
          ["Identity Data", "Contact Data"],
          ["Identity Data", "Contact Data"],
          ["Identity Data", "Contact Data", "Financial Data", "Transaction Data"],
          ["Profile Data", "Technical and usage Data"],
          [
            "Identity Data",
            "Contact Data",
            "Technical and usage Data",
            "Marketing and communications data",
          ],
          [
            "Identity Data",
            "Contact Data",
            "Interaction Data",
            "Marketing and communications Data",
          ],
          ["Identity Data", "Contact Data", "Professional Data"],
          ["All relevant Personal Data"],
        ])}
      </div>

      <div className="column grid-full-width">
        <TableHeader>Legal Basis for processing</TableHeader>
        {renderTableColumn([
          [
            "Performance of a contract with you",
            "To comply with a legal obligation",
            "Public interest",
            "Legitimate interests: ensuring we do not deal with proceeds of criminal activities or assist in any other unlawful or fraudulent activities for example terrorism",
          ],
          ["Performance of a contract with you"],
          ["Performance of a contract with you"],
          [
            "Legitimate interests: to ensure we provide the best client experience we can offer by answering all of your questions",
          ],
          [
            "Performance of a contract with you",
            "To comply with a legal obligation",
            "Legitimate interests: to recover debts due to us and ensure we can notify you about changes to our terms of business and any other administrative points",
          ],
          [
            "Legitimate interests: to keep our website updated and relevant, to develop our business, improve our Services and to inform our marketing strategy",
          ],
          ["Legitimate interests: to develop our Services and grow our business"],
          [
            "Legitimate interests: to facilitate engagement with our business and grow our business",
          ],
          ["Legitimate interests: to consider your employment application"],
          ["To comply with a legal obligation"],
        ])}
      </div>
    </div>
    <p className="para">
      If you have consented to our use of data about you for a specific purpose, you have the right
      to change your mind at any time, but this will not affect any processing that has already
      taken place. Where we are using your data because we or a third party have a legitimate
      interest to do so, you have the right to object to that use though, in some cases, this may
      mean no longer using our services. Further information about your rights is available below
    </p>
  </section>
);

const renderTableColumn = (columnDataList) =>
  columnDataList.map((data, index) => {
    if (Array.isArray(data)) {
      return <TableCellList key={index} dataList={data} />;
    } else {
      return <TableContent key={index}>{data}</TableContent>;
    }
  });

export default TabularColumn;
