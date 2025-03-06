let arr = [12, 35, 12, 22, 51, 22, 24, 33, 22, 51];
let number = parseInt(prompt("Nhập vào một số nguyên: "));
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
        count++;
    }
}

console.log("Mảng:", arr);
if (count > 0) {
    alert(`Số ${number} xuất hiện ${count} lần trong mảng.`);
} else {
    alert(`Số ${number} không tồn tại trong mảng.`);
}
