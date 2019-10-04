let a=parseInt(prompt('Nhap diem Toan : '));
let b=parseInt(prompt('Nhap diem Van : '));
let c=parseInt(prompt('Nhap diem Anh : '));
let diemtb=(2*a+b+2*c)/5;
if(diemtb>8.5&&diemtb<10){
    alert('Tot');
}else if(diemtb>7.6&&diemtb<8.5){
    alert('Kha');
}else if (diemtb>5&&diemtb<7.5){
    alert('Dat');
}else if(diemtb<5){
    alert('Khong dat');
}else {
    alert('Nhap lai so diem')
}