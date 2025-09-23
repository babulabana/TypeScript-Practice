enum  CardinalDirections {
  North,
  East,
  South,
  West 

}

let currentDirection = CardinalDirections.South;

console.log(currentDirection);

enum CardinalDirections2 {
  North = 1,
  East,
  South,
  West
};

console.log(CardinalDirections2.North);

console.log(CardinalDirections2.West);



enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
};

console.log(StatusCodes.NotFound);

console.log(StatusCodes.Success);

enum CardinalDirections3 {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};

console.log(CardinalDirections3.North);


console.log(CardinalDirections3.West);