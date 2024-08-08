import React, { useState } from 'react';

const ListaDeTarea = () => {
    const [tarea, setTarea] = useState(' ');
    const [lista, setLista] = useState([]);

    const addTareaToList = () => {
        setLista([...lista, tarea]);
        setTarea('');
        console.log('Tarea añadida', lista);
    };

    const agregarValorAlInput = (event) => {
        setTarea(event.target.value); // siempre que quiero obtener un texto del input
    };

    /*const presionarTeclaEnter = (event) => {
        if (event.key === 'Enter') {
            addTareaToList();
        }
    };*/
    const presionarTeclaEnter = (event) => {
        if (event.key === 'Enter') {
            if (tarea.trim() === '') {
                alert('No escribiste tarea');
            } else {
                addTareaToList();
            }
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
            <div className="contenedor">
                <input type="text" placeholder="agregar tarea" value={tarea} onChange={agregarValorAlInput} onKeyDown={presionarTeclaEnter} />
                <ul>
                    {lista.map((item, index) => (
                        <li key={index}>
                            {item}{' '}
                            <button
                                className="basura"
                                onClick={() => {
                                    eliminarTarea(index);
                                }}>
                                <i className="fa-regular fa-trash-can"></i>
                            </button>
                        </li>
                    ))}
                </ul>
                <p className="tengo">Tengo {lista.length} tareas </p>
            </div>
        </div>
    );
};

export default ListaDeTarea;
