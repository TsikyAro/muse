import React, { useState, useEffect } from 'react';
import './AnimatedElements.css'; // Créez un fichier CSS pour les styles si vous ne l'avez pas déjà

const AnimatedElements = () => {
  const [isVisible, setIsVisible] = useState([false, false, false, false]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(prevState => {
        const newState = [...prevState];
        newState[0] = true;
        return newState;
      });
    }, 500); // Temps en millisecondes pour l'animation du premier élément

    const timer2 = setTimeout(() => {
      setIsVisible(prevState => {
        const newState = [...prevState];
        newState[1] = true;
        return newState;
      });
    }, 1000); // Temps en millisecondes pour l'animation du deuxième élément

    const timer3 = setTimeout(() => {
      setIsVisible(prevState => {
        const newState = [...prevState];
        newState[2] = true;
        return newState;
      });
    }, 1500); // Temps en millisecondes pour l'animation du troisième élément

    const timer4 = setTimeout(() => {
      setIsVisible(prevState => {
        const newState = [...prevState];
        newState[3] = true;
        return newState;
      });
    }, 2000); // Temps en millisecondes pour l'animation du quatrième élément

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className='image' style={{ display: 'flex' }}>
      <div className={`blue ${isVisible[0] ? 'visible' : ''}`} style={{background:'blue', width: '200px', marginLeft: '10px' }}>Blue</div>
      <div className={`red ${isVisible[1] ? 'visible' : ''}`} style={{background:'red' ,width: '200px', marginLeft: '10px' }}>red</div>
      <div className={`green ${isVisible[2] ? 'visible' : ''}`} style={{ background:'green',width: '200px', marginLeft: '10px' }}>green</div>
      <div className={`gray ${isVisible[3] ? 'visible' : ''}`} style={{background:'gray',width: '200px', marginLeft: '10px' }}>gray</div>
    </div>
  );
};

export default AnimatedElements;
