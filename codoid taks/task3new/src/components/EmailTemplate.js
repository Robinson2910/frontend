import logo from "../img/logo 4k.jpg";
function EmailTemplate() {
  return (
    <div style={{ maxWidth: "90%", margin: "32px auto" }}>
      <img src={logo} alt="logo" style={{ maxWidth: "120px", marginBottom: "32px" }} />
      <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "16px" }}>
        <strong>Dear #tenancy_agreement_name# ,</strong>
      </p>
      <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "16px" }}>
        As your current electrical installation condition report runs out on{" "}
        <strong style={{ color: "red" }}>*INSERT DATE HERE*</strong>, we will be organising a new
        check to make sure you, your family, and any visitors are not put at any risk.{" "}
      </p>
      <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "16px" }}>
        The engineer will be in touch to arrange the appointment. We must have the check (and any
        works that might be needed) completed before the expiry date. If providing access will cause
        you any issues please let us know by replying directly to the email to which this letter was
        attached.
      </p>
      <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "32px" }}>Kind regards,</p>
      <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "16px" }}>#negotiator#</p>
      <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "16px" }}>
        for #branch_name#{" "}
      </p>
    </div>
  );
}

export default EmailTemplate;
