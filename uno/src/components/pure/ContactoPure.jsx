import React from 'react';
import PropTypes from 'prop-types';
import { ContactoModel } from '../../model/ContactoModel.class';


const ContactoPure = ({ contacto }) => {

    return (
        <div>
            <h1>
                Nombre: { contacto.nombre }
            </h1>
            <h2>
                Apellido: { contacto.apellido }
            </h2>
            <h3>
                Email: { contacto.email }
            </h3>
            <h4>
                Conectado: { contacto.conectado ? 'Contacto en línea' : 'Contacto no disponible' }
            </h4>
        </div>
    );
    
};


ContactoPure.propTypes = {
    contacto: PropTypes.instanceOf(ContactoModel)
};


export default ContactoPure;
