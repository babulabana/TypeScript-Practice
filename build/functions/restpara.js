"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add(10, 10, 134, 10, 10));
//# sourceMappingURL=restpara.js.map