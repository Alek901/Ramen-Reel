import React from 'react';
import Action from '../../../public/PageImages/Dragonball.jpg';

const  DragonBallz: React.FC = () => {
  return (
    <div className="dragonballz-page">
      <h1>Dragon Ball Z</h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '20px' }}>
          <img src={Action} alt="Dragon Ball Z" style={{ width: 'auto', height: 'auto',  }} />
          <p style={{ marginTop: '10px' }}>Text below the image</p>
        </div>
        <div>
          <p>Text to the side of the image. You can add more content here.</p>
        </div>
      </div>
    </div>
  );
};

export default DragonBallz;