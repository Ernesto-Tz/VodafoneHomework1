import { useState } from "react";

import ContactsProvider from "./Store/ContactsProvider";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import ContactsList from "./Contacts/ContactsList";
import ContactView from "./Contacts/ContactView/ContactView";
import EditContact from "./Contacts/EditContact/EditContact";

function App() {
  const [showContactView, setShowContactView] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);
  const [showEditContact, setShowEditContact] = useState(false);

  const toggleContactView = () => {
    setShowContactView(!showContactView);
  };

  const toggleAddContact = () => {
    setShowAddContact(!showAddContact);
  };

  const toggleEditContact = () => {
    setShowContactView(false);
    setShowEditContact(!showEditContact);
  };

  return (
    <ContactsProvider>
      {showContactView && (
        <ContactView
          onClose={toggleContactView}
          onEditContact={toggleEditContact}
        />
      )}
      {showEditContact && <EditContact onClose={toggleEditContact} />}
      <Header />
      <main>
        <ContactsList contactViewActive={toggleContactView} />
      </main>
      <Footer />
    </ContactsProvider>
  );
}

export default App;
