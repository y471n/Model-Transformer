// Suppose we get an object with the given nature from the database:
const { cloneDeep, omit, get, set } = require("lodash");

module.exports.transform = function(mapArray, model, keepFields = false) {
  result = {};
  if (keepFields) {
    omitFields = mapArray.map(mapping => mapping[0]);
    result = omit(cloneDeep(model), omitFields);
  }
  mapArray.map(mapping => {
    const newKey = typeof mapping[1] == "string" ? mapping[1] : mapping[0];
    const newValue =
      typeof mapping[2] === "undefined"
        ? get(model, mapping[0])
        : mapping[2](model);
    set(result, newKey, newValue);
  });

  return result;
};
