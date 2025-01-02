import React, { useState, useEffect, useRef } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <img
        ref={imageRef}
        src="./DJ VISHAK BUSINESS CARD.png"
        alt="DJ Vishak Business Card"
        className={`object-cover w-auto h-auto sm:w-3/4 sm:h-auto ${
          isVisible ? 'animate-ping' : ''
        }`}
      />
    </div>
  );
}

export default About;
