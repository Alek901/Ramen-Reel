import React from 'react';
import Thriller from '../../../public/PageImages/Paranoia.jpg';

const Paranoia: React.FC = () => {
  return (
    <div className="paranoia-page" style={{ marginTop: '450px' }}>
      <h1>Paranoia Agent</h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '20px', width: '300px', flexShrink: 0 }}>
          <img src={Thriller} alt="Digimon" style={{ width: '100%', height: 'auto' }} />
          <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <p>Description: The infamous Shounen Bat is terrorizing the residents of Musashino City. Flying around on his rollerblades and beating people down with a golden baseball bat, the assailant seems impossible to catch—much less understand</p>
          </div>
        </div>
        <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Noodle Information</h2>
          <ul>
            <li><p>Genre: Thriller</p></li>
            <li><p>Episodes: 13</p></li>
            <li><p>Status: Completed</p></li>
            <li><p>ReleaseYear: 2004</p></li>
            <li><p>Rating: 7.66</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Paranoia;