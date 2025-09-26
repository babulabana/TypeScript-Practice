function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42));
// or
function createPair2(v1, v2) {
    return [v1, v2];
}
console.log(createPair2('vishal', 450));
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
