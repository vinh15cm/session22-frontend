let arr = [12, 35, 47, 22, 56, 19, 24, 33, 42, 51, 35, 22, 22, 35, 19];

// Loại bỏ phần tử trùng nhau và sắp xếp tăng dần
let uniqueSortedArr = [...new Set(arr)].sort((a, b) => a - b);

console.log("Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp tăng dần:", uniqueSortedArr);
