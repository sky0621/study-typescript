var rect = { x2: 0, y2: 10, width: 15, height: 20 };

// Destructuring assignment
var {x2, y2, width, height} = rect;
console.log(x2, y2, width, height); // 0,10,15,20

rect.x2 = 10;
({x2, y2, width, height} = rect); // assign to existing variables using outer parentheses
console.log(x2, y2, width, height); // 10,10,15,20

const point2D = {x: 1, y: 2};
/** Create a new object by using all the point2D props along with z */
const point3D = {...point2D, z: 3};
console.log(point3D)

var someArray = [9, 2, 5];
for (var item of someArray) {
  console.log(item); // 9,2,5
}

var lyrics = 'Never gonna give you up';
var html = `<div>${lyrics}</div>`;
console.log(html)

