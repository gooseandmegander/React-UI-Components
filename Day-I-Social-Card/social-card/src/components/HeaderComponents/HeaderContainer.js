import React from 'react';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';
import './Header.css';

const HeaderContainer = () => {
  return (
    <div className="headerContainer">
      <ImageThumbnail />
      <div className="headerContainer-text">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;
