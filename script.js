
function hesapla(){

    var sayi=document.getElementById("kenar").value;
    sayi=Number(sayi);
     
    let alan=sayi*sayi;
    let cevre=sayi*4;
    alert("Karenin alanı:"+alan+" /n Karenin çevresi:"+cevre);
     

    }hesapBtn=document.getElementById("hesapla");
     
    hesapBtn.onclick=hesapla;
    

    
     