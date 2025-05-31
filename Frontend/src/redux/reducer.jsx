import { ADD_CARD, REMOVE_CARD, EDIT_CARD } from './actions';

const initialState = {
    cards: [],
};

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return  { ...state, cards: [...state.cards, action.payload]}
        case REMOVE_CARD:
            return {
                ...state,
                cards: state.cards.filter((card) => card.id !== action.payload)
            };
            
        case EDIT_CARD:
            return {
                ...state,
                cards: state.cards.map((card) =>
                    card.id === action.payload.id
                        ? { ...card, ...action.payload.updatedCard }
                        : card
                ),
            };
        default:
            return state;
    }
};
