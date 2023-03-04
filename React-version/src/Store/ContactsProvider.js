import { useState } from "react";

import ContactsContext from "./contacts-context";
import contacts from "../utils/contacts";

const ContactsProvider = (props) => {
  const [contactItems, setContactItems] = useState(contacts);
  const [displayedContact, setDisplayedContact] = useState({});

  const addItemHandler = (item) => {};
  const editItemHandler = (item) => {};
  const displayItemHandler = (item) => {
    setDisplayedContact(prevState => ({
      ...item
    }));
  };
  const deleteItemHandler = (id) => {};

  return (
    <ContactsContext.Provider
      value={{
        contacts: contactItems,
        displayedContact: displayedContact,
        addContact: addItemHandler,
        editContact: editItemHandler,
        deleteContact: deleteItemHandler,
        displayItem: displayItemHandler
      }}
    >
      {props.children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
