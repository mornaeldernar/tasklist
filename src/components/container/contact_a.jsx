import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactA = () => {
    const defaultContact = new Contact("Nombre","Apellido","email@email.com",false);

    return (
        <div>
            <ContactComponent contact={ defaultContact } />
        </div>
    );
};


export default ContactA;
