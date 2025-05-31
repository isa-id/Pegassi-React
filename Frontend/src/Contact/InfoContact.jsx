import React, { useState } from 'react';
import './css/Inf.css';

export function InfoContact() {
    return (
        <>
            <div className="compInf">
                <div className="headerInf">
                    <b className="titleInf">Contactos</b>
                    <p className="subtitleInf">Te invitamos a enviar tus solicitudes</p>
                </div>
                <div className="infoHolder">
                    <p>
                        La sección de contacto PQRSF (Preguntas, Quejas, Reclamos, Sugerencias y Felicitaciones) es un canal esencial de comunicación entre nuestra organización y nuestros usuarios. Esta área está diseñada para recibir, gestionar y dar respuesta a cualquier solicitud relacionada con nuestros productos o servicios, garantizando un trato transparente, eficiente y respetuoso hacia quienes confían en nosotros. <br />
                        A través de esta sección, los usuarios pueden expresar sus dudas sobre nuestros procesos, reportar inconvenientes, plantear sugerencias para mejorar, registrar reclamos en caso de insatisfacción o compartir palabras de agradecimiento por una experiencia satisfactoria. Cada categoría está claramente diferenciada para que el usuario pueda identificar y clasificar fácilmente su requerimiento, agilizando así su trámite y facilitando una pronta respuesta. <br />
                    </p>
                </div>
            </div>
        </>
    );
}
