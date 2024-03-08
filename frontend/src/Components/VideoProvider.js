// VideoProvider.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for video data
const VideoDataContext = createContext();

// Custom hook to access the video data
export function useVideoData() {
    const context = useContext(VideoDataContext);
    if (!context) {
        throw new Error('useVideoData must be used within a VideoProvider');
    }
    return context;
}

// VideoProvider component
export default function VideoProvider({ children }) {
    // Your video data state management logic goes here...
    const videoData = {/* ... */};

    // Wrap the children with the VideoDataContext provider
    return (
        <VideoDataContext.Provider value={{ videoData }}>
            {children}
        </VideoDataContext.Provider>
    );
}
