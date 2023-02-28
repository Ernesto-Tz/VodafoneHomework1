import contacts from "../utils/contacts.js";
import classes from "./ContactsList.module.css";

const ContactsList = (props) => {
  return (
    <div className={`${classes.container}`}>
      <div className={`${classes.contacts}`}>
        <ul>
          {contacts.map((item) => (
            <li>
              {item.name}: {item.phone} - {item.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactsList;
