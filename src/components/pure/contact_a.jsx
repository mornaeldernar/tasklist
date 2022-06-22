import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactB from './contact_b';

const ContactA = ({ contact }) => {
    return (
        <div>
            <h3>Nombre: { contact.nombre } { contact.apellido }</h3>
            <h4>Email : { contact.email }</h4>
            <ContactB conectado={ contact.conectado } />
        </div>
    );
};


ContactA.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ContactA;