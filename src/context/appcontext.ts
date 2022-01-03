import React, { useState } from 'react';

export const AppContext = React.createContext<{
    state?: any;
    updateTema?: any;
    expand?: {get: boolean, set: any};
}>({});

