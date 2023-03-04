import { useContext } from 'react';

import ContactsContext from '../../Store/contacts-context';
import Modal from '../../UI/Modal'

const ContactView = props  => {

  const contCtx = useContext(ContactsContext);

  return (
    <Modal onClose={props.onClose}>
      <p>{contCtx.displayedContact.name}</p>
      <p>{contCtx.displayedContact.phone}</p>
      <p>{contCtx.displayedContact.email}</p>
    </Modal>
  );
}

export default ContactView;