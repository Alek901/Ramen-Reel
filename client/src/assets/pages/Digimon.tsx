import React from 'react';
import Scifi from '../../../public/PageImages/Digimon.jpg';

const Digimon: React.FC = () => {
  return (
    <div className="digimon-page" style={{ marginTop: '450px' }}>
      <h1>Digimon Adventure</h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '20px', width: '300px', flexShrink: 0 }}>
          <img src={Scifi} alt="Digimon" style={{ width: '100%', height: 'auto' }} />
          <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <p>Description: Its premise involves a group of boys and girls being whisked to a parallel reality called the Digital World, sometimes called "DigiWorld" for short, while at summer camp</p>
          </div>
        </div>
        <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Noodle Information</h2>
          <ul>
            <li><p>Genre: Sci-Fi</p></li>
            <li><p>Episodes: 54</p></li>
            <li><p>Status: Completed</p></li>
            <li><p>ReleaseYear: 1999</p></li>
            <li><p>Rating: 7.78</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Digimon;