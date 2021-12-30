import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

/*type props = {
    mensaje: string;
    lista: any[];
    callback: any;
}*/

const Home: React.FunctionComponent<IPage> = (props) => {

    useEffect(() => {
        logging.info(`Cargando ${props.name}`)
    }, [props.name])

    return (
        <div>
            <h3>Home</h3>
        </div>
    )
};

export default Home;