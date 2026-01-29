let bookName = prompt("Nhập tên sách:");
let auThor = prompt("Nhập tên tác giả:");
let publishYear = +prompt("Nhập năm xuất bản:");
let price = +prompt("Nhập giá tiền:");
let quantity = +prompt("Nhập số lượng:");

let bookname = bookName.trim().toUpperCase();
console.log(bookname);
auThor = auThor.toUpperCase();

let namxuatban = 2020;
let songaunhien = Math.floor(Math.random() * 10) + 1;
let kytutacgia = auThor.substring(0, 3);
let masach = `${kytutacgia}${namxuatban}${songaunhien}`;

const currentYear = 2026;
let bookAge = currentYear - publishYear;
let totalPrice = price * quantity;

// console.log("---Phieu nhap kho----");
// console.log(`ma sach : ${masach}`);
// console.log(`tac gia : ${auThor}`);
// console.log(`nam xuat ban : ${publishYear}`);
// console.log(`tuoi sach : ${bookAge}`);
// console.log(`tong gia tri : ${price}`);
// console.log(`Ngan ke goi y : ${songaunhien}`);

alert(`---Phieu nhap kho----\nma sach : ${masach}
    \ntac gia : ${auThor}
    \nnam xuat ban : ${publishYear}
    \ntuoi sach : ${bookAge}
    \ntong gia tri : ${price}
    \nNgan ke goi y : ${songaunhien}`)








