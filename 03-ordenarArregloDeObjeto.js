function sortObjects(arr, property) {
    arr.sort((a ,b) => a[property] - b[property]);
}

const people = [
    { name: "Alice", age: 30},
    { name: "Bob", age: 25},
    { name: "Charlie", age: 35},
];

sortObjects(people, "age");
console.log(people)