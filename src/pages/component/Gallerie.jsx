
import React, { useState} from 'react';
import { Galleria } from 'primereact/galleria';

export default function Gallerie() {
    const products = [
        {
            name:'Categ1'
        },
        {
            name:'Categ2'
        },
        {
            name:'Categ3'
        },
    ]
    const itemTemplate = (item) => {
        return (
            <div className="categorie" style={{'background-color':'green'}}>
                {item.name}
            </div>
        );
    };

    return (
        <div className="card">    
            <Galleria value={products} style={{ maxWidth: '840px' }} showThumbnails={false} showIndicators 
                    indicatorsPosition={'top'} item={itemTemplate} />
        </div>
    )
}
        