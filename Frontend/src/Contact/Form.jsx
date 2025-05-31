import React, { useState } from 'react';
import './css/Form.css';
import { CardContact } from './Card';

export function Formulario() {
    const [selectValue, setSelectValue] = useState("");
    const [textareaValue, setTextareaValue] = useState("");

    const handleSelectChange = (e) => {
        setSelectValue(e.target.value);
    };

    const handleTextareaChange = (value) => {
        setTextareaValue(value); 
    };

    const resetForm = () => {
        setSelectValue(""); 
        setTextareaValue(""); 
    };

    return (
        <>
            <div className="compForm">
                <div className="headerForm">
                    <b className="titleForm">¡Contáctanos!</b>
                    <p className="subtitleForm">Completa el siguiente formulario de contacto</p>
                </div>
                <div className="formHolder">
                    <form>
                        <label htmlFor="PQRSF">
                            <p>¿Qué tipo de solicitud desea realizar?</p>
                            <select
                                id="PQRSF"
                                className="PQRSFForm"
                                value={selectValue}
                                onChange={handleSelectChange}
                            >
                                <option value="">Seleccione una opción...</option>
                                <option value="Petición">Petición</option>
                                <option value="Queja">Queja</option>
                                <option value="Reclamo">Reclamo</option>
                                <option value="Sugerencia">Sugerencia</option>
                                <option value="Felicitación">Felicitación</option>
                            </select>
                        </label>
                        <br />
                        <TextareaSolicitud solicitudValue={selectValue} onTextareaChange={handleTextareaChange} />
                        <br />
                    </form>
                </div>
            </div>
            <CardContact
                solicitudValue={selectValue}
                textareaValue={textareaValue}
                resetForm={resetForm} // Pasar la función resetForm
            />
        </>
    );
}

export function TextareaSolicitud({ solicitudValue, onTextareaChange }) {
    const handleTextareaChange = (event) => {
        onTextareaChange(event.target.value); // Comunicar el valor al componente principal
    };

    if (!solicitudValue) {
        return <p className="esperando">Esperando una solicitud...</p>;
    } else {
        return (
            <label htmlFor="textArea">
                <p>Ingrese su {solicitudValue || "solicitud"}</p>
                <textarea
                    id="textArea"
                    className="textareaForm"
                    onChange={handleTextareaChange}
                    placeholder={`Escriba aquí su ${solicitudValue || "solicitud"}...`}
                ></textarea>
            </label>
        );
    }
}
