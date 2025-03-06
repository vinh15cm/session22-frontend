let a = prompt("Nhập dãy số bất kỳ");

if (/^-?\d+$/.test(a)) { // Kiểm tra xem a có phải là số nguyên không
    let b = a.split("").reverse().join("");
    console.log("Chuỗi đảo ngược:", b);
} else {
    console.log("Dãy không hợp lệ");
}
