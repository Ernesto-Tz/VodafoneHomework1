import { useEffect, useState, useContext } from "react";
import styles from "./TitleBar.module.css";
import ContactsContext from "../../Store/contacts-context";

const TitleBar = () => {
  const [lettersArray, setLettersArray] = useState([]);
  const contactsCtx = useContext(ContactsContext);

  useEffect(() => {
    // *** TODO: Fix this logic - pushing all elements.
    const createFilter = () => {
      for (const contact of contactsCtx.contacts) {
        // if (lettersArray.length === 0) {
        //   const newVal = contact.name[0].toUpperCase();
        //   console.log(newVal);
        //   setLettersArray((prevState) => {
        //     return [...prevState, newVal];
        //   });
        // }
        if (!lettersArray.includes(contact.name[0].toUpperCase())) {
          const newVal = contact.name[0].toUpperCase();
          console.log(newVal);
          setLettersArray((prevState) => {
            return [...prevState, newVal];
          });
        }
        console.log(lettersArray);
      }
    };
    createFilter();
  }, [contactsCtx.contacts, lettersArray]);

  lettersArray.sort();

  console.log(lettersArray);
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.title} text-center`}>
        <h3>Contacts</h3>
      </div>
      <div className={`${styles["underline-contacts"]}`} />
      <div className={styles['filter-table']}>
        {lettersArray.map((item) => (
          <div className={styles['filter-element']}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default TitleBar;
