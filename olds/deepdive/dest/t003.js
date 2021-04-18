"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var rect = { x2: 0, y2: 10, width: 15, height: 20 };
// Destructuring assignment
var x2 = rect.x2, y2 = rect.y2, width = rect.width, height = rect.height;
console.log(x2, y2, width, height); // 0,10,15,20
rect.x2 = 10;
(x2 = rect.x2, y2 = rect.y2, width = rect.width, height = rect.height); // assign to existing variables using outer parentheses
console.log(x2, y2, width, height); // 10,10,15,20
var point2D = { x: 1, y: 2 };
/** Create a new object by using all the point2D props along with z */
var point3D = __assign({}, point2D, { z: 3 });
console.log(point3D);
var someArray = [9, 2, 5];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var item = someArray_1[_i];
    console.log(item); // 9,2,5
}
var lyrics = 'Never gonna give you up';
var html = "<div>" + lyrics + "</div>";
console.log(html);
//# sourceMappingURL=t003.js.map