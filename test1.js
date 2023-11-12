let ages = [18, 20, 22, 19, 25, 21, 17, 23, 24, 18];
let sum = 0;

for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

let avg = sum / ages.length;

console.log(`Середній вік учнів: ${avg}`);

let olderThanAverage = ages.filter(age => age > avg);

console.log("Вік учнів, які старші за середній вік:");
console.log(olderThanAverage);