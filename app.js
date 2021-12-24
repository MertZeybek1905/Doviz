document.getElementById("hesapla").addEventListener('click',hesap);
function hesap(){
    var tutar = Number(document.getElementById("miktar").value);
    var x = document.getElementById("One").selectedIndex;
    var y = document.getElementById("One").options;
    
   //alert("Index: " + y[x].index + " is " + y[x].text);
  // alert("girdiğiniz miktar:" + tutar + y[x].text);
    var a = document.getElementById("two").selectedIndex;
    var b = document.getElementById("two").options;
    //  alert("döüştürmek istediğiniz birim:"+ b[a].text);
    if(x==0 & a==1)
    {
        var paid = (tutar/8.50);
      //var yeni= paid.toString();
      alert("işlem sonucu :" + paid + b[a].text)
        
    }
    if(x==0 & a==2)
    {
        var paid = (tutar/9.45);
        alert("işlem sonucu :" + paid + b[a].text)
   
    }
     if(x==1 & a==0)
    {
        var paid = (tutar* 8.50);
        var yeni= paid.toString();
        alert("işlem sonucu :" + paid + b[a].text)
    }
    if(x==1 & a==2)
    {
        var paid = (tutar * 0.85);
        var yeni= paid.toString();
        alert("işlem sonucu :" + paid + b[a].text)
    }
    if(x==2 & a==0)
    {
        var paid = (tutar *9.45);
        var yeni= paid.toString();
        alert("işlem sonucu :" + paid + b[a].text)
    }if(x==2 & a==1)
    {
        var paid = (tutar* 1.18);
       
        alert("işlem sonucu :" + paid + b[a].text)
    }

   
}

