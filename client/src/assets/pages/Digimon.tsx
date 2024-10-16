import React from 'react';
import Scifi from '../../../public/PageImages/Digimon.jpg';

const Digimon: React.FC = () => {
  return (
    <div className="digimon-page">
      <h1>Digimon Adventure</h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '20px' }}>
          <img src={Scifi} alt="Digimon" style={{ width: 'auto', height: 'auto',  }} />
          <p style={{ marginTop: '10px' }}>Text below the image</p>
        </div>
        <div>
          <p>Text to the side of the image. You can add more content here.</p>
        </div>
      </div>
    </div>
  );
};
  export default Digimon;