// KOŞULLU DURUMLAR (IF - ELSE )
// O anki koşula göre çalılşmasını istediğimiz durumlarda kullanırız.


const firstName = "Furkan"
const userName = "furkantasdemir"
const age = 24;
const isStudent = true;
const school =  "University"

// Eğerki koşulumuz gerçekleşiyor "furkantademir"'e eşitse consolumuza Merhaba Furkan yazdırılacak. Fakat girilen kullanıcı furkantasdemir değilse eğer else'e düşüp Kullanici Bulunamadi. yazısı yazacaktır.
// Sadece 1 tanesi çalışır.
if(userName =="furkantasdemir" ){
    console.log("Merhaba Furkan");
}else{
    console.log("Kullanici Bulunamadi.");
}

if (age === 24) {
    console.log("Yaşınız : ", age);
}else{
    console.log("Yanlış Yaş Bilgisi Girdiniz.");
}

// isStudent dedikten sonra == true'da yazabiliriz fakat zaten boolean bir değer oldugu ve değerinde kendisi şu anki atamada true oldugu için yazmasakda default olarak true olarak alıcak kendini ve if bloğu çalıacaktır.
if (isStudent) {
    console.log("Merhaba",firstName, "Hangi Bölümde Öğrencisin ?");
}else{
    console.log("Merhaba",firstName,"Maalesef kayitli bir ögrenci değilsin");
}

// if(age >= 18 ){
//     console.log("Ehliyet alabilirsin");
// }else{
//     console.log("Ehliyet almak için yaşın tutmuyor.");
// }
// Yukarıda ki örneğimizi biraz daha komplike hale getirmek için hem age>=18 ise hem de üniversity öğrencisiysen ehliyet alabilirsin yapmak istersek

if(age>=18){
    if(school=="University"){
        console.log("Merhaba",firstName,"Ehliyet almak için uygunsun");
    }else{
        console.log("Durumun ehliyet için yetersiz.");
    }
}else{
    console.log("Merhaba",firstName,"Maalesef ehliyet almak için gerekli koşulları karışılaşmıyorsun.");
}

// YUKARIDAKİ KOŞULUMUZDA İLK ELSE'IMIZ 2 ADET KOŞULU KARŞILAMAZSA EĞER ÇALIŞACAK İLK IF'IMIZ ALTINDA OLAN ELSE ISE SADECE YAS >=18 DEGILSE CALISACAK OLAN DURUMUMUZDUR.

let id = "123"

if(typeof id !="undefined"){
    console.log("id : " + id);
}else{
    console.log("no id");
}


//                                      SWITCH KOŞUL YAPISI--------------------------//

// if ve else ile yapabildiklerimizi yapabiliriz.
// Gereğinden çok fazla kosul varsa if'e göre daha güzel bir kod yapısı sunar bize.



let islem = 6;

// Asagıda ki durum şudur yukarıdaki tanımlamıs oldugumuz islem=1 degeri var ve switch yapımızda case 1 : (yani 1 bize geliyorsa ) log'a yazdır ve break(yani bırak diyoruz)
// islem e  1-2-3 degerlerini atayıp baktıgımızda sonucları bize verir fakat diyelim ki 6 verdik o zaman bize herhangi bir şekilde log'da bir çıktı vermez default ile bunu veririz (else) durumuyla aynı şey
switch (islem) {
    case 1:
        console.log("1.nolu islem yapildi.");
        break;
    case 2:
        console.log("2.nolu islem gerceklestirildi");
        break;
    case 3:
        console.log("3.nolu islem gerceklestirildi");
        break;

    default:
        console.log("Verilen degerlerde islem yapilmadi");
}


let day;
switch (new Date().getDay()) {
    case 0:
        day = "Pazar";
        break;
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Sali";
        break;
    case 3:
        day = "Carsamba";
        break;
    case 4:
        day="Persembe";
        break;
    case 5:
        day="Cuma";
        break;
    case 6:
        day="Cumartesi"
        break;
    default:
        console.log("Geçerli bir gün değeri girilmedi.");
}


console.log(day);





let hour = 1;
switch (true) {
    case (hour >= 6 && hour <= 12):
        console.log("Günaydın");
        break;
    case (hour >= 13 && hour <= 17):
        console.log("İyi günler");
        break;
    case (hour >= 18 && hour <= 24):
        console.log("İyi akşamlar");
        break;
    default:
        console.log("Yanlış zaman");
}

console.log(hour);


//                               OBJECT LITERALS--------------------------------//
// KULLANICI BILGILERI URUN KAYITRLARINI SITEMIZDE TUTMAK ISTIYORUZ DİYELİM. 
// ama sitesmizde diyelim ki milyonlarca üye var bunların hepsini değişkene atayıp tutmak imkansız ayakındır bunların daha çok fazla detaylı bilgilerini isteyebiliriz.


let firstName = "Furkan";
let lastName = "Tasdemir";

let firstName2 = "Furkan";
let lastName2 = "Tasdemir";

// Dizi olarakta tutabiliriz fakat aş yaş numara vs.. çok fazla index aramak gerekiyor buda eziyet durumuna gelir bir süre sonra.
let furkan = ["Furkan","Tasdemir",37,54654654]
let alican = ["Alican","ali",26,54541]

Bu gibi durumlarda kullanırız object literals'imizi.

let veri;


let user = {
    userName:"frkntsdmr",
    firstName:"furkan",
    lastName:"tasdemir",
    age:24,
    hobbies:["Offroad","Kitap","Yürüyüş","Yazılım"],
    address:{
        city:"Giresun",
        country:"Turkey",
        phone:055555555,
    }
}
// userimizi verimize arayip direkt olarak erişebiliyoruz.

veri = user;


console.log(veri.userName); 
console.log(veri.firstName); 
console.log(veri.lastName); 
console.log(veri.age); 
console.log(veri.hobbies.length); 
console.log(veri.address.phone); 



console.log(typeof user);




























