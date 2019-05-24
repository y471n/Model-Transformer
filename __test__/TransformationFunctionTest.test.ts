import { Transform } from "../src";

// Given Current , target fields, transformation function in the mapping array and keep_fields = false
// this test should return the object with transformed current field value and dropping the rest of the fields
test("Test for valid case with transformation function and no target field ", () => {
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

  const mapping = [["allowAccess", checkPermission]];
  expect(Transform(mapping, model)).toEqual({ allowAccess: false });
});

// Given Current , target fields, transformation function in the mapping array and keep_fields = false
// this test should return the object with transformed current field value and keeping all the remaining fields
test("Test for valid case with transformation function and no target field with keepFields = true", () => {
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

  const mapping = [["allowAccess", checkPermission]];
  expect(Transform(mapping, model, true)).toEqual({ ...model, allowAccess: false });
});
