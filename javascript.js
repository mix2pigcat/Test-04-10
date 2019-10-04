function check() {
    var number = parseInt(document.getElementById('number').value);
    if (number < 2) {
        alert("nhap lai so")


    }else if (number==2){
        alert(2 +" la so nguyen to")
    }
    else {
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                alert("day khong phai so nguyen to");
                break;
            } else {
                alert(number + " la so nguyen to");
                break;
            }
        }
    }
}