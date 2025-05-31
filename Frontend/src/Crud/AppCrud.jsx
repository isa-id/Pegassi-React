import React, { useState, useEffect } from "react";
import "./css/Crud.css";
import { Registro } from "./CrudRegistro";

export function Editar({ editing, registro, onSave, onCancel }) {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        // Sincroniza el estado con el registro actual cuando cambia
        setFormData(registro || {});
    }, [registro]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData); // Envía los datos actualizados
    };

    if (!editing) {
        return <h1>No se está editando ningún registro</h1>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="imgProd">
                URL de la imagen:
                <input
                    type="text"
                    name="imgProd"
                    value={formData.imgProd || ""}
                    onChange={handleChange}
                    placeholder="URL de la imagen"
                />
            </label>
            <br />
            <label htmlFor="titleProd">
                Nombre del vehículo:
                <input
                    type="text"
                    name="titleProd"
                    value={formData.titleProd || ""}
                    onChange={handleChange}
                    placeholder="Nombre del vehículo"
                />
            </label>
            <br />
            <label htmlFor="priceProd">
                Precio del vehículo:
                <input
                    type="number"
                    name="priceProd"
                    value={formData.priceProd || ""}
                    onChange={handleChange}
                    placeholder="Precio del vehículo"
                />
            </label>
            <br />
            <button type="submit" className="enviar">Guardar</button>
            <button type="button" onClick={onCancel} className="danger">
                Cancelar
            </button>
        </form>
    );
}

export function AppCrud() {
    const [editing, setEditing] = useState(false);
    const [currentRegistro, setCurrentRegistro] = useState(null); // Registro actual que se edita
    const [registros, setRegistros] = useState([
        {
            id: 1,
            imgProd: "https://hips.hearstapps.com/hmg-prod/images/gt4-rs-06-1637137843.jpg?crop=1xw:1xh;center,top&resize=980:*",
            titleProd: "Porsche 718 Cayman",
            priceProd: 710000
        },
        {
            id: 2,
            imgProd: "https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg?crop=0.891xw:0.704xh;0.0289xw,0.172xh&resize=980:*",
            titleProd: "Ford Mustang Shelby GT500",
            priceProd: 550000
        },
        {
            id: 3,
            imgProd: "https://hips.hearstapps.com/hmg-prod/images/10best-2022-chevrolet-corvette-urbano-101-1637104242.jpg?crop=0.422xw:0.316xh;0.299xw,0.395xh&resize=980:*",
            titleProd: "Chevrolet Corvette",
            priceProd: 990000
        },
        {
            id: 4,
            imgProd: "https://hips.hearstapps.com/hmg-prod/images/p20-0586-a3-rgb-1610471756.jpg?crop=0.372xw:0.282xh;0.342xw,0.394xh&resize=980:*",
            titleProd: "Porsche 718 Boxster",
            priceProd: 1100000
        }
    ]);

    const editar = (id) => {
        const registro = registros.find((reg) => reg.id === id);
        setCurrentRegistro(registro);
        setEditing(true);
    };

    const eliminar = (id) => {
        setRegistros(registros.filter((registro) => registro.id !== id));
    };

    const guardarEdicion = (registroEditado) => {
        setRegistros(
            registros.map((registro) =>
                registro.id === registroEditado.id ? registroEditado : registro
            )
        );
        setEditing(false);
        setCurrentRegistro(null);
    };

    const cancelarEdicion = () => {
        setEditing(false);
        setCurrentRegistro(null);
    };

    return (
        <>
            <Editar
                editing={editing}
                registro={currentRegistro}
                onSave={guardarEdicion}
                onCancel={cancelarEdicion}
            />
            <h1 className="crudTitle">Crud de vehículos</h1>
            <section className="crudHover">
                <table className="tableCrud">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre del vehículo</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                            <th>Editar / Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registros.map(({ id, titleProd, priceProd, imgProd }) => (
                            <Registro
                                key={id}
                                id={id}
                                titleProd={titleProd}
                                priceProd={priceProd}
                                imgProd={imgProd}
                                editar={() => editar(id)} // Pasa el ID para editar
                                eliminar={() => eliminar(id)} // Pasa el ID para eliminar
                            />
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}
