import { Transform } from "../src";

// Given Current and target fields in the mapping array and keep_fields = false
// this test should return the object with target field and rest of the fields should be dropped
test("Test for Valid Case", () => {
  const model = {
    partners: ["2"],
    permissions: "not_admin",
  };

  const currentField = "permissions";
  const targetField = "PERM";
  const mapping = [[currentField, targetField]];

  expect(Transform(mapping, model)).toEqual({ [targetField]: model[currentField] });
});

// Given Current and target fields in the mapping array and keep_fields = true
// this test should return the object with current field = target field and keeping all the remaining fields
test("Test for valid Case with keep fields = true ", () => {
  const model = {
    partners: ["2"],
    permissions: "not_admin",
  };

  const currentField = "permissions";
  const targetField = "PERM";
  const mapping = [[currentField, targetField]];
  const keepFields = true;

  const currentFieldValue = model[currentField];
  const tempobject = { ...model };
  delete tempobject[currentField];

  expect(Transform(mapping, model, keepFields)).toEqual({ ...tempobject, [targetField]: currentFieldValue });
});
