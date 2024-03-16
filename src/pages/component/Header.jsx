import React from 'react';
import   '../../assets/css/style.css';
import   '../../assets/css/namari-color.css';
import   '../../assets/css/font-awesome.min.css';
import  '../../assets/css/animate.css';
import { Carousel } from 'primereact/carousel';
import image from '../../assets/images/banner-images/banner-image-1.jpg';
import NavBar from './NavBar';
import GroundHeader from './GroundHeader';

export default function Header(){
    const products = [
        {
            name:'Categ1',
            description:'Petit description',
            image:image
        },
        {
            name:'Categ2',
            description:'Petit description',
            image:{image}
        },
        {
            name:'Categ3',
            description:'Petit description',
            image:{image}
        },
    ];
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const productTemplate = (product) => {
        return (
            <div className=" surface-border border-round m-2 text-center py-5 ">
                <GroundHeader product={product}/>
            </div>
        );
    };
    return (
        <header id="banner" className="scrollto clearfix" a-enllax-ratio=".5">
            <NavBar />
            <Carousel value={products} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </header>
    );
}