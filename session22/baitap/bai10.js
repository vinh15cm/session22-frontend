let arr = [];

function displayMenu() {
    console.log("\nMENU");
    console.log("1. Nhập vào mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Thêm phần tử");
    console.log("4. Sửa phần tử");
    console.log("5. Xóa phần tử");
    console.log("6. Thoát");
}

while (true) {
    displayMenu();
    let choice = parseInt(prompt("Lựa chọn của bạn: "));

    switch (choice) {
        case 1:
            arr = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy:").split(",").map(Number);
            break;
        case 2:
            console.log("Mảng hiện tại:", arr);
            break;
        case 3:
            let newElement = parseInt(prompt("Nhập phần tử cần thêm: "));
            arr.push(newElement);
            break;
        case 4:
            let indexToEdit = parseInt(prompt("Nhập vị trí cần sửa (0-based index): "));
            if (indexToEdit >= 0 && indexToEdit < arr.length) {
                arr[indexToEdit] = parseInt(prompt("Nhập giá trị mới: "));
            } else {
                console.log("Vị trí không hợp lệ.");
            }
            break;
        case 5:
            let indexToDelete = parseInt(prompt("Nhập vị trí cần xóa (0-based index): "));
            if (indexToDelete >= 0 && indexToDelete < arr.length) {
                arr.splice(indexToDelete, 1);
            } else {
                console.log("Vị trí không hợp lệ.");
            }
            break;
        case 6:
            console.log("Thoát chương trình.");
            process.exit();
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
}
