import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact}) => {
    return (
        <div>
            <h3>Nombre: {contact.nombre} {contact.apellido}</h3>
            <h4>Email : {contact.email}</h4>
            <h5>{contact.conectado ? "Contacto En Línea" : "Contacto No Disponible"}</h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ContactComponent;
