// components/Painting.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../assets/Painting.css'; // Update the import path according to your folder structure

const Painting = ({ src, alt }) => {
  const { ref, inView } = useInView({
    threshold: 0.8, 
  });

  return (
    <div ref={ref} className={`painting ${inView ? 'inFocus' : ''}`}>
      <img src={src} alt={alt} className="painting-img" />
    </div>
  );
};

export default Painting;
