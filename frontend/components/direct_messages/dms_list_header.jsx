import React from 'react';

const DMsListHeader = () => {
  const openModal = e => {
    e.preventDefault();
    document.querySelector('.modal').classList.add('open');
  };

  return(
    <div className="search-bar">
      <div className="search-bar-inner">
        <a href="#">
          <button onClick={openModal}>Find or start a conversation</button>
        </a>
      </div>
    </div>
  );
};

export default DMsListHeader;
