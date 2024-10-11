import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/profile">My Profile</Link></li> */}
          {/* <li><Link to="/search">Search</Link></li>     if we have time I will add these links */}
          <li>
            <span>Categories</span>
            <ul>
                <li></li>
              <li>Action</li>
              <li>Romance</li>
              <li>Family Friendly</li>
              <li>Thriller</li>
              <li>Sci-Fi</li>
              <li> <div className="login-link">
        <p>Want to become a noodle watcher? <a href="/.pages/Login.tsx">Click here to log in</a></p>
      </div>
      </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

{/* <Link to="/category/sci-fi"></Link> */}
export default Sidebar;