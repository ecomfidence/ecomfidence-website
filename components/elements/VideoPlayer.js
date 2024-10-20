"use client"; // Ensure this is a client-side component

import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Prevents rendering on the server

    return (
        <div className="video-player-wrapper">
            <ReactPlayer 
                url={url} 
                playing={true}  // Autoplay enabled
                controls={true}
                width="100%" 
                // light={true}
                loop={true}
                style={{ 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
                    color: 'red', // Set the text color to red
                    borderRadius: '10px' // Add rounded corners'
                 }} // Adjust the border radius as needed
            />
        </div>
    );
};

export default VideoPlayer;
