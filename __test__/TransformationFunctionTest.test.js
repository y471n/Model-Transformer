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
// this test should return the object with transformed current field value and dropping the rest of the fields
test("Test for valid case with transformation function and no target field ", function () {
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
    var mapping = [["allowAccess", checkPermission]];
    expect(Transform(mapping, model)).toEqual({ allowAccess: false });
});
// Given Current , target fields, transformation function in the mapping array and keep_fields = false
// this test should return the object with transformed current field value and keeping all the remaining fields
test("Test for valid case with transformation function and no target field with keepFields = true", function () {
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
    var mapping = [["allowAccess", checkPermission]];
    expect(Transform(mapping, model, true)).toEqual(__assign({}, model, { allowAccess: false }));
});
//# sourceMappingURL=TransformationFunctionTest.test.js.map