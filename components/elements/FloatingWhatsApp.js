"use client"; // Ensure this is a client-side component

import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const FloatingWhatsAppComponent = () => {
    return (
        <FloatingWhatsApp
            phoneNumber='923227942434'
            chatMessage='Hello, how can I assist you?'
            accountName='Ecomfidence'
            position='right'
            chatboxHeight={'auto'}
            darkMode='true'
            allowEsc
            // allowClickAway
            notification='true'
            notificationDelay='2'
            notificationSound='true'
            // chatboxStyle={{ backgroundColor: '#25D366' }}
            buttonStyle={{ bottom:'100px'}}
            avatar='/assets/img/whatsapp/ecomfidence_customer_support.webp'
            />
    );
};

export default FloatingWhatsAppComponent;