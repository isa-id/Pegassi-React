import React from 'react';
import './css/Card.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/actions';


export function CardContact({ solicitudValue, textareaValue, resetForm }) {
    const cards = useSelector(state => state.storeCards.cards);
    const dispatch = useDispatch();
    const guardarData = () => {
        let idActual = cards.length + 1;
        let newCard = {
            id: idActual,
            solicitud: solicitudValue,
            contenido: textareaValue
        };
        dispatch(increment(newCard));

        resetForm(); // Reiniciar el formulario después de enviar
    };

    if (!solicitudValue || !textareaValue) {
        return (
            <div className="compCard">
                <div className="headerCard">
                    <b className="titleCard">Carta de contacto</b>
                </div>
                <div className="cardHolder">
                    <p className="esperando">Esperando los datos...</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="compCard">
                <div className="headerCard">
                    <b className="titleCard">Carta de contacto</b>
                </div>

                <div className="cardHolder">
                    <b className="tipoSolicitud">Solicitud:</b>
                    <p className="solicitudValue">{solicitudValue}</p>
                    <b className="tipoSolicitud">Contenido</b>
                    <p className="solicitudValue">{textareaValue}</p>
                </div>
                
                <div className="buttonPlace">
                    <button type="button" className="buttonCreate" onClick={guardarData}>
                        Enviar {solicitudValue}
                    </button>
                </div>
            </div>
        );
    }
}
