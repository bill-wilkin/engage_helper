export const initialState = {
    currentSpace: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_URL':
            return { ...state, currentUrl: action.payload };
        case 'SET_CURRENT_OPERATION':    
            return { ...state, currentOperation: action.payload };
        case 'SET_CURRENT_SPACE':
            return { ...state, currentSpace: action.payload };
        default:
            return state;
    }
};