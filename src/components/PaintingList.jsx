import React from 'react';
import Painting from './Painting';

function PaintingList() {
  const paintingCount = 9; // The number of painting images you have
  const paintingImages = Array.from({ length: paintingCount }, (_, i) => `/images/painting${i + 1}.jpg`);

  return (
    <div>
      {paintingImages.map((imageUrl, index) => (
        <Painting key={index} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default PaintingList;
