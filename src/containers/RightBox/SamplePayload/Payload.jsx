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



const Payload = ({selectedPayloadType}) => {
  return (
    <h1>{selectedPayloadType}</h1>
  )
  
}

export default Payload;



// import React from 'react';

// const basePayload = {
//   type: "track", // Default type, can be overridden by additionalData.type
//   context: {
//     personas: {
//       computation_class: "audience",
//       computation_id: "aud_2lDMtkecZR4xrEIJLcwj3d5nTj3",
//       computation_key: "trait_activation_visualizer",
//       namespace: "spa_pJSXHmVkcs75AC3gNEsKMk",
//       space_id: "spa_pJSXHmVkcs75AC3gNEsKMk"
//     }
//   },
//   userId: "user123",
//   properties: {
//     trait_activation_visualizer: true,
//     email: "test@example.com"
//   }
// };

// //Needs revision to work with track/identify/group button - for now, this works to generate the payload with traits or properties depending on the type passed in as additional data
// const Payload = ({ additionalData = { type: "track", properties: { firstName: "John", lastName: "Doe" } } }) => {
//   // handle both 'traits' for identify/group and 'properties' for track
//   const generatePayload = () => {
//     let payload = {
//       ...basePayload,
//       ...additionalData, // Allows overriding the type and adding properties/traits from additionalData
//     };
  
//     if (additionalData.type === "track") {
//       payload = {
//         ...payload,
//         properties: {
//           ...basePayload.properties, // Retain initial properties from basePayload
//           ...additionalData.properties, // Merge and override with properties from additionalData
//         }
//       };
//     } else {
//       payload = {
//         ...payload,
//         traits: {
//           ...basePayload.traits, // This line is theoretical, as basePayload doesn't initially have traits in your example
//           ...additionalData.traits, // Merge and override with traits from additionalData
//         }
//       };
//     }
  
//     return payload;
//   };

//   const payload = generatePayload();

//   return (
//       <pre>{JSON.stringify(payload, null, 2)}</pre>
//   );
// };

// export default Payload;