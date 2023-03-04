import { useEffect, useState } from "react";

const TitleBar = (props) => {
  const [lettersArray, setLettersArray] = useState([]);

  useEffect(() => {
    // *** TODO: Fix this logic - pushing all elements. 
    for (const contact of props.contacts) {
      // if (lettersArray.length === 0) {
      //   const newVal = contact.name[0].toUpperCase();
      //   setLettersArray((prevState) => {
      //     return [...prevState, newVal];
      //   });
      // }
      console.log(lettersArray);
      if (!lettersArray.includes(contact.name[0].toUpperCase())) {
        console.log(contact.name);
        const newVal = contact.name[0].toUpperCase();
        setLettersArray((prevState) => {
          return [...prevState, newVal];
        });
      }
      console.log(lettersArray.length);
    }

  }, [props.contacts]);
  
  lettersArray.sort();
  
  console.log(lettersArray)
  return (
    <div>
      <ul>
        {lettersArray.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TitleBar;
