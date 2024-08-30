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
        const ids = data.data.workspace.space.audience.destination.settings.id_sync.ids;
        
        return {
            traits,
            ids
        }
    },
    updateAudienceDestination: (data) => {
        const updatedTraits = data.data.updateAudienceDestination.profileSyncConfig.traitMapping.mapping;

        return {
            updatedTraits
        }
    }

}