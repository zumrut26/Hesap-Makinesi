function addValueToCalculateArea(value) {
    var calculateArea = document.getElementById("calculate-area");
    calculateArea.value = calculateArea.value + value;
}

function clearToCalculateArea() {
    var calculateArea = document.getElementById("calculate-area");
    calculateArea.value = "";
}

function calculate() {//hesaplama fonksiyonu açıldı
    var calculateArea = document.getElementById("calculate-area");
    var artiMi = calculateArea.value.indexOf("+");//indexOf: verilen artı değerinin hangi indexte olduğunu döndürür, eğer yok ise -1 döndürür
    var eksiMi = calculateArea.value.indexOf("-");//indexOf: verilen eksi değerinin hangi indexte olduğunu döndürür, eğer yok ise -1 döndürür
    var carpiMi = calculateArea.value.indexOf("*");//indexOf: verilen çarpı değerinin hangi indexte olduğunu döndürür, eğer yok ise -1 döndürür
    var boluMu = calculateArea.value.indexOf("/");//indexOf: verilen bölü değerinin hangi indexte olduğunu döndürür, eğer yok ise -1 döndürür

    if (artiMi > -1) {//artiMi değerinin -1den büyük olup olmadığını kontrol eder.
        var values = calculateArea.value.split('+');
        calculateArea.value = parseInt(values[0]) + parseInt(values[1]);//parseInt: verilen değeri inte yani sayıya dönüştür.
    }

    if (eksiMi > -1) {
        var values = calculateArea.value.split('-');//split: böl, ayır demek
        calculateArea.value = parseInt(values[0]) - parseInt(values[1]);
    }

    if (carpiMi > -1) {
        var values = calculateArea.value.split('*');
        calculateArea.value = parseInt(values[0]) * parseInt(values[1]);
    }

    if (boluMu > -1) {
        var values = calculateArea.value.split('/');
        calculateArea.value = parseInt(values[0]) / parseInt(values[1]);
    }
}

