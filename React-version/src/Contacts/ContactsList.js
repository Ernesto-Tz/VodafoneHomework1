import { useContext } from "react";

import ContactsContext from "../Store/contacts-context.js";
import ContactItem from "./ContactItem.js";
// import TitleBar from "../Layout/TitleBar/TitleBar.js";
import classes from "./ContactsList.module.css";

const ContactsList = (props) => {
  const contactsCtx = useContext(ContactsContext);

  const list = (
    <ul>
      {contactsCtx.contacts.map((item) => (
        <ContactItem
          key={item.id}
          id = {item.id}
          contact = {item}
          onClick={props.contactViewActive}
        />
      ))}
    </ul>
  );

  return (
    <div className={`${classes.container}`}>
      {/* <TitleBar contacts={contactsCtx.contacts}/> */}
      <div className={`${classes.contacts}`}>
        {list}
      </div>
    </div>
  );
};

export default ContactsList;
