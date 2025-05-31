import React from "react";
import { useLocation } from 'react-router-dom';
import './css/Focus.css';

export function FocusProduct() {
    const { state } = useLocation();
    const { imgProd, titleProd, priceProd } = state || {};

    if (!state) {
        return <div className="NoEncontrado"> <p>No se encontró el producto</p></div>;
    }
    const handleComprar = () => {
        alert('Grr dame tus datos credicticios')
    }

    return (
        <>
        <section className="focusComponent">
            <div className="focusImagen">
                <img src={imgProd} alt={titleProd} />
            </div>
            <div className="focusInfoHover">
                <div className="focusInfo">
                    <h1 className="focusTitle">{titleProd}</h1>
                    <p className="focusPrice">${priceProd} USD</p>
                    <p className="focusContent">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit voluptate impedit distinctio unde dolorem modi voluptatibus dolores vitae velit esse tenetur accusantium quidem ab, eum suscipit, beatae obcaecati et.
                    </p>
                    <p className="contact">Número de contacto: 312 691 12 61</p>
                </div>
                <div className="focusButton">
                    <button onClick={ handleComprar }>Comprar</button>
                </div>
            </div>
        </section>
        </>
    );
}
