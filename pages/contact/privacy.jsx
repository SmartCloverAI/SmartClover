import Contact, { privacyInquiryLabel } from '../contact';

const PrivacyContact = () => (
  <Contact
    initialInquiryType={privacyInquiryLabel}
    seoPath="/contact/privacy"
    seoTitle="Privacy Contact | SmartClover"
    seoDescription="Contact SmartClover for privacy questions, data-subject requests, and rights-related requests through a dedicated privacy intake path."
  />
);

export default PrivacyContact;
