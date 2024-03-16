import React from 'react';
// import Step from './component/Steps.jsx';
// import Carousse from './component/Carousse.jsx'; 
// import Gallerie from './component/Gallerie.jsx'; 
// import AnimatedObject from './component/Annimated.jsx';
import AnimatedElements from './component/Animation.jsx';
const Landing = () => {

  return (
    <div>
    <section className="showcase">
        <header>
            <h1>Thème à Découvrir</h1>
            <AnimatedElements/> 
        </header>
        <div class="overlay"></div>
        <div class="text">

        </div>
        
    </section>
    </div>
  );
};

export default Landing;
