import { useRef } from 'react';

export const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        if (!inputRef.current) {
            console.log("No existe la referencia al input");
            return;
        } 
        inputRef.current.focus();
    }

    return (
        <div>
            <h2>Focus Input</h2>
            <input ref={inputRef} type="text" placeholder="Escribe algo..." />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
}

