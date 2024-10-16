import React from 'react';
import Spy from '../../../public/PageImages/Spy.jpg';

const Spyxfamily: React.FC = () => {
  return (
    <div className="spy-family-page">
      <h1>Spy x Family</h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '20px' }}>
          <img src={Spy} alt="Spy x Family" style={{ width: 'auto', height: 'auto',  }} />
          <p style={{ marginTop: '10px' }}>Text below the image</p>
        </div>
        <div>
          <p>Text to the side of the image. You can add more content here.</p>
        </div>
      </div>
    </div>
  );
};

export default Spyxfamily;