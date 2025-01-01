import React, { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";

interface ContactItemProps {
  contact: {
    id: number;
    name: string;
    phone: string;
  };
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const { updateContact, deleteContact } = useContext(ContactContext)!;
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [error, setError] = useState("");

  const handleUpdate = () => {
    if (name.length > 20) {
      setError("Name must be 20 characters or less");
      return;
    }
    if (!/^\d{10}$/.test) {
      setError("Phone number must be exactly 10 digits");
      return;
    }
    updateContact({ ...contact, name, phone });
    setIsEditing(false);
    setError("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      ) : (
        <>
          <span>{contact.name}</span>
          <span>{contact.phone}</span>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactItem;
