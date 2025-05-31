import React from "react";
import "./css/Foot.css"

export function Foot() {
    return(
        <>
            <footer className="Foot">
                <nav className="Fot">
                    <ul>
                        <li>Direccion:</li>
                        <li>Correo de Contacto:</li>
                        <li>Redes Sociales:</li>
                    </ul>

                    <ul>
                        <li>Cra 58 #89-41  Local #89</li>
                        <li>Pegassi@gmail.com</li>
                        <li>PegassiCar</li>
                    </ul>

                    <ul>
                        <li>Telefono:</li>
                        <li>Celular:</li>
                        <li>¿Necesitas Ayuda?</li>
                    </ul>

                    <ul>
                        <li>2316595</li>
                        <li>359 789 4122</li>
                        <li>Support@Help.com</li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}