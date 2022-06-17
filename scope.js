//                             SCOPE KAVRAMI-----------------//

// Tüm programlama dilleri için gereçlidirç.
// olusturdugumuz degiskenin nerelerde var oldugunu olusturur

// Global Scope
// Herhangi bir şey içinde olmadıgı için bu globaldır.dddd
var veri1=5;

let veri2=10;

const veri3 =15;





// // Function Scope
// function fonksiyon(){
//     // function scope'un her zaman global scope'a göre önceliği vardır.
//     // Fonskyion içerisinde yeinden bri değer verdiğimizi için bizim yukarıda tanımladıklarımızı log'da göremiyoruz altta tanımladıklarımızı görüyoruz.
//     var veri1=30;
//     let veri2=40;
//     const veri3=50;

//     console.log(veri1,veri2,veri3);
// }
// fonksiyon()
// // Fonksyion görevini tamamladıktan sonra tekrardan bizim ilk yukarıda global ol. tanımladıgımız verileri getirecektir.
// console.log(veri1,veri2,veri3);
// // 30 40 50
// // 5 10 15 çıktılarımız bu şekilde olur.



// Block Scope

if(true){
    var veri1=30
    let veri2=40
    const veri3=50;
    console.log(veri1);
console.log(veri2);
console.log(veri3);
// Block içerisinde veridğimiz son değerleri alır zaten yukarıda gördük.
}

console.log(veri1);
console.log(veri2);
console.log(veri3);
// 30,10,15 çıkar. Yani var ile tanımlanan degiskenin degeri değişmiş diğerleri aynı kalmış. Güzel görünebilir fakat biz diyelimki sonrakşi bir blockta bunu değiştirdik var ile tanımlandıgı için yeni değer olur ve değişirç Adminsek eğer pass değişebilir ve sistemimiz kitlenebilir.Böyle durumlarda let veya cons tanımlamasını yapmalıyız.






// if(true){
//     var a=10;
//     let b=20;
//     const c = 30;
// }
// console.log(a);
// console.log(b);
// console.log(c);
// Bu çıktıda scope.js:42 Uncaught ReferenceError: b is not defined
// scope.js:42 Uncaught ReferenceError: c is not defined hatısı verir fakat a'yı ekrana yazar çünkü a'yı var ile tanıttık.
// block içerisinde değişken tanımlardan var ile tanımlananlara erişmeye VAROLMAYA devam ediyor fakat let ve const yapılarını sadece block içerisinde kullanırız block dışında kullanamayız.
// İki taraflıda kullanmak için var kullanmalıyız.


