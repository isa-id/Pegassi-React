import React from "react";
import './css/catalog.css';

export function CardProduct({ id, imgProd, titleProd, priceProd, handleBuyClick }) {
    return (
        <div className="cardContenedor">
            <div className="cardImagen">
                <img src={imgProd} alt={titleProd} />
            </div>
            <div className="cardInfo">
                <p className="cardTitle">{titleProd}</p>
                <p className="cardPrice">${priceProd} USD</p>
                <div className="cardButton">
                    <button onClick={() => handleBuyClick(id, imgProd, titleProd, priceProd)}>Comprar</button>
                </div>
            </div>
        </div>
    );
}
