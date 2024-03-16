import React from 'react';
// import Step from './component/Steps.jsx';
import Carousse from './component/Carousse.jsx';
import Header from './component/NavBar.jsx'; 
// import Gallerie from './component/Gallerie.jsx'; 
// import AnimatedObject from './component/Annimated.jsx';
// import AnimatedElements from './component/Animation.jsx';
// import Contenue from './component/Contenue.jsx';
const Landing = () => {

  return (
    <div>
    <section className="showcase">
        <header>
            <Carousse/> 
        </header>
        <div class="overlay"></div>
        <div class="text">

        </div>
        
    </section>
    </div>
  );
};

export default Landing;
