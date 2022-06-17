//                         FUNCTIONS(FONKSİYONLAR)                 //


// Bizim programlamada olusturdugumuz farklı farklı yerlerde calısmasını ıstediğimiz durumlarda kullanırız.
// tek çatı altına yazıp isteidğimiz zaman kullanmamıza yarar.

function merhaba(){
    console.log("merhaba");
}
merhaba()
// ilk olarak function yazdıktan sonra onun ismini yuazıyoruz devamında altına komutlarını giriyoruz böyle sadece şeklilde yazdıgımızda çalışmayacaktır biizim fonksiyonu merhaba() adıyla çağırıp çalıştırırız.


function merhaba(name,age){
    console.log(`İsim: ${name} Yaş:${age}`);
}
// name ve age parametleri veridğimiz için biz bunları eğer direkt merhaba()'yı boş bırakarak verirsek bize fonksiyonlar.js:3 Uncaught ReferenceError: require is not defined hatası verecektir parametlerini vermemizi istiyor.
// ilk yazdııgmız name'e, ikinci yazdıgımız 24'de ikinci age parametremize denk gelir
merhaba("furkan",24)


function yasHesapla(dogumYili){
    return 2022-dogumYili;
}
 let ageFurkan = yasHesapla(1997);
 let ageYasin = yasHesapla(1998)
 let ageSerhat = yasHesapla(1999)
//  console.log(ageFurkan,ageYasin,ageSerhat);



function ehliyetAlabilme(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let ehliyet = 18-yas;
    if(ehliyet > 0){
        console.log(`Merhaba ${isim} ehliyet alabilmenize ${ehliyet} yıl kaldı `);
    }else{
        console.log(`Merhaba ${isim} Ehliyet Alabilirsiniz.`);
    }
}

ehliyetAlabilme(1875,"Furkan")



