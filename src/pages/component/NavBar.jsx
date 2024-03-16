import React from 'react';
import   '../../assets/css/style.css';
import   '../../assets/css/namari-color.css';
import   '../../assets/css/font-awesome.min.css';
import  '../../assets/css/animate.css';
import { InputText } from "primereact/inputtext";


export default function NavBar() {

    return (
        <div className="card">  
            <div id="header" class="nav-collapse">
                <div class="row clearfix">
                    <div class="col-1">
                        <div id="logo">
                            <h2>Cult<b>Art</b></h2>
                        </div>
                        <aside>
                            <ul class="social-icons">
                                <li>
                                    <a target="_blank" title="Facebook" href="https://www.facebook.com/username">
                                        <i class="fa fa-facebook fa-1x"></i><span>Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="Google+" href="http://google.com/+username">
                                        <i class="fa fa-google-plus fa-1x"></i><span>Google+</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="Twitter" href="http://www.twitter.com/username">
                                        <i class="fa fa-twitter fa-1x"></i><span>Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="Instagram" href="http://www.instagram.com/username">
                                        <i class="fa fa-instagram fa-1x"></i><span>Instagram</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="behance" href="http://www.behance.net">
                                        <i class="fa fa-behance fa-1x"></i><span>Behance</span>
                                    </a>
                                </li>
                            </ul>
                        </aside>
                        <nav id="nav-main">
                            <ul>
                                <li>
                                    <a href="#banner">Home</a>
                                </li>
                                <li>
                                    <a href="#about">Creer</a>
                                </li>
                                <li>
                                    <a href="#services">Services</a>
                                </li>
                                <li>
                                   <div className="card flex flex-wrap justify-content-center gap-3">
                                        <span className="p-input-icon-left">
                                            <InputText placeholder="" />
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div id="nav-trigger"><span></span></div>
                        <nav id="nav-mobile"></nav>

                    </div>
                </div>
            </div>
        </div>
    )
}