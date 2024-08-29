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
        case 'SET_CURRENT_AUDIENCE':
            return { ...state, currentAudience: action.payload };
        // initial traits object from audienceDestinationSettings.data.workspace.space.destination.profileSyncConfig.mapping
        case 'SET_CURRENT_TRAITS':
            return { ...state, currentTraits: action.payload };
        // updated traits object from updateAudienceDestination.data.updateAudienceDestination.profileSyncConfig.traitMapping.mapping
        case 'SET_UPDATED_TRAITS':
            return { ...state, updatedTraits: action.payload };    
        default:
            return state;
    }
};

