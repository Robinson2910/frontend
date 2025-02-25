export const contactFormData = {
  sectionClassName: "section-contact-form",
  contactTitle: "CONTACT US",
  contactDescriptions: [
    "Contact our education consultants in Chennai now with any inquiries, concerns, or specific needs.",
    "Your Personalized Studynov journey awaits, and we can't wait to be a part of it!",
  ],
  formFields: [
    {
      label: "Name*",
      inputId: "full-name",
      inputType: "text",
      inputPlaceholder: "Enter your name",
    },
    {
      label: "Email address*",
      inputId: "email",
      inputType: "email",
      inputPlaceholder: "Eg.Username@gmail.com",
    },
    {
      label: "Mobile*",
      inputId: "mobile",
      inputType: "text",
      inputPlaceholder: "Eg. +91-0000000000",
    },
    {
      label: "Your message*",
      inputId: "message",
      inputType: "text",
      inputPlaceholder: "Enter Your Message Here",
      inputClassName: "message-box", // Add the class for the message box
    },
  ],
  submitButtonLabel: "Send Enquiry",
};
