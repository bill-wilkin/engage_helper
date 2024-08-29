import { act } from "react";

export const operations = {
    app_SpaceContext: (data) => {
        const nestedData = data.data 
        const workspace = nestedData?.workspace;
        const space = workspace.spaceBySlug
        
        return {
            space
        }        
    },
    getPersonasAudience: (data) => {
        const audience = data.data.workspace.space.audience;
        return {
            audience
        }
    },
    audienceDestinationSettings: (data) => {
        const traits = data.data.workspace.space.audience.destination.profileSyncConfig.traitMapping.mapping;
        
        return {
            traits
        }
    },

}