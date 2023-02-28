import { Fragment } from "react";

import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import ContactsList from "./Contacts/ContactsList";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <ContactsList />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
