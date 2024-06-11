'use client'
// ScrollContext.js
import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
    const contactSectionRef = useRef(null);
    const headerOffset = 150; // Replace with your header's height

    const scrollToContact = () => {
        if (contactSectionRef.current) {
            const elementPosition = contactSectionRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <ScrollContext.Provider value={{ contactSectionRef, scrollToContact }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (context === null) {
        return {
            contactSectionRef: { current: null },
            scrollToContact: () => console.warn("ScrollProvider is missing."),
        };
    }
    return context;
};
