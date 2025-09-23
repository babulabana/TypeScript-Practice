const car : {type: string, model: string, year: number}={

    type:"toyota",
    model:"corolla",
    year:2000
};
console.log(car);

const car1 = {
  type: "Toyota",
};

car1.type = "Ford"; 

// car.type = 2;

console.log(car1);

const car2: { type: string, mileage?: number } = {
  type: "Toyota"
};

car2.mileage = 2000;

console.log(car2);

const nameAgeMap: { [index: string]: number } = {};

nameAgeMap.Jack = 25; 

// nameAgeMap.Mark = "Fifty"; 

console.log(nameAgeMap);