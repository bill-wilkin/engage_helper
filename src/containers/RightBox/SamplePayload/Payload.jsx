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



const Payload = ({selectedPayloadType, additionalData = { properties: { firstName: "John", lastName: "Doe" } }}) => {

      let payload = {
      ...basePayload,
      ...additionalData, // Allows overriding the type and adding properties/traits from additionalData
    };
  

      if (selectedPayloadType === "track") {
      payload = {
        ...payload,
        properties: {
          ...basePayload.properties, // Retain initial properties from basePayload
          ...additionalData.properties, // Merge and override with properties from additionalData
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
        }
      };
    }
  return (
    <pre>{JSON.stringify(payload, null, 2)}</pre>
  )
  
}

export default Payload;