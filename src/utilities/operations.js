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
        const nestedData = data.data;
        const workspace = nestedData?.workspace;
        // const audience = workspace.space.audience;
        const audience = data.data.workspace.space.audience;
        return {
            audience
        }
    },
    audienceDestinationSettings: (data) => {
        const nestedData = data.data;
        const workspace = nestedData?.workspace;
        // const destination = space?.destination;
        // const profileSyncConfig = destination?.profileSyncConfig;
        // const traitMapping = profileSyncConfig?.traitMapping;
        // const mapping= traitMapping?.mapping;
        currentTraits = data.data.workspace.space.audience.destination.profileSyncConfig.traitMapping.mapping;
        
        return {
            currentTraits
        }
    }


}