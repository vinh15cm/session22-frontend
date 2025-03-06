let arr = [12, 35, 47, 22, 56, 19, 24, 33, 42, 51, 35, 22, 22, 35, 19];

let frequency = {};
let maxCount = 0;
let mostFrequent = null;

for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    maxCount = Math.max(maxCount, frequency[num]);
}

mostFrequent = Math.min(...Object.keys(frequency).filter(num => frequency[num] === maxCount).map(Number));

console.log("Mảng:", arr);
console.log(`Phần tử xuất hiện nhiều nhất là ${mostFrequent} với ${maxCount} lần xuất hiện.`);
