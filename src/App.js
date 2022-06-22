
import './App.css';
import ContactA from './components/pure/contact_a';
import { Contact } from './models/contact.class';

function App() {

  const contacto = new Contact("Nombre","Apellido","Email@mail.com",false);

  return (
    <div className="App">
      <header className="App-Header">
        {/* Componente de Contacto */}
        <ContactA contact={contacto}/>
      </header>
    </div>

  );
}

export default App;
