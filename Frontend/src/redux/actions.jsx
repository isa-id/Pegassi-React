/** 
 * Acciones: increment y decrement son acciones simples que describen 
 * un cambio en el estado. Cada acción tiene un type que indica qué 
 * tipo de cambio se está haciendo.
**/

// Definición de tipos de acciones
export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const EDIT_CARD = 'EDIT_CARD';


/**
 * Función para aumentar el contador
 * @returns {Object} Acción de tipo INCREMENT
 */
export const increment  = (newCard) => ({
    type: ADD_CARD,
    payload: newCard,
});

export const removeCard = (id) => ({
    type: REMOVE_CARD,
    payload: id,
});

export const editCard = (id, updatedCard) => ({
    type: EDIT_CARD,
    payload: { id, updatedCard },
});


