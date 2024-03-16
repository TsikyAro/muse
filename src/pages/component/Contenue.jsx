import React from 'react';
import   '../../assets/css/style.css';
import   '../../assets/css/namari-color.css';
import   '../../assets/css/font-awesome.min.css';
import  '../../assets/css/animate.css';
import NavBar from './NavBar';

export default function Contenue({product}) {
    return (
        <div className="card">  
            <header id="banner" className="scrollto clearfix" a-enllax-ratio=".5">
                <NavBar />
                <div id="banner-content" className="row clearfix" style={{ background: `url(${require('../../assets/images/banner-images/banner-image-1.jpg')}) no-repeat center top`, 'background-size':'cover' }}>
                    <div className="col-38">
                        <div className="section-heading">
                            <h1>{product.name}</h1>
                            <h2>{product.description}</h2>
                        </div>
                        <a href="#" className="button">Explore</a>

                    </div>
                </div>
            </header>
        </div>
    )
}