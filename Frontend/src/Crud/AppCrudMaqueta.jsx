import React from "react";
import './css/Crud.css'
import { Registro } from "./CrudRegistro";

// let registros = [
//     {
//         idcar: 1,
//         carname: "Porsche 718 Cayman",
//         carprice: 710000,
//         carimage: "https://hips.hearstapps.com/hmg-prod/images/gt4-rs-06-1637137843.jpg?crop=1xw:1xh;center,top&resize=980:*",
//     },
//     {
//         id: 2,
//         imgProd: "https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg?crop=0.891xw:0.704xh;0.0289xw,0.172xh&resize=980:*",
//         titleProd: "Ford Mustang Shelby GT500",
//         priceProd: 550000
//     },
//     {
//         id: 3,
//         imgProd: "https://hips.hearstapps.com/hmg-prod/images/10best-2022-chevrolet-corvette-urbano-101-1637104242.jpg?crop=0.422xw:0.316xh;0.299xw,0.395xh&resize=980:*",
//         titleProd: "Chevrolet Corvette",
//         priceProd: 990000
//     },
//     {
//         id: 4,
//         imgProd: "https://hips.hearstapps.com/hmg-prod/images/p20-0586-a3-rgb-1610471756.jpg?crop=0.372xw:0.282xh;0.342xw,0.394xh&resize=980:*",
//         titleProd: "Porsche 999 Boxster",
//         priceProd: 1100000
//     }
// ]


export function AppCrudMaqueta() {

    const editar = (id, imgProd, titleProd, priceProd) => {
        navigate(`/product/${id}`, {
            state: { imgProd, titleProd, priceProd }
        });
    };

    const eliminar = (id, imgProd, titleProd, priceProd) => {
        //Maqueta
    };

    return (
        <>
            <h1 className="crudTitle"> Crud de vehículos </h1>
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
                        {registros.map(({ id, titleProd, priceProd, imgProd, editar, eliminar }) => (
                            <Registro
                                key={id}
                                id={id}
                                titleProd={titleProd}
                                priceProd={priceProd}
                                imgProd={imgProd}
                                editar={editar}
                                eliminar={eliminar}
                            />
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}