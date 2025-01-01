import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const SearchContact = () => {
  const { searchTerm, setSearchTerm } = useContext(ContactContext)!;

  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchContact;
