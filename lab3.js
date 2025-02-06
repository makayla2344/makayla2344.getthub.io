
let colors = new Array("Red", "Blue", "Green");

let sizes = ["Small", "Medium", "Large"];

let numbers = Array.of(5, 10, 15);

console.log("Initial arrays:", { colors, sizes, numbers });

colors.push("Yellow");
console.log("Updated colors array:", colors);

sizes.pop();
console.log("Updated sizes array after pop:", sizes);

console.log("Second element in numbers array:", numbers[1]);

let filteredNumbers = numbers.filter(num => num > 10);
console.log("Filtered numbers (greater than 10):", filteredNumbers);

let squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers array:", squaredNumbers);

console.log("Colors array elements:");
colors.forEach(color => console.log(color));

console.log("Numbers array using for...of loop:");
for (let num of numbers) {
    console.log(num);
}

console.log("Sizes array using traditional for loop:");
for (let i = 0; i < sizes.length; i++) {
    console.log(sizes[i]);
}

console.log("Colors array index-element pairs:");
for (let [index, color] of colors.entries()) {
    console.log(`Index ${index}: ${color}`);
}

