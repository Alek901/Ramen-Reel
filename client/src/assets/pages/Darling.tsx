import React from 'react';
import Romance from '../../../public/PageImages/Darling.jpg';

const Darling: React.FC = () => {
  return (
    <div className="darling-page">
      <h1>Darling in the Franxx</h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '20px' }}>
          <img src={Romance} alt="Darling in the Franxx" style={{ width: 'auto', height: 'auto',  }} />
          <p style={{ marginTop: '10px' }}>Text below the image</p>
        </div>
        <div>
          <p>Text to the side of the image. You can add more content here.</p>
        </div>
      </div>
    </div>
  );
};

export default Darling;
