import React, { useState } from 'react';

const MobileMenu = () => {
  // State to toggle the mobile menu
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="mobile-menu">
      <button onClick={toggleMenu}>Toggle Menu</button>
      {/* Conditional rendering based on showMenu state */}
      {showMenu && (
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
          {/* Add more menu items as needed */}
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;