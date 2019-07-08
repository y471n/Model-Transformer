import { omit, cloneDeep, get, set } from 'lodash';

var Transform = function (mapArray, model, keepFields) {
    if (keepFields === void 0) { keepFields = false; }
    var result = {};
    if (keepFields) {
        var omitFields = mapArray.map(function (mapping) { return mapping[0]; });
        result = omit(cloneDeep(model), omitFields);
    }
    mapArray.map(function (mapping) {
        var newKey = typeof mapping[1] === "string" ? mapping[1] : mapping[0];
        var functionIndex = typeof mapping[1] === "function" ? 1 : 2;
        var newValue;
        if (functionIndex === 1) {
            newValue = mapping[functionIndex](model);
        }
        else if (functionIndex === 2) {
            newValue = typeof mapping[2] === "undefined" ? get(model, mapping[0]) : mapping[functionIndex](model);
        }
        set(result, newKey, newValue);
    });
    return result;
};

export { Transform };
