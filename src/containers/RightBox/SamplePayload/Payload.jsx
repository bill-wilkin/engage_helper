import CopyPayload from "./CopyPayload";

const basePayload = {
  type: "track", // Default type, can be overridden by additionalData.type
  context: {
    personas: {
      computation_class: "audience",
      computation_id: "aud_2lDMtkecZR4xrEIJLcwj3d5nTj3",
      computation_key: "trait_activation_visualizer",
      namespace: "spa_pJSXHmVkcs75AC3gNEsKMk",
      space_id: "spa_pJSXHmVkcs75AC3gNEsKMk"
    },
    traits: {} // Initialize the traits object within context as empty
  },
  userId: "user123",
  properties: {
    trait_activation_visualizer: true
  }
};

const Payload = ({ traits, selectedPayloadType, space, audience, additionalData = { properties: { firstName: "Bob", lastName: "Ross" } }}) => {
  let payload = {
    ...basePayload,
    ...additionalData, // Allows overriding the type and adding properties/traits from additionalData
  };

  // Add dynamic fields to payload from state
  if (space) {
    payload.context.personas.namespace = space.id;
    payload.context.personas.space_id = space.id;
  }

  if (audience) {
    payload.context.personas.computation_id = audience.id;
    payload.context.personas.computation_key = audience.key;
  }

 if (selectedPayloadType === "track") {
  payload.properties[audience.key] = true;
    payload = {
      ...payload,
      properties: {
        ...payload.properties, // Use the updated payload properties
        ...additionalData.properties, // Merge and override with properties from additionalData
        ...traits // Add in specified traits from Trait Activation
      }
    };

    if (traits?.email) {
      if (!payload.context.traits) {
        payload.context.traits = {};
      }
      payload.context.traits.email = traits.email;
      delete traits.email;
    }

  } else {
    delete payload.properties;
  
    payload = {
      ...payload,
      type: selectedPayloadType,
      traits: {
        ...payload.traits, // Use the updated payload traits
        ...additionalData.traits, // Merge and override with traits from additionalData
        ...traits // Add in specified traits from Trait Activation
      }
    };
  }
  return (
    <div className="payload-container">
      <pre>{JSON.stringify(payload, null, 2)}</pre>
      <CopyPayload textToCopy={JSON.stringify(payload)} />
    </div>
    
  )
  
}

export default Payload;