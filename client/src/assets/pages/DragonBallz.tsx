import React from 'react';
import Action from '../../../public/PageImages/Dragonball.jpg';

const  DragonBallz: React.FC = () => {
  return (
    <div className="dragonballz-page" style={{ marginTop: '210px' }}>
      <h1>Dragon Ball Z</h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '20px', width: '300px', flexShrink: 0 }}>
          <img src={Action} alt="Digimon" style={{ width: '100%', height: 'auto' }} />
          <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <p>Description: Dragon Ball Z follows the adventures of the adult Goku who, along with his companions, defends the earth against an assortment of villains ranging from intergalactic space fighters and conquerors, unnaturally powerful androids and near indestructible magical creatures</p>
          </div>
        </div>
        <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Noodle Information</h2>
          <ul>
            <li><p>Genre: Action</p></li>
            <li><p>Episodes: 291</p></li>
            <li><p>Status: Completed</p></li>
            <li><p>ReleaseYear: 1989</p></li>
            <li><p>Rating: 8.18</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DragonBallz;