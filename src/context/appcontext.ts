import React from 'react';

export const AppContext = React.createContext<{
    state?: any;
    updateTema?: any;
    auth?: any;
    isAuth?: any;
    setIsAuth?: any;
    dispatch?: React.Dispatch<any>;

}>({});

