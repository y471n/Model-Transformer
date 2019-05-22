const { transform } = require("../index");

let model = {
  _id: 1,
  cognito_id: "asdasf",
  username: "mango",
  sensitiveData: "helloWorld",
  permissions: "not_admin",
  wallets: [
    {
      id: "21",
      wallet: "asd"
    }
  ],
  partners: ["2"],
  time: new Date()
};

const result = transform(
  [
    ["_id", "id"],
    ["cognito_id", "cognitoId"],
    [
      "sensitiveData",
      "sensitiveData",
      model => (model["permissions"] == "admin" ? model["sensitiveData"] : null)
    ],
    ["time", "lastSeen"],
    ["partners", "partner", () => "The Partner"],
    ["wallets.0.id", "wallets.0.k"]
  ],
  model
);
console.log(result);
