import React from "react";
import './css/Crud.css'

export function Registro({ id, titleProd, priceProd, imgProd, editar, eliminar }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{titleProd}</td>
            <td>{priceProd}</td>
            <td>{imgProd}</td>
            <td className="botonesTd">
                <button className="warning" onClick={editar}>Editar</button>
                <button className="danger" onClick={eliminar}>Eliminar</button>
            </td>
        </tr>
    );
}
