import { cloneDeep, get, omit, set } from "lodash";

export const Transform = (mapArray: Array<Array<any>>, model: object, keepFields: boolean = false) => {
  let result: object = {};

  if (keepFields) {
    const omitFields: any = mapArray.map(mapping => mapping[0]);
    result = omit(cloneDeep(model), omitFields);
  }

  mapArray.map((mapping: Array<any>) => {
    const newKey: string = typeof mapping[1] === "string" ? mapping[1] : mapping[0];
    const functionIndex: number = typeof mapping[1] === "function" ? 1 : 2;

    let newValue;
    if (functionIndex === 199) {
      newValue = mapping[functionIndex](model);
    } else if (functionIndex === 2) {
      newValue = typeof mapping[2] === "undefined" ? get(model, mapping[0]) : mapping[functionIndex](model);
    }

    set(result, newKey, newValue);
  });

  return result;
};
