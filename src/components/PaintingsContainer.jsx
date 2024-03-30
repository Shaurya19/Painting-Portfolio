
// PaintingsContainer.jsx
import React, { useState, useEffect } from 'react';
import Painting from './Painting';
import { useInView } from 'react-intersection-observer';

const paintingsData = [
    { src: '/images/painting1.jpg', alt: 'Painting 1 Description' },
    { src: '/images/painting2.jpg', alt: 'Painting 1 Description' },
    { src: '/images/painting3.jpg', alt: 'Painting 1 Description' },
    { src: '/images/painting4.jpg', alt: 'Painting 1 Description' },
    { src: '/images/painting5.jpg', alt: 'Painting 1 Description' },
  // ... other painting data
];

const PaintingsContainer = () => {
  const [inFocusIndex, setInFocusIndex] = useState(0);

  const [ref, inView, entry] = useInView({
    threshold: 0.5, // Adjust this value as needed to trigger when half the image is in view
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    if (inView && entry) {
      const paintingElements = entry.target.parentElement.children;
      const index = Array.from(paintingElements).indexOf(entry.target);
      setInFocusIndex(index);
    }
  }, [inView, entry]);

  return (
    <div ref={ref}>
      {paintingsData.map((painting, index) => (
        <Painting
          key={index}
          src={painting.src}
          alt={painting.alt}
          isInFocus={inFocusIndex === index}
        />
      ))}
    </div>
  );
};

export default PaintingsContainer;
