
import React, { useEffect } from 'react';
// import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
// import { Tag } from 'primereact/tag';
// import { ProductService } from './service/ProductService';
import Contenue from './Contenue';
import image from '../../assets/images/banner-images/banner-image-1.jpg';

export default function Carousse() {
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
    ] 
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

    useEffect(() => {
        // ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);
    
    const productTemplate = (product) => {
        // console.log(product);
        return (
            <div className=" surface-border border-round m-2 text-center py-5 ">
                <Contenue product={product}/>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
        