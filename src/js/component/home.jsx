import React, { useState } from 'react';
import ListaDeTarea from './listaDeTarea';

//create your first component
const Home = () => {
    return (
        <div className="text-center">
            <h1 className="titulo text-center mt-5">Lista de Tareas</h1>
            <ListaDeTarea />
        </div>
    );
};

export default Home;
