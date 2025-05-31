import React from "react";
import { Navbar } from "../ComponentsHF/Nav";
import { Foot } from "../ComponentsHF/Footer";
import { Formulario } from "./Form";
import './css/form.css'
import { InfoContact } from "./InfoContact";
import { Provider } from 'react-redux';
import { store } from '../redux/store'
import { ListCards } from "./ListCards";
import { Lists } from "./ListCards";

export function AppContact() {
    return (
        <>
            <Provider store={store}>    
                <h1 className="contactTitle">Información de contactos</h1>
                <InfoContact />
                <h1 className="contactTitle">Sección de contacto</h1>
                <section className="compContact">
                    <Formulario />
                </section>
                    <Lists/>
            </Provider>
        </>
    )
}