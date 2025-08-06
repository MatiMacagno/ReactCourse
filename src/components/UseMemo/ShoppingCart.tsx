// objetivo: Memorizar(cache) el resultado de ejecutar una función costosa, para evitar que se vuelva a llamar el metodo.
// Controlar si el beneficio de memorizarlo es superior al de recalcular.

import { useMemo, useState } from "react";

// Ejemplo:
// Tenemos una lista de compras y ya calculaste el costo total de hacer toda la compra.
// Si no agramamos nada ni tampoco cambo nada, cual es el costo total?

interface Item {
    id: number;
    name: string;
    price: number;
}

export const ShoppingCart = () => {
    const [items, setItems] = useState<Item[]>([
        {
            id: 1,
            name: "Manzanas",
            price: 1.5
        },
        {
            id: 2,
            name: "Pan",
            price: 2.0
        },
        {
            id: 3,
            name: "Leche",
            price: 1.2
        }
    ])

    const [discount, setDiscount] = useState<number>(0)

    // const totalCost = items.reduce((total, item) => total + item.price, 0) - discount;
    const totalCost = useMemo(() => {
        return items.reduce((total, item) => total + item.price, 0);
        }, [items] 
    )


    const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);

    const addItem = () => {
        const newItem: Item = {
            id: items.length + 1,
            name: `Item ${items.length + 1}`,
            price: Math.random() * 5
        }
        setItems([...items, newItem])
    }

    return (
        <div>
            <h2>Lista de compras</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}: ${item.price.toFixed(2)}</li>
                ))}
            </ul>
            <p>Total: ${totalCost.toFixed(2)}</p>
            <p>Descuento: $
                <input 
                    type="number" 
                    value={discount} 
                    onChange={e => setDiscount(Number(e.target.value))} 
                    min="0" 
                    max={totalCost} 
                />
            </p>
            <p>Costo Final: ${finalCost.toFixed(2)}</p>
            <button onClick={addItem}>Agregar Producto</button>
        </div>
    )
}