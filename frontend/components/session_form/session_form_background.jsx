import React from 'react';

const SessionFormBackground = () => {
  const bgImages = [
    'https://i.lensdump.com/i/Vj9tb.jpg',
    'https://i.lensdump.com/i/VjQwT.jpg',
    'https://i.lensdump.com/i/VjdK7.jpg',
    'https://i.lensdump.com/i/Vjqfr.jpg',
    'https://i.lensdump.com/i/VjmjF.jpg',
    'https://i.lensdump.com/i/Vjsq3.jpg',
    'https://i.lensdump.com/i/Vj3Y0.jpg',
    'https://i.lensdump.com/i/Vj4hD.jpg',
    'https://i.lensdump.com/i/VjpCq.jpg',
    'https://i.lensdump.com/i/Vj7SA.jpg',
    'https://i.lensdump.com/i/VjOwM.jpg',
    'https://i.lensdump.com/i/Vjl1Q.jpg',
    'https://i.lensdump.com/i/VjzKa.jpg'
  ];

  let randomNum = Math.floor(bgImages.length * Math.random());
  const bgImage = { backgroundImage: `url(${bgImages[randomNum]})` };

  return (
    <div className="session-form-background" style={bgImage}></div>
  );
};

export default SessionFormBackground;
