console.log("Merhaba kodlama.io");


let dolarBugun = 9.40 ;
let dolarDun = 9.20;


{   
    let dolarDun = 9.10 ;
}

console.log(dolarDun);

const euroDun = 11.2;
//euroDun = 11; const olduğu için değiştiremiyoruz.

console.log(euroDun);

//array
//isimlendirme de camelCasing kullaniyoruz.
//PascalCasing = ilk harf büyük
let konutKredileri =["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"] ;

console.log("<ul>")


for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}

console.log("</ul>")



