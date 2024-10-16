import React from 'react';
import Spy from '../../../public/PageImages/Spy.jpg';

const Spyxfamily: React.FC = () => {
  return (
    <div className="spy-family-page" style={{ marginTop: '210px' }}>
      <h1>Spy x Family</h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '20px', width: '300px', flexShrink: 0 }}>
          <img src={Spy} alt="Digimon" style={{ width: '100%', height: 'auto' }} />
          <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <p>Description: The story follows a spy who has to "build a family" to execute a mission, not realizing that his adopted daughter is a telepath, and the woman he agrees to marry is a skilled assassin</p>
          </div>
        </div>
        <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Noodle Information</h2>
          <ul>
            <li><p>Genre: Family Friendly</p></li>
            <li><p>Episodes: 12</p></li>
            <li><p>Status: Completed</p></li>
            <li><p>Release Year: 2022</p></li>
            <li><p>Rating: 8.49</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Spyxfamily;