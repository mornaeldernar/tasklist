import React from 'react';
import PropTypes from 'prop-types';

const ContactB = ({conectado}) => {
    return (
        <div>
            <h5>{conectado ? "Contacto En Línea" : "Contacto No Disponible"}</h5>
        </div>
    );
};


ContactB.propTypes = {
    conectado : PropTypes.bool
};


export default ContactB;
