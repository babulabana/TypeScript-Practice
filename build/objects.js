"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car = {
    type: "toyota",
    model: "corolla",
    year: 2000
};
console.log(car);
const car1 = {
    type: "Toyota",
};
car1.type = "Ford";
// car.type = 2;
console.log(car1);
const car2 = {
    type: "Toyota"
};
car2.mileage = 2000;
console.log(car2);
const nameAgeMap = {};
nameAgeMap.Jack = 25;
// nameAgeMap.Mark = "Fifty"; 
console.log(nameAgeMap);
//# sourceMappingURL=objects.js.map