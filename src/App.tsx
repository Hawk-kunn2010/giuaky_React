import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchContact from "./components/SearchContact";
import { ContactProvider } from "./context/ContactContext";

const App = () => {
  return (
    <ContactProvider>
      <div>
        <h1>Contact Manager</h1>
        <SearchContact />
        <ContactForm />
        <ContactList />
      </div>
    </ContactProvider>
  );
};

export default App;
