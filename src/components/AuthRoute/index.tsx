import React from 'react';
import {Redirect} from 'react-router-dom';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';

export interface IAuthRouteProps { }

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {

    console.log('Enviando childrens', props);
    console.log(auth.currentUser);

    const { children } = props;

    if(!auth.currentUser){
        logging.warn('No tiene permiso para acceder al sistema!')
        return <Redirect to="/login" />;
    }

    return (
        <>{children}</>
    );
}

export default AuthRoute;