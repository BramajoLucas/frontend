import React from 'react';
import { Link } from 'react-router';
import "./ContactItem.css"


const ContactItem = ({ contact }) => {
    return (
        <div className='contact-item'>
        <Link to={`/contact/${contact.id}/messages`}>
            <h2 className='name'>{contact.name}</h2>
            <img className='avatar' src={contact.avatar} alt={contact.name} width={100} />
            <span className='last-connection'>Last Connection: {contact.lastConnection}</span>
            <span className='connection-status'>Connection Status: {contact.connectionStatus}</span>
        </Link>
        </div>
    );
};

export default ContactItem;