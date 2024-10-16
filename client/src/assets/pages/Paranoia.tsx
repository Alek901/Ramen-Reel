import React from 'react';
import Thriller from '../../../public/PageImages/Paranoia.jpg';

const Paranoia: React.FC = () => {
  return (
    <div className="paranoia-page">
      <h1>Paranoia Agent</h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '20px' }}>
          <img src={Thriller} alt="Paranoia" style={{ width: 'auto', height: 'auto',  }} />
          <p style={{ marginTop: '10px' }}>Text below the image</p>
        </div>
        <div>
          <p>Text to the side of the image. You can add more content here.</p>
        </div>
      </div>
    </div>
  );
};

export default Paranoia;