// App.jsx
import React from 'react';
import Painting from './components/Painting'; // Assuming Painting.jsx is in the components folder
import './App.css'; // Assuming you have global styles here

const paintings = [
  { src: '/images/painting1.jpg', alt: 'Painting 1 Description' },
  { src: '/images/painting2.jpg', alt: 'Painting 1 Description' },
  { src: '/images/painting3.jpg', alt: 'Painting 1 Description' },
  { src: '/images/painting4.jpg', alt: 'Painting 1 Description' },
  { src: '/images/painting5.jpg', alt: 'Painting 1 Description' },
  { src: '/images/painting6.jpg', alt: 'Painting 1 Description' },
  { src: '/images/painting7.jpg', alt: 'Painting 1 Description' },
  { src: '/images/painting8.jpg', alt: 'Painting 1 Description' },
  { src: '/images/painting9.jpg', alt: 'Painting 1 Description' },
  { src: '/images/painting10.jpg', alt: 'Painting 1 Description' },
  { src: '/images/painting11.jpg', alt: 'Painting 1 Description' },
  // ... add paths to all your painting images here
];

const App = () => {
  return (
    <div className="app">
      {paintings.map((painting, index) => (
        <Painting key={index} src={painting.src} alt={painting.alt} />
      ))}
    </div>
  );
};

export default App;
