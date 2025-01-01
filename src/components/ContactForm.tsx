import React, { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";

const ContactForm = () => {
  const { addContact } = useContext(ContactContext)!;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, phone };
    addContact(newContact);
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
