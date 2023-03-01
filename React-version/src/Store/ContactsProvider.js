import { useState } from "react";

import ContactsContext from "./contacts-context";
import contacts from "../utils/contacts";

const ContactsProvider = (props) => {
  const [contactItems, setContactItems] = useState(contacts);

  const addItemHandler = (item) => {};
  const editItemHandler = (id) => {};
  const deleteItemHandler = (id) => {};

  const contContext = {};

  return (
    <ContactsContext.Provider
      value={{
        contacts: contactItems,
        addContact: addItemHandler,
        editContact: editItemHandler,
        deleteContact: deleteItemHandler,
      }}
    >
      {props.children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
