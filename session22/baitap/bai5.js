let arr1 = [12, 35, 47, 22, 56];
let arr2 = [19, 24, 33, 42, 51];
let sumOdd1 = 0, sumEven1 = 0;
let sumOdd2 = 0, sumEven2 = 0;

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        sumEven1 += arr1[i];
    } else {
        sumOdd1 += arr1[i];
    }
}

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        sumEven2 += arr2[i];
    } else {
        sumOdd2 += arr2[i];
    }
}

console.log("Mảng 1:", arr1);
console.log("Tổng số lẻ mảng 1:", sumOdd1);
console.log("Tổng số chẵn mảng 1:", sumEven1);

console.log("Mảng 2:", arr2);
console.log("Tổng số lẻ mảng 2:", sumOdd2);
console.log("Tổng số chẵn mảng 2:", sumEven2);
