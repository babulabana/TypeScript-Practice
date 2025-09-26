"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let currentDirection = CardinalDirections.South;
console.log(currentDirection);
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = 1] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 2] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 3] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 4] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
;
console.log(CardinalDirections2.North);
console.log(CardinalDirections2.West);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
var CardinalDirections3;
(function (CardinalDirections3) {
    CardinalDirections3["North"] = "North";
    CardinalDirections3["East"] = "East";
    CardinalDirections3["South"] = "South";
    CardinalDirections3["West"] = "West";
})(CardinalDirections3 || (CardinalDirections3 = {}));
;
console.log(CardinalDirections3.North);
console.log(CardinalDirections3.West);
//# sourceMappingURL=enums.js.map