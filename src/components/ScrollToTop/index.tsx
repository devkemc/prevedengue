'use client'
import {useEffect, useState} from "react";
import {FaArrowUp} from "react-icons/fa";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rola suavemente
    });
  };
  
  return (
    <button title='Clique para subir'
            className={`fixed bottom-4 right-4 bg-accent p-2 rounded-full ${
              isVisible ? 'visible' : 'invisible'
            }`}
            onClick={scrollToTop}
    >
      <FaArrowUp className="text-white"/>
    </button>
  );
};
