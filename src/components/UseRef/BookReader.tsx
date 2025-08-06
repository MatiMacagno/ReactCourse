// objetivo: nos permite crear una referencia mutable que persiste durante el ciclo de vida del comoponente
// SIN causar un re-render

// objetivo 2: hacer referencia a un elemento del DOM

// Ejemplo: un marcador de un libro que utilizamos para guardar la ultima posición de la lectura.
// No modifica el contenido del libro.
import { useRef, useState } from 'react';

export const BookReader = () => {
    const currentPageRef = useRef<number>(1);
    const [currentPage, setCurrentPage] = useState(1)

    const nextPage = () => {
        currentPageRef.current += 1;
        console.log("Avanzando a la página:", currentPageRef.current);
    }
    
    const previousPage = () => {
        if (currentPageRef.current === 1) {
            console.log("No se puede retroceder porque ya estás en la primera página.");
            return;    
        }

        currentPageRef.current -= 1;
        console.log("Retrocediendo a la página:", currentPageRef.current);
    }

    const goToPage = (page: number) => {
        if (page < 1) {
            console.log("No se puede ir a una página menor que 1.");
            return;
        }
        setCurrentPage(page);
        currentPageRef.current = page;
        console.log("Yendo a la página:", currentPageRef.current);
    }

    return (
        <div>
            <h2>Lector de Libros</h2>
            <p>Página actual: {currentPageRef.current}</p>
            <p>Pagina actual[STATE]: {currentPage}</p>
            <button onClick={previousPage}>Página Anterior</button>
            <button onClick={nextPage}>Página Siguiente</button>
            <button onClick={() => goToPage(10)}>Ir a la Página 10</button>
        </div>
    );
}