// // Here basically we are converting json into y

// let json = {
//   name: "Ajay",
//   address: {
//     homeAddress: {
//       city: "hubli",
//       state: "karnataka",
//     },
//     workAddress: {
//       city: "pune",
//       state: "maharashtra",
//     },
//     currentAddress: {
//       city: "kharadi",
//       state: "maharashtra",
//     },
//   },
// };

// let y = {
//   json_name: "Ajay",
//   json_address_homeAddress_city: "hubli",
//   json_address_homeAddress_state: "karnataka",
//   json_address_workAddress_city: "pune",
//   json_address_workAddress_state: "maharashtra",
//   json_address_currentAddress_city: "kharadi",
//   json_address_currentAddress_state: "maharashtra",
// };

// let finalJson = {};

// function magic(orgJson, finalJson, name) {
//   for (key in orgJson) {
//     if (typeof orgJson[key] == "object") {
//       magic(orgJson[key], finalJson, name + "_" + key);
//     } else {
//       finalJson[name + "_" + key] = orgJson[key];
//     }
//   }
// }

// magic(json, finalJson, "json");
// console.log(finalJson);

