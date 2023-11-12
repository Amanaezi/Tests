function filterAndSortArray(arr) {

    let pairedNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            pairedNumbers.push(arr[i]);
        }
    }

    let sortedArray = pairedNumbers.sort((a, b) => b - a);
    return sortedArray;
}

let numbers = [5, 10, 3, 8, 15, 6, 12, 7];
let result = filterAndSortArray(numbers);

console.log(result);