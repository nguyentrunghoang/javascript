// toán tử số học
var a = 33;
    var b = 10;
    var c = 10;
    var linebreak = "<br />";
          
    document.write("a + b = ");
    result = a + b;
    document.write(result);
    document.write(linebreak);
          
    document.write("a - b = ");
    result = a - b;
    document.write(result);
    document.write(linebreak);
          
    document.write("a / b = ");
    result = a / b;
    document.write(result);
    document.write(linebreak);
          
    document.write("a % b = ");
    result = a % b;
    document.write(result);
    document.write(linebreak);
          
    document.write("a + b + c = ");
    result = a + b + c;
    document.write(result);
    document.write(linebreak);
          
// ------------------------------//
// var vs lest
var x = 'abc';
let y = 'xyz';
console.log(this.x); // "global"
console.log(this.y); // undefined


// ------------------------------//
// // object 
var info = {
    name : "Nguyen Trung Hoang",
    email : "nthoang@gmail.com",
    address : "DaNang city"
};
console.log(info);

// -----------------------------------//
const name ='Maria';
const age =25;
const score =7.5;
const isCool =true;
const test =null;
const check = undefined;
console.log(typeof isCool);
// ---------------------------------//
var Ten, Tuoi; // Khai báo 2 biến để lưu tên và tuổi
    Ten = prompt("Bạn hãy nhập vào tên ", "");
    Tuoi = prompt("Bạn hãy nhập vào Tuổi : ", 20);
    document.write("Chào bạn : <B> " + Ten + "</B>");
    document.write("<BR>");
    document.write("Tuổi của bạn là : <U> " + Tuoi + "</U>");

// ---------------------------------//
// 2- JSON.parse(..)
var text = '{ '
  + ' "name": "Nguyen Trung Hoang", '
  + ' "address" : "DaNang City", '
  + ' "info" : ['
  + '    { "class":"k10tt" },'
  + '    { "age":"22" },'
  + '    { "birthday":"09/11/1998" } '
  + '  ] '
  + '}';
 
 
var obj = JSON.parse(text);
console.log(obj.name); 
console.log(obj.address); 
console.log(obj.info[0].class);
console.log(obj.info[1].age); 
console.log(obj.info[2].birthday); 

// ------------------------------//
// function
function tinh_tong(a, b)
{
    document.write('Tổng là ' + (a + b));
}

// Sử dụng
var so1 = 1;
var so2 = 2;

// truyền so1 và so2 vào hàm
tinh_tong(so1, so2);