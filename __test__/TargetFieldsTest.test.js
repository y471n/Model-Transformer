var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Transform } from "../src";
// Given Current and target fields in the mapping array and keep_fields = false
// this test should return the object with target field and rest of the fields should be dropped
test("Test for Valid Case", function () {
    var _a;
    var model = {
        partners: ["2"],
        permissions: "not_admin",
    };
    var currentField = "permissions";
    var targetField = "PERM";
    var mapping = [[currentField, targetField]];
    expect(Transform(mapping, model)).toEqual((_a = {}, _a[targetField] = model[currentField], _a));
});
// Given Current and target fields in the mapping array and keep_fields = true
// this test should return the object with current field = target field and keeping all the remaining fields
test("Test for valid Case with keep fields = true ", function () {
    var _a;
    var model = {
        partners: ["2"],
        permissions: "not_admin",
    };
    var currentField = "permissions";
    var targetField = "PERM";
    var mapping = [[currentField, targetField]];
    var keepFields = true;
    var currentFieldValue = model[currentField];
    var tempobject = __assign({}, model);
    delete tempobject[currentField];
    expect(Transform(mapping, model, keepFields)).toEqual(__assign({}, tempobject, (_a = {}, _a[targetField] = currentFieldValue, _a)));
});
//# sourceMappingURL=TargetFieldsTest.test.js.map