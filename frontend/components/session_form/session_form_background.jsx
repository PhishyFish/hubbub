import React from 'react';

class SessionFormBackground extends React.Component {
  render() {
    const bgImages = [
      'https://initiate.alphacoders.com/images/789/cropped-1920-1080-789450.jpg?7813',
      'https://initiate.alphacoders.com/images/716/cropped-1920-1080-716166.jpg?1765',
      'https://initiate.alphacoders.com/images/716/cropped-1920-1080-716926.jpg?8067',
      'https://initiate.alphacoders.com/images/907/cropped-1920-1080-90708.jpg?8901',
      'https://initiate.alphacoders.com/images/553/cropped-1920-1080-553463.jpg?355',
      'https://initiate.alphacoders.com/images/633/cropped-1920-1080-633142.jpg?4387',
      'https://initiate.alphacoders.com/images/392/cropped-1920-1080-392895.jpg?7082',
      'https://initiate.alphacoders.com/images/739/cropped-1920-1080-739116.jpg?9795',
      'https://initiate.alphacoders.com/images/609/cropped-1920-1080-609858.jpg?770'
    ];

    let randomNum = Math.floor(bgImages.length * Math.random());
    const bgImage = { backgroundImage: `url(${bgImages[randomNum]})` };

    return (
      <div className="session-form-background" style={bgImage}></div>
    );
  }
}

export default SessionFormBackground;
