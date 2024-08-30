const basePayload = {
  type: "track", // Default type, can be overridden by additionalData.type
  context: {
    personas: {
      computation_class: "audience",
      computation_id: "aud_2lDMtkecZR4xrEIJLcwj3d5nTj3",
      computation_key: "trait_activation_visualizer",
      namespace: "spa_pJSXHmVkcs75AC3gNEsKMk",
      space_id: "spa_pJSXHmVkcs75AC3gNEsKMk"
    }
  },
  userId: "user123",
  properties: {
    trait_activation_visualizer: true,
    email: "test@example.com"
  }
};



const Payload = ({ traits, selectedPayloadType, space, audience, additionalData = { properties: { firstName: "Bob", lastName: "Ross" } }}) => {

      let payload = {
      ...basePayload,
      ...additionalData, // Allows overriding the type and adding properties/traits from additionalData
    };

    //add dynamic fields to payload from state
    if (space) {
      payload.context.personas.namespace = space.id;
      payload.context.personas.space_id = space.id;
    }

    if (audience) {
      payload.context.personas.computation_id = audience.id;
      payload.context.personas.computation_key = audience.key;
    }

      if (selectedPayloadType === "track") {
        payload = {
          ...payload,
          properties: {
            ...basePayload.properties, // Retain initial properties from basePayload
            ...additionalData.properties, // Merge and override with properties from additionalData
            ...traits //add in specified traits from Trait Activation
          }
        };



    } else {
      delete payload.properties;
      payload = {
        ...payload,
        type: selectedPayloadType,
        traits: {
          ...basePayload.traits, // This line is theoretical, as basePayload doesn't initially have traits in your example
          ...additionalData.traits, // Merge and override with traits from additionalData
          ...traits //add in specified traits from Trait Activation
        }
      };
    }
  return (
    <pre>{JSON.stringify(payload, null, 2)}</pre>
  )
  
}

export default Payload;