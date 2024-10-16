import React from 'react';
import Romance from '../../../public/PageImages/Darling.jpg';

const Darling: React.FC = () => {
  return (
    <div className="darling-page" style={{ marginTop: '450px'}} >
      <h1>Darling in the Franxx</h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '20px', width: '300px', flexShrink: 0 }}>
          <img src={Romance} alt="Digimon" style={{ width: '100%', height: 'auto' }} />
          <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <p>Description: Darling in the Franxx is set in a dystopian future where children are artificially created and indoctrinated solely to defend the remnants of civilization</p>
          </div>
        </div>
        <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Noodle Information</h2>
          <ul>
            <li><p>Genre: Romance</p></li>
            <li><p>Episodes: 24</p></li>
            <li><p>Status: Completed</p></li>
            <li><p>ReleaseYear: 2018</p></li>
            <li><p>Rating: 7.19</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Darling;
