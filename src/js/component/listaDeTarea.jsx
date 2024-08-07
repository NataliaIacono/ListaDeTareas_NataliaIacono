import React, { useState } from 'react';

const ListaDeTarea = () => {
    const [Tarea, setTarea] = useState(' ');
    const [Lista, setLista] = useState([]);

    const addProductToList = () => {
        setLista([...Lista, Tarea]); //esto debería de funcionar
        setTarea('');
        console.log('product added', Lista);
    };

    const agregarValorAlInput = (event) => {
        setTarea(event.target.value);
    };

    const presionarTeclaEnter = (event) => {
        if (event.key === 'Enter') {
            addProductToList();
        }
    };

    return (
        <div>
            <input type="text" placeholder="agregar tarea" value={Tarea} onChange={agregarValorAlInput} onKeyDown={presionarTeclaEnter} />
            <p>
                {Lista.map((tarea, index) => (
                    <p key={index}> {tarea}</p>
                ))}
            </p>
        </div>
    );
};

export default ListaDeTarea;
