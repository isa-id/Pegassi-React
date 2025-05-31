import React from "react";
import './css/info.css'
export function ArtPrinc() {
    return (
        <>
            <div className="compInfo">
                <div className="headerArt">
                    <h1>Encuentra tu carro ideal</h1>
                </div>
                <section className="ArtHover">
                    <div className="imgHover">
                        <img src="https://www.carroya.com/noticias/sites/default/files/esta-sera-la-vitrina-movil-de-carroya.webp" alt="" />
                    </div>
                    <div className="contHover">
                        <p>En nuestra tienda online, tienes acceso a una amplia selección de carros nuevos y usados, cuidadosamente seleccionados para cumplir con tus necesidades y presupuesto. Filtra por marca, modelo, año o características y encuentra el vehículo que se ajusta a tu estilo de vida.

                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}