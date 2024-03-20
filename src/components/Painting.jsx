import React from 'react';
import { Tilt } from 'react-tilt';

function Painting({ imageUrl }) {
  return (
    <div className="painting">
      <Tilt className="Tilt" options={{ max: 35, perspective: 1000, scale: 1.05 }}>
        <img src={imageUrl} alt="Painting" className="Tilt-inner" />
      </Tilt>
    </div>
  );
}

export default Painting;
