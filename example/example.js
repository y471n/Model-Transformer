const { transform } = require("../index");

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
  time: new Date(),
  _create_upon: new Date().getTime()
};

const result = transform(
  [
    ["_id", "id"],
    ["cognito_id", "cognitoId"],
    [
      "_create_upon",
      "createdUpon",
      model => {
        return model["time"];
      }
    ],
    ["partners", "partner", () => "The Partner"],
    ["wallets.0.id", "wallets.0.k"]
  ],
  model,
  true
);
console.log(result);
