import ContactsProvider from "./Store/ContactsProvider";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import ContactsList from "./Contacts/ContactsList";

function App() {
  return (
    <ContactsProvider>
      <Header />
      <main>
        <ContactsList />
      </main>
      <Footer />
    </ContactsProvider>
  );
}

export default App;
