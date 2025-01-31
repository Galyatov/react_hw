import React, { useState } from "react";

const ContactForm = ({ onSave, onCancel }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && phone) {
            onSave({ firstName, lastName, phone });
            setFirstName("");
            setLastName("");
            setPhone("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Ім'я:</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div>
                <label>Прізвище:</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Телефон:</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <button className="add-btn" type="submit">Зберегти</button>
            <button className="delete-btn" type="button" onClick={onCancel}>Скасувати</button>
        </form>
    );
};

export default ContactForm;
