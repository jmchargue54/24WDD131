const PI = 3.14;
function circleArea(radius) {
    area = radius * radius * PI;
    return area;
}
area = circleArea(3);
area1 = console.log("Area1:", area);
area = circleArea(4);
console.log("Area2:", area);

