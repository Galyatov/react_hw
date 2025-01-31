import React, { useState, useEffect } from "react";
import ContactsTable from "./ContactsTable";
import ContactForm from "./ContactForm";
import "./App.css";

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) =>
                setContacts(
                    data.map((user) => ({
                        id: user.id,
                        firstName: user.name.split(" ")[0],
                        lastName: user.name.split(" ")[1] || "",
                        phone: user.phone,
                    }))
                )
            );
    }, []);

    const handleDelete = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const handleAddContact = (newContact) => {
        setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
        setShowForm(false);
    };

    return (
        <div className="container">
            <h2>Список контактів</h2>
            <ContactsTable contacts={contacts} onDelete={handleDelete} />
            <button className="add-btn" onClick={() => setShowForm(true)}>Додати контакт</button>
            {showForm && (
                <ContactForm
                    onSave={handleAddContact}
                    onCancel={() => setShowForm(false)}
                />
            )}
        </div>
    );
};

export default App;
