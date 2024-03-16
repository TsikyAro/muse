import React from 'react';
// import Step from './component/Steps.jsx';
import Header from './component/Header.jsx';
// import Gallerie from './component/Gallerie.jsx'; 
// import AnimatedObject from './component/Annimated.jsx';
// import AnimatedElements from './component/Animation.jsx';
// import Contenue from './component/Contenue.jsx';
const Landing = () => {

  return (
    <div>
      <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
        <div className="top-border wow fadeInDown animated" style={{visibility: 'visible', animation: 'fadeInDown'}}></div>
        <div className="right-border wow fadeInRight animated" style={{visibility: 'visible', animation: 'fadeInRight'}}></div>
        <div className="bottom-border wow fadeInUp animated" style={{visibility: 'visible', animation: 'fadeInUp'}}></div>
        <div className="left-border wow fadeInLeft animated" style={{visibility: 'visible', animation: 'fadeInLeft'}}></div>
      </div>
    <div id="wrapper">
        <Header />
        <div className="overlay"></div>
        <div className="text">

        </div>
        </div>
    </div>
  );
};

export default Landing;
