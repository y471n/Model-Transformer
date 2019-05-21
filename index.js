const { Transform, Map } = require("./src/transformer");

let model = {
  _id: 1,
  cognito_id: "asdasf",
  wallets: [
    {
      id: "21",
      wallet: "asd"
    }
  ],
  partners: ["2"],
  _create_upon: new Date().getTime()
};

let mappings = [
  new Map("_id", "id"),
  new Map("cognito_id", "cognitoId"),
  new Map("_create_upon", "createdUpon", time => {
    return new Date(time).toDateString();
  })
];

const result = new Transform().transform(mappings, model);
console.log(result);

// TODO
// - try to identify the array and transform all the object
// - type Conversion
