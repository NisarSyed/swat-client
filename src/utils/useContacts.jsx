import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ContactContext = createContext();


export const ContactProvider = ({ children }) => {
    const [contact, setContact] = useState([]); 
    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/contact');
                setContact(response.data);
            } catch (error) {
                console.error('Error fetching contact:', error);
            }
        };
        fetchContact();
    }, []);

    console.log(contact);

    return (
        <ContactContext.Provider value={{ contact }}>
            {children}
        </ContactContext.Provider>
    );
}

export const useContact = () => {
    return useContext(ContactContext);
};
