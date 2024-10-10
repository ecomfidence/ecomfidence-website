"use client"; // Ensure this is a client-side component

import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const FloatingWhatsAppComponent = () => {
    return (
        <FloatingWhatsApp
            phoneNumber='+2348140280638'
            chatMessage='Hello, how can I assist you?'
            accountName='Ecomfidence'
            position='right'
            chatboxHeight={'auto'}
            darkMode='true'
            allowEsc
            // allowClickAway
            notification
            notificationSound
            // chatboxStyle={{ backgroundColor: '#25D366' }}
            buttonStyle={{ bottom:'100px'}}
            />
    );
};

export default FloatingWhatsAppComponent;
