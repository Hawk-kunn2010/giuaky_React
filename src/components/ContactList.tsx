import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { contacts, searchTerm } = useContext(ContactContext)!;

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
  );

  return (
    <div>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
