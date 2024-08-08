import React, { useState } from 'react';

const ListaDeTarea = () => {
    const [tarea, setTarea] = useState(' ');
    const [lista, setLista] = useState([]);

    const addTareaToList = () => {
        setLista([...lista, tarea]); //esto debería de funcionar
        setTarea('');
        console.log('Tarea añadida', lista);
    };

    const agregarValorAlInput = (event) => {
        setTarea(event.target.value);
    };

    const presionarTeclaEnter = (event) => {
        if (event.key === 'Enter') {
            addTareaToList();
        }
    };

    /*const numerosSuma = [1, 1, 2, 3, 4];
    console.log(numerosSuma);
    const newArray = numerosSuma.map((item) => {
        return item + 1;
    });
    console.log(newArray);*/

    const eliminarTarea = (index) => {
        console.log(index);

        const nuevaLista = lista.filter((_, i) => i !== index);
        setLista(nuevaLista);
    };

    return (
        <div>
            <input type="text" placeholder="agregar tarea" value={tarea} onChange={agregarValorAlInput} onKeyDown={presionarTeclaEnter} />
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>
                        {item}{' '}
                        <button
                            onClick={() => {
                                eliminarTarea(index);
                            }}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaDeTarea;
