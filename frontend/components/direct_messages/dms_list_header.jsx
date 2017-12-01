import React from 'react';

const DMsListHeader = () => {
  const openModal = e => {
    e.preventDefault();
    document.querySelector('.modal').classList.add('open');
  };

  return(
    <div className="channels-header">
      <div className="search-bar">
        <div className="search-bar-inner">
          <button onClick={openModal}>Find or start a conversation</button>
        </div>
      </div>
    </div>
  );
};

export default DMsListHeader;
