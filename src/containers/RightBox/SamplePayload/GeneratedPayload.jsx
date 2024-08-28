import React from 'react';


const basePayload = {
    type: "identify",
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
    traits: {
      trait_activation_visualizer: true,
      email: "test@example.com"
    }
  };
  
  const GeneratedPayload = ({ additionalData = { traits: { firstName: "John", lastName: "Doe" } } }) => {
    // generatePayload can be used to add the trait activation properties into the payload once received via GraphQL
    const generatePayload = () => {
      const payload = {
        ...basePayload,
        traits: {
          ...basePayload.traits,
          ...additionalData.traits
        }
      };
      return payload;
    };
  
    const payload = generatePayload();

    const enrichedPayload = {
        type: payload.type,
        context: {
          personas: {
            computation_class: payload.context.personas.computation_class,
            computation_id: payload.context.personas.computation_id,
            computation_key: payload.context.personas.computation_key,
            namespace: payload.context.personas.namespace,
            space_id: payload.context.personas.space_id,
          }
        },
        userId: payload.userId,
        traits: payload.traits,
      };
    
      return (
        <div style={{ textAlign: "left", color: "#000000" }}>
          <pre>{JSON.stringify(enrichedPayload, null, 2)}</pre>
        </div>
      );
    };
  
export default GeneratedPayload;