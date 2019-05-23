# Model Transformer

## Motivation

Transform Model Objects to Response JSON.

### Cases

1. Pass key to value mapping
2. Pass function to transform data independently
3. Pass function to transform based on the data in model itself

### Example

Model Value

```
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
```


To transform to suppose API response use it as:

```
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
```

The resulting api response will be
```
{ 
  id: 1,
  cognitoId: 'asdasf',
  sensitiveData: null,
  lastSeen: 2019-05-22T11:48:56.014Z,
  partner: 'The Partner',
  wallets: [ { k: '21' } ] 
}
```

Cases handled:
1. Key transformed ( "_id" to "id" )
2. Nested keys transformed ("wallets.0.id" to "wallets.0.k")
3. Functions used to transform value. See permissions

One last case which isn't seen above is adding true as last parameter which will add all remaining values from model to api object. It's set by default as false and omits all the remaining values (which in our hope should be the desired behaviour)


To test run: node example/example.js