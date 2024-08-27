export const operations = {
    app_SpaceContext: (data) => {
        const nestedData = data.data 
        const workspace = nestedData?.workspace;
        const space = workspace.spaceBySlug
        
        return {
            space
        }        
    }
}