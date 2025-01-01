import { createContext, ReactNode, useState } from "react";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactContextType {
  contacts: Contact[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  addContact: (contact: Contact) => void;
  updateContact: (contact: Contact) => void;
  deleteContact: (id: number) => void;
}

export const ContactContext = createContext<ContactContextType | undefined>(
  undefined
);

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (updatedContact: Contact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  const deleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        searchTerm,
        setSearchTerm,
        addContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
