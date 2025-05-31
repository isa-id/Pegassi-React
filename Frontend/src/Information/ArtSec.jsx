import React from "react";
import './css/info.css'
export function ArtSec() {
    return (
        <>
            <div className="compInfo">
                <div className="headerArt">
                    <h1>Compra fácil y segura</h1>
                </div>
                <section className="ArtHoverSec">
                    <div className="imgHover">
                        <img src="https://www.carroya.com/noticias/sites/default/files/entradillas/451918057pasos-comprar-carro.jpg" alt="" />
                    </div>
                    <div className="contHover">
                        <p>Adquirir un carro nunca fue tan sencillo. Disfruta de un proceso de compra transparente y seguro, con opciones de financiamiento flexible y asesoría personalizada en cada paso. Nos aseguramos de que cada compra esté respaldada por garantías y certificados de calidad.
                            
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}