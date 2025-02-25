import { contactFormData } from "../data/contactFormData";
export default function ContactForm() {
  return (
    <section className="section-contact-form">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-us-box">
            <p className="label-contact-us">{contactFormData.contactTitle}</p>
            {/* <p className="contact-description">
              <em>
                Contact our education consultants in Chennai now with any inquiries, concerns, or
                specific needs.
              </em>
            </p>
            <p className="contact-description">
              <em>
                Your Personalized Studynov journey awaits, and we can't wait to be a part of it!
              </em>
            </p> */}
            {contactFormData.contactDescriptions.map((description, index) => (
              <p className="contact-description" key={index}>
                <em>{description}</em>
              </p>
            ))}
          </div>
          <div className="contact-form-box ">
            <form action="" className="contact-form">
              {contactFormData.formFields.map((field, index) => (
                <div key={index} className={field.inputClassName}>
                  <label htmlFor={field.inputId}>{field.label}</label>
                  <input
                    id={field.inputId}
                    type={field.inputType}
                    placeholder={field.inputPlaceholder}
                    name={field.inputId}
                    required
                  />
                </div>
              ))}
              <button className="submit-btn">Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
// import { contactFormData } from "../data/contactFormData";
// export const ContactForm = () => {
//   return (
//     <section className={contactFormData.sectionClassName}>
//       <div className="container">
//         <div className="contact-grid">
//           <div className="contact-us-box">
//             <p className="label-contact-us">{contactFormData.contactTitle}</p>
//             {contactFormData.contactDescriptions.map((description, index) => (
//               <p className="contact-description" key={index}>
//                 <em>{description}</em>
//               </p>
//             ))}
//           </div>
//           <div className="contact-form-box">
//             <form action="" className="contact-form">
//               {contactFormData.formFields.map((field, index) => (
//                 <div key={index} className={field.inputClassName}>
//                   <label htmlFor={field.inputId}>{field.label}</label>
//                   <input
//                     id={field.inputId}
//                     type={field.inputType}
//                     placeholder={field.inputPlaceholder}
//                     name={field.inputId}
//                     required
//                   />
//                 </div>
//               ))}
//               <button className="submit-btn">{contactFormData.submitButtonLabel}</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
