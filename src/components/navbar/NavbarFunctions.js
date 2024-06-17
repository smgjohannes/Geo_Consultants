import React from 'react';

// Define separate modal components
const CompanyModal = () => {
  return (
    <div className='modal'>
      <h2>Company Modal</h2>
      {/* Add Company modal content here */}
    </div>
  );
};

const AboutModal = () => {
  return (
    <div className='modal'>
      <h2>About Modal</h2>
      {/* Add About modal content here */}
    </div>
  );
};

const ServicesModal = () => {
  return (
    <div className='modal'>
      <h2>Services Modal</h2>
      {/* Add Services modal content here */}
    </div>
  );
};

const ContactModal = () => {
  return (
    <div className='modal'>
      <h2>Contact Modal</h2>
      {/* Add Contact modal content here */}
    </div>
  );
};

// Function to render the appropriate modal based on the modal type
export const renderModal = (modalType) => {
  switch (modalType) {
    case 'company':
      return <CompanyModal />;
    case 'about':
      return <AboutModal />;
    case 'services':
      return <ServicesModal />;
    case 'contact':
      return <ContactModal />;
    default:
      return null;
  }
};
