import { useContext } from "react";

import ContactsContext from "../../Store/contacts-context";
import Modal from "../../UI/Modal";
import styles from "./EditContact.module.css";

const ContactView = (props) => {
  const contCtx = useContext(ContactsContext);

  return (
    <Modal onClose={props.onClose}>
      <h3 className="text-center mt-3 mb-4">Edit Contact</h3>
      <div className={`mx-3 ${styles['contact-row']}`}>
        <label className={styles.label}>Name:</label>
        <input className={styles.input} value={contCtx.displayedContact.name}/>
      </div>
      <div className={`mx-3 ${styles['contact-row']}`}>
        <label className={styles.label}>Phone:</label>
        <input className={styles.input} value={contCtx.displayedContact.phone}/>
      </div>
      <div className={`mx-3 ${styles['contact-row']}`}>
        <label className={styles.label}>Email:</label>
        <input className={styles.input} value={contCtx.displayedContact.email}/>
      </div>
      <div className={`mt-5 mb-3 ${styles.actions}`}>
        <button className={`btn ${styles.delete}`}>Cancel</button>
        <button className={`btn ${styles.edit}`}>Save</button>
      </div>
    </Modal>
  );
};

export default ContactView;
