import { useState } from "react";

import ContactsContext from "./contacts-context";
import contacts from "../utils/contacts";

const ContactsProvider = (props) => {
  const [contactItems, setContactItems] = useState(contacts);
  const [displayedContact, setDisplayedContact] = useState({});

  const addItemHandler = (item) => {
    setContactItems(prevState => [...prevState, item]);
  };

  const editItemHandler = (item) => {
    const contactIndex = contactItems.findIndex(contact => contact.id === item.id);
    const contactToEdit = contactItems[contactIndex];
    const updatedItem = {...contactToEdit, name: item.name, phone: item.phone, email: item.email};
    let updatedContacts;
    updatedContacts = [...contactItems];
    updatedContacts[contactIndex] = updatedItem;
    setContactItems(prevState => ([...updatedContacts]));
  };

  const displayItemHandler = (item) => {
    setDisplayedContact({...item});
  };

  const deleteItemHandler = (id) => {  
    let updatedContacts;
    updatedContacts = contactItems.filter(item => item.id !== id);
    setContactItems(prevState => ([...updatedContacts]));
  };

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
