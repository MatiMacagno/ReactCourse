// objetivo: Se utiliza para memorizar una instancia de una funcion.
// Hace que un hijo no renderice si no cambian sus dependencias.

// Ejemplo:
// Supongamos que tenes un numero de telefono al que llamas con frecuencia.
// En vez de marcarlo continuamente, lo guardas en los contactos del telefono.
// A menos el numero cambie siempre utilizo el mismo contacto.
import { memo, useCallback, useState } from "react";

interface Contact {
    id: number;
    name: string;
    phone: string;
}

interface ContactProps {
    contact: Contact;
    onCall: (name: string) => void;
}

const ContactCard = memo(({ contact, onCall }: ContactProps) => {
    console.log(`Rendering contact: ${contact.name}`);
    
    return (
        <div>
            <h3>{contact.name}</h3>
            <p>Phone: {contact.phone}</p>
            <button onClick={() => onCall(contact.name)}>Call</button>
        </div>
    );
})

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([
        { id: 1, name: "Alice", phone: "123-456-7890" },
        { id: 2, name: "Bob", phone: "987-654-3210" },
        { id: 3, name: "Charlie", phone: "555-555-5555" }
    ]);

    const [log, setLog] = useState<string>("");

    const makeCall = useCallback((name: string) => {
        console.log(`Calling ${name}`)
        setLog(`Calling ${name}`);
    }, []);

    const addContact = () => {
        const newContact: Contact = {
            id: contacts.length + 1,
            name: `Contact ${contacts.length + 1}`,
            phone: `000-000-${contacts.length + 1}`
        };
        setContacts([...contacts, newContact]);
    }

    return (
        <div>
            <h2>Phone Book</h2>
            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
            ))}
            <button onClick={addContact}>Add Contact</button>
            <h3>Call Log</h3>
            <p>{log}</p>
        </div>
    );
}