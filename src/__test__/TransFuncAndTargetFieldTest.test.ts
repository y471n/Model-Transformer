import { Transform } from "../index";

// Given Current , target fields, transformation function in the mapping array and keep_fields = false
// this test should return the object with transformed current field value with target field as the key and dropping the rest of the fields
test("Test for valid case with transformation function and target fields given", () => {
  const model = {
    allowAccess: true,
    permissions: "notAdmin",
  };

  const checkPermission = (model: any) => {
    if (model.permissions === "notAdmin") {
      model.allowAccess = false;
    }
    return false;
  };

  const currentField = "allowAccess";
  const targetField = "ACCESS";

  const mapping = [[currentField, targetField, checkPermission]];

  expect(Transform(mapping, model)).toEqual({ [targetField]: false });
});

// Given Current , target fields, transformation function in the mapping array and keep_fields = true
// this test should return the object with transformed current field value with target field as the key and keeping all the remaining fields
test("Test for valid case with transformation function with targetFields given and keep fields = true ", () => {
  const model = {
    allowAccess: true,
    permissions: "notAdmin",
  };

  const checkPermission = (model: any) => {
    if (model.permissions === "notAdmin") {
      model.allowAccess = false;
    }
    return false;
  };

  const currentField = "allowAccess";
  const targetField = "ACCESS";
  const tempobject = { ...model };
  delete tempobject[currentField];

  const mapping = [[currentField, targetField, checkPermission]];

  expect(Transform(mapping, model, true)).toEqual({ ...tempobject, [targetField]: false });
});
