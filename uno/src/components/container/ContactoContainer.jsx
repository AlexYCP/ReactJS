import React from 'react';
import { ContactoModel } from '../../model/ContactoModel.class';
import ContactoPure from '../pure/ContactoPure';


const ContactoContainer = () => {

    const contactoPorDefecto = new ContactoModel('Yosimar', 'Pineda', '1998aycp@gmail.com', true);

    return (
        <div>
            <div>
                <h1>Contacto:</h1>
                <ContactoPure contacto={contactoPorDefecto}></ContactoPure>
            </div>            
        </div>
    );
    
};


export default ContactoContainer;
