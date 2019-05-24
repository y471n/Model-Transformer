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
// Given Current , target fields, transformation function in the mapping array and keep_fields = false
// this test should return the object with transformed current field value with target field as the key and dropping the rest of the fields
test("Test for valid case with transformation function and target fields given", function () {
    var _a;
    var model = {
        allowAccess: true,
        permissions: "notAdmin",
    };
    var checkPermission = function (model) {
        if (model.permissions === "notAdmin") {
            model.allowAccess = false;
        }
        return false;
    };
    var currentField = "allowAccess";
    var targetField = "ACCESS";
    var mapping = [[currentField, targetField, checkPermission]];
    expect(Transform(mapping, model)).toEqual((_a = {}, _a[targetField] = false, _a));
});
// Given Current , target fields, transformation function in the mapping array and keep_fields = true
// this test should return the object with transformed current field value with target field as the key and keeping all the remaining fields
test("Test for valid case with transformation function with targetFields given and keep fields = true ", function () {
    var _a;
    var model = {
        allowAccess: true,
        permissions: "notAdmin",
    };
    var checkPermission = function (model) {
        if (model.permissions === "notAdmin") {
            model.allowAccess = false;
        }
        return false;
    };
    var currentField = "allowAccess";
    var targetField = "ACCESS";
    var tempobject = __assign({}, model);
    delete tempobject[currentField];
    var mapping = [[currentField, targetField, checkPermission]];
    expect(Transform(mapping, model, true)).toEqual(__assign({}, tempobject, (_a = {}, _a[targetField] = false, _a)));
});
//# sourceMappingURL=TransFuncAndTargetFieldTest.test.js.map