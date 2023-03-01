import React from "react";

const ContactsContext = React.createContext({
  contacts: [],
  addContact: (item) => {},
  editContact: (id) => {},
  deleteContact: (id) => {}
});


export default ContactsContext;