import { useState } from "react";

import ContactsProvider from "./Store/ContactsProvider";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import ContactsList from "./Contacts/ContactsList";
import ContactView from "./Contacts/ContactView/ContactView";

function App() {

  const [showContactView,setShowContactView] = useState(false);
  const [showAddContact,setShowAddContact] = useState(false);

  const toggleContactView = () => {
    setShowContactView(!showContactView);
  }

  const toggleAddContact = () => {
    setShowAddContact(!showAddContact);
  }

  return (
    <ContactsProvider>
      {showContactView && <ContactView onClose={toggleContactView}/>}
      <Header />
      <main>
        <ContactsList contactViewActive={toggleContactView}/>
      </main>
      <Footer />
    </ContactsProvider>
  );
}

export default App;
