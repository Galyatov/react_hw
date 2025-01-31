import React from "react";

const ContactsTable = ({ contacts, onDelete }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>Телефон</th>
                <th>Дії</th>
            </tr>
            </thead>
            <tbody>
            {contacts.map((contact) => (
                <tr key={contact.id}>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.phone}</td>
                    <td>
                        <button className="delete-btn" onClick={() => onDelete(contact.id)}>Видалити</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ContactsTable;
