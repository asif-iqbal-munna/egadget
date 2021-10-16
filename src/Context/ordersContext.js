import React, { createContext } from 'react';

const orderContext = createContext()

const ordersContext = () => {
    
    return (
        <orderContext.Provider value='jd'>
            
        </orderContext.Provider>
    );
};

export default ordersContext;