// Suppose we get an object with the given nature from the database:
const { get, set } = require("lodash");

module.exports.Map = class {
  constructor(current, target = null, func = args => args) {
    if (current) {
      this._current = current;

      // The below block could be avoided but has been included to make the class more readable
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
};

module.exports.Transform = class {
  constructor() {
    this._result = {};
    this._keep_fields = false;
  }

  transform(map_array, model, _keep_fields = false) {
    let remaining_fields = Object.keys(model);
    map_array.map(object => {
      set(
        this._result,
        object._target,
        object._func(get(model, object._current))
      );

      if (_keep_fields) {
        if (remaining_fields.includes(object._current)) {
          remaining_fields.splice(remaining_fields.indexOf(object._current), 1);
        }
      }
    });

    if (_keep_fields) {
      remaining_fields.map(key => {
        set(this._result, key, model[key]);
      });
    }

    return this._result;
  }
};

// export const Map;
// export const Transform;

// TODO
// - try to identify the array and transform all the object
// - type Conversion
