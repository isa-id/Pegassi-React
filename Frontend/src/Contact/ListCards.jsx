import React from 'react';
import './css/Card.css'
import { useSelector, useDispatch } from 'react-redux';
import { removeCard, editCard } from '../redux/actions';

export function Lists() {
    const cards = useSelector((state) => state.storeCards.cards);

    if (cards.length < 1) {
        return <h1 className="contactTitle">Esperando cartas...</h1>;
    } else {
        return (
            <>
                <h1 className="contactTitle">Lista de cartas</h1>
                <section className="compLists">
                    {cards.map(({ id, solicitud, contenido }) => (
                        <ListCards
                            key={id}
                            id={id}
                            solicitudValue={solicitud}
                            textareaValue={contenido}
                        />
                    ))}
                </section>
            </>
        );
    }
}

export function ListCards({ solicitudValue, textareaValue, id }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        // Mostrar ventana de confirmación
        const confirmDelete = window.confirm(
            `¿Estás seguro de que deseas eliminar esta ${solicitudValue}?`
        );

        if (confirmDelete) {
            dispatch(removeCard(id)); // Eliminar la tarjeta si el usuario confirma
        }
    };

    const handleEdit = () => {
        // Pedir nuevos valores usando prompt
        const newContenido = prompt("Editar contenido:", textareaValue);

        // Verificar que no sean valores nulos o vacíos
        if (newContenido) {
            dispatch(editCard(id, {contenido: newContenido }));
        }
    };

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
                <button className="buttonEdit" onClick={handleEdit}>
                    Editar
                </button>
                <button className="buttonDelete" onClick={handleDelete}>
                    Eliminar
                </button>
            </div>
        </div>
    );
}