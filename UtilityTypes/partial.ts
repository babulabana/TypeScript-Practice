interface Point {
  x: number;
  y: number;
}
            
let pointPart: Partial<Point> = {};
pointPart.y = 10;

console.log(pointPart);