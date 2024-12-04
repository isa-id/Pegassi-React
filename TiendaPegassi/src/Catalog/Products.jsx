import React, { useState, useEffect } from "react";
import './css/catalog.css';
import { CardProduct } from "./CardProduct";
import { useNavigate } from 'react-router-dom';

export function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:1801/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al consumir la API");
                }
                return response.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error:", error));
    }, [products]);

    const navigate = useNavigate();

    const handleBuyClick = (id, imgProd, titleProd, priceProd) => {
        navigate(`/product/${id}`, {
            state: { imgProd, titleProd, priceProd }
        });
    };

    return (
        <>
            <h1 className="catalogTitle"> Catálogo de vehículos deportivos</h1>
            <section className="productsHover">
                {products.map(({ _id, carname, carprice, carimage }) => (
                    <CardProduct
                        key={_id}
                        id={_id}
                        imgProd={carimage}
                        titleProd={carname}
                        priceProd={carprice}
                        handleBuyClick={handleBuyClick}
                    />
                ))}
            </section>
        </>
    );
}
