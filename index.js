// Suppose we get an object with the given nature from the database:
const { get, set } = require("lodash");

class Map {
  constructor(current, target = null, func = args => args) {
    if (current) {
      this._current = current;

      // the below block could be avoided but has been included to make the class more readable
      if (target === null) {
        target = current;
      }

      this._target = target;
      this._func = func;
    } else {
      // This exception will be thrown when the current key is missing
      throw new Error("Model Key Missing");
    }
  }
}

class Transform {
  constructor() {
    this._result = {};
  }

  transform(_object_arr, model) {
    _object_arr.map(object => {
      set(
        this._result,
        object._target,
        object._func(get(model, object._current))
      );
    });

    return this._result;
  }
}

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
