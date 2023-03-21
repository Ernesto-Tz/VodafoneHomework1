import { useEffect, useState, useContext } from "react";
import styles from "./TitleBar.module.css";
import ContactsContext from "../../Store/contacts-context";

const TitleBar = () => {
  const [lettersArray, setLettersArray] = useState([]);
  const contactsCtx = useContext(ContactsContext);

  useEffect(() => {
    let tempArr = [];
    for (const contact of contactsCtx.contacts) {
      if (!tempArr.includes(contact.name[0].toUpperCase())) {
        const newVal = contact.name[0].toUpperCase();
        tempArr.push(newVal);
      }
    }
    tempArr.sort();
    setLettersArray((prevState) => {
      return [...tempArr];
    });
  }, [contactsCtx.contacts]);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.title} text-center`}>
        <h3>Contacts</h3>
      </div>
      <div className={`${styles["underline-contacts"]}`} />
      <div className={styles["filter-table"]}>
        {lettersArray.map((item, index) => (
          <div className={styles["filter-element"]} key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default TitleBar;
