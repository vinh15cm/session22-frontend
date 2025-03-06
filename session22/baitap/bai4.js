let n = prompt("nhập dãy số , cách nhay bởi dấu phẩy ");
if(Number.isInteger(n)){
    let array = n.split(",").map(Number);
let max = array[0];
for(let i = 1; i < array.length; i++){
    if(array[i] > max){
        max = array[i];
    }
}
console.log("Số lớn nhất trong dãy là: ", max);
}else{
    console.log("Dãy không hợp lệ");
}