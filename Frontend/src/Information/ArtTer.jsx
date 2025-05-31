import React from "react";
import './css/info.css'
export function ArtTer() {
    return (
        <>
            <div className="compInfo">
                <div className="headerArt">
                    <h1>Servicio postventa y soporte</h1>
                </div>
                <section className="ArtHover">
                    <div className="imgHover">
                        <img src="https://mitsubishi-motors.com.co/blog/wp-content/uploads/2022/10/conoce-nuestro-servicio-postventa.gif" alt="" />
                    </div>
                    <div className="contHover">
                        <p>Nuestro compromiso no termina con tu compra. Ofrecemos servicios de mantenimiento, asistencia técnica y acceso a repuestos originales para garantizar que tu vehículo se mantenga en las mejores condiciones. Estamos aquí para acompañarte en cada kilómetro.
                            
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}