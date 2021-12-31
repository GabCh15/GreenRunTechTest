import React from 'react';

export const AppContext = React.createContext<{
    state?: any;
    updateTema?: any;
    dispatch?: React.Dispatch<any>;
}>({});

