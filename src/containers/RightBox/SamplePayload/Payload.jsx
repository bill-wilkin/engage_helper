import CopyPayload from "./CopyPayload";

const basePayload = {
  type: "track", // Default type, can be overridden by additionalData.type
  anonymousId: "abcdefg-hijklmnopqrst-uvwxyz1234",
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

const Payload = ({ traits, selectedPayloadType, space, audience, ids}) => {
  let payload = {
    ...basePayload,
    // ...additionalData, // Allows overriding the type and adding properties/traits from additionalData - REMOVED as this was added for initial stage testing
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

  const appendIds = (target) => {
    Object.keys(ids).forEach(key => {
      if (!['user_id', 'anonymous_id'].includes(key)) { // Exclude userId and anonymousId so that they don't get placed in props or traits object
        const strategy = ids[key].strategy;
        if (key === 'email'  && selectedPayloadType === 'track') {
          // Ensure context.traits is init
          if (!payload.context.traits) {
            payload.context.traits = {};
          }
          // Append email & strategy to context.traits
          payload.context.traits.email = `${strategy}_added`;
        } else {
          target[key] = `${strategy}_added`;
        }
      } else {
        // Directly modify the userId or anonymousId in the payload
        if (key === 'user_id') {
          payload.userId = `${ids[key].strategy}_added`; 
        }
        if (key === 'anonymous_id') {
          payload.anonymousId = `${ids[key].strategy}_added`; 
        }
      }
    });
  };

 if (selectedPayloadType === "track") {
  payload.properties[audience.key] = true;
    payload = {
      ...payload,
      properties: {
        ...payload.properties, // Use the updated payload properties
        // ...additionalData.properties, // Merge and override with properties from additionalData - REMOVED as this was added for initial stage testing
        ...traits // Add in specified traits from Trait Activation
      }
    };
    appendIds(payload.properties, payload.context.traits.email); 

    // Handle email trait if not coming from ids
    if (traits && traits.email && !ids.email) {
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
        // ...additionalData.traits, // Merge and override with traits from additionalData - REMOVED as this was added for initial stage testing
        ...traits // Add in specified traits from Trait Activation
      }
    };
    appendIds(payload.traits);
  }

  return (
    <div className="payload-container">
      <pre>{JSON.stringify(payload, null, 2)}</pre>
      <CopyPayload textToCopy={JSON.stringify(payload)} />
    </div>
    
  )
  
}

export default Payload;