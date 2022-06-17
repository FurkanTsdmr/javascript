
// Değişkenler
let password;
console.log(password);


password = "furkantsdmr";
console.log(password);
console.log(typeof (password));


//Sayisal verileri mavi renkte gösterir.
yas = 25;
console.log(yas);

//Değişken Tanımlama Kurallari

// Değişken isimleri rakam ile baslayamaz.
yas1 = 30;

// Kullandiğimiz komutlari değişken adi olarak kullanamayız.
// let if = 2; gibi

// Değişken adımız 2 veya daha fazlakelimeden olusuyorsa boşluk bırakılmaz _ veya camelCase kullanılır.

let adSoyad = "Furkan Taşdemir"
console.log(adSoyad);


// Değişken isimlendirirken türkçe karakter kullanılmamalı.
// let taşdemir = 'Soyadım' gibi..

let email;
email = "furkantsdmr97gmail.com"
console.log(email);

// const ile tanımlasaydık eğer bir daha o değeri değiştiremez bide console
// const emalis = "adklşjassd";
// emalis = "furkanfjfjf"
// console.log(emalis);
// Consolde bize  Uncaught TypeError: Assignment to constant variable. hatası verir.
// Bu bir sabittir değiştirelemez der bize.


//                          DEĞİŞKEN TÜRLERİ------------------------------------
// Genel olarak 2ye ayrılır. 

// 1.Primitive Types
// String

let firstName = "Furkan"
console.log(firstName);
console.log(typeof firstName);
// İlk çıktımızda bize  Furkan değerini verirken 2.çıktımızda bize string veri türünde oldugunu söyler.

// a.Number
// sayısal bir değer oldugu için bunu "" içinde göstermeyiz. string türlerini "" arasında bellirtiriz.
let age = 24;
console.log(age);
console.log(typeof age);
// number olarak bize çıktımızı verir.

// b. Boolean
// true false değeri alır bize typeofta'da boolean değerini verir.
let krediKullanimi = false;
console.log(krediKullanimi);
console.log(typeof krediKullanimi);

// c.Undifined
// Tanımsız demektir. Bir tanımlamamız var fakat içi boş oldugu zamanlarda bize verdiği hatadır.

// let phoneNumber ;
// console.log(phoneNumber);
// console.log(typeOf(phoneNumber));
// İlk çıkımızı bize undifined olarak verir ve ikinci typeOf çıktımızda bize ReferenceError: typeOf is not defined hatası verir yani bir tanımlama yapmadıgımızı belirtir.


// 2.REFERENCE TYPES:Objects

// 1.Array
// Dizi ve listelemeler için kullanırız.
let liste = ["Asli", "Furkan", "Alican", "Kerem"]
console.log(liste);
console.log(typeof liste);
// İlk çıktımızda bize listemizi verir ve ikinci çıktımızda bize object olarak döner.

// 2.Object Literals
let address = {
    city: "Giresun",
    country: "Turkey"
}
console.log(address);
console.log(typeof address);
// İlk çıktımızda bize listemizi verir ve ikinci çıktımızda bize object olarak döner.


// 3.Fonksiyon
let hesapla = function () {
    return 0;
}
console.log(hesapla);
console.log(typeof hesapla);
// İlk çıktımızda ƒ (){return 0;} değerini ikinci çıktımız da function değerini döndürür.




                                         OPERATÖRLER--------------------------

1.Aritmetik Operatörler
2. Atama Operatörleri
 3. Karşılaştırma Operatörleri
4. Mantıksal Operatörler


1.Matematikte kullandıgımiz operatörlerdir
*,/,+,- hepsi kullanılabilir.
let veri;
const a = 20;
const b = 10;
let c = 11;
let d = 5;
let e =" 10";
veri = a + b;
veri = a*b;
veri = a/b;
veri = a-b;
// % mod alma için kllanılır.
// veri = a %b;
// değeri 1 arttırmak için ++ operatörü kullanılır değeri 1 arttır ve veri ye aktar demektir bu fakat şu anda oldugu gibi kullanırsak hata alırız çünkü a değişkenimiz const'a  tanımlıdır ve bize ondan olayı hata verir bu ayrıntıları unutmayın.
// veri=a++;


// Şu ayrıntıyı da unutmayın biz c++ değeri verip log ladıktan sonra ekranımızda tanımlı olarak oldugu 11 değeri yazar bunun nedeni ilk olarak c ye o değeri atar sonra arttırıyor altında biz tekrar log(c) yaptıgımız zaman c'nin değerinin 12 oldugunu göreceğiz.
veri=c++;
console.log(veri);
console.log(c);
// Bu şekilde kullandıgımız zaman ise yukarıda ki gibi 2 kere loglamamıza gerek kalmayacaktır çünkü bu değeri atayıp ekrana yazdırır bizlere.
veri=++d;
console.log(veri);
console.log(d);

veri = d--;
console.log(veri);
console.log(d);


console.log(typeof veri);
// ilk çıktımız verinin değeri ikinci çıktımız number olarak gelir.

veri = a%b; 
// Genelde sayinin tek mi çift mi oldugu durumlarda kullanılıyor.
// a'nin b ye bölümünden kalanı verir
console.log(veri);



// 2.ATAMA OPERATÖRLERİ

veri =  a;
console.log(a);

veri +=a;
// veri = veri + a demektir  sonuç 40 olacaktır.
console.log(veri);

veri -=a;
console.log(veri);

veri *=a;
console.log(veri);


veri /=a;
console.log(veri);

veri %=a;
console.log(veri);




// 3.Karşılaştırma Operatörleri
// == birbirine eşit mi demektir.
veri = a ==b;
console.log(veri);
// false olarak gelir ve değerimiz boolean değerdir.

veri = b ==e;
console.log(veri);

// == sorgulamasında türe bakmadan sayılara bakar ve ona göre sonuc verir yani 10 ve "10" olarak sorgulama yaparsak bize true değerini verir.

veri= b === e;
// Bu seferki sorguda bize false değerini verir çünkü hem tür hem de string sorgusu yaptıgı için kabul etmez.
console.log(veri);

veri = a!=b;
console.log(veri);
// True sonucu alırız eşit değildir sorgusudur. Eşit değildir doğru olarak döner
veri = b!==e;
console.log(veri);


veri = a>=b;
veri = b<c;
veri = a>=d;
veri = a <=c;
console.log(veri);



// 4.Manyıksal Operatörler

//  && : VE
// Bu operatörde iki değerinde doğru olması gerekiyor true sonucunu almamız için
veri = (a > b) && (a > c)
console.log(veri);

//  || (veya)
// İki değerden birinin sonucu doğru ise bize true döndürür.
veri = (b>a) || (a>c)
console.log(veri);

//  !(not)(değil)
// Normalde sorgumuz doğru iken başına ! sorgusunuda dahil ettiğimz için bizim değerimizi tersine döndürerek bize cevap verir yani bu sorguda false değeri döner 
veri = !(a>b)
console.log(veri);

//DATE OBJECT

// Sistemin zamanını getirir ve type olarak obje türünde getirir.
let zaman = new Date()
console.log(zaman);
console.log(typeof zaman);

// get ve set ile kullanıyoruz.
//GET METHODS

console.log(zaman.getMonth());
// ayı getirirve başlangıcta 0 dan başlar.

console.log(zaman.getDate());
// Ayın kaçıncı günü oldugunu

console.log(zaman.getFullYear());
// Yılı getirir


console.log(zaman.getDay());
// Günü getirir. Pazar : 0 'dan başlar


console.log(zaman.getHours());

console.log(zaman.getMinutes());

console.log(zaman.getSeconds());

console.log(zaman.getMilliseconds());

//set ile zamanları değiştirmemize yarar


zaman.setDate(25)
console.log(zaman);
// Ayın 25 i gösterir.

zaman.setMonth(3)
console.log(zaman);

zaman.setFullYear(2022)
console.log(zaman);

zaman.setHours(20)
console.log(zaman);

// Sisteme doğum günümüzü girip o andan itibaren geçmiş zamanı getirebiliriz.
let birthday = new Date(1997,7,08)
console.log(zaman.getFullYear() - birthday.getFullYear());

console.log(zaman.getMonth() - birthday.getMonth());





 ---------------------------SAYILAR VE METOTLAR
                                      NUMBERS

let sayi;
sayi = Number("5")

sayi = parseInt("5")

// ondalık sayi olarak dönüştürür.
sayi = parseFloat("5.5")
// c ' yi görmezden gelir sonra geldiği için
sayi = parseInt("5c")
// NaN sonucu getirir. Nat a Number
sayi = parseInt("c5")

// Kullanıcıdan bir veri istediğimizde ve bu veri sayisala dönüsemeyecekse kullancağımız kontrol
// True değeri getirir. Bu bir sayi değildir dönüştürelemez demektir.
sayi = isNaN("c5")

// Dönüştürelebilri bir değer oldugu için false yani NaN değil sonucunu alıyoruz.
// sayi = isNaN("5")



var sayi = 15.12315434
// Soldan itibaren 3 basamak getirir bize.
veri = sayi.toPrecision(3)

// Virgülden sonra gelen değeri verir kaç tane itersek.
veri = sayi.toFixed(3)

veri = Math.PI;

// 4 ' e yuvarlar
veri = Math.round(3.5)

//  3 ' e yuvarlar aşağıya  yakınsa altına değilse üstüne yuvarlar .5'ten itibaren
veri = Math.round(3.4 )

//Hep yukarıya yuvarlar
veri = Math.ceil(3.1    )

// Hep aşağıya yuvarlar.
veri = Math.floor(3.9)

// Karesini almamıza yarar.
veri = Math.pow(3,2)

// Karekökünü almaya yarar.
veri = Math.sqrt(16)


//  + ya çevriir.
veri = Math.abs(-50)

// Verilen degerler arasında en kücüğünü bulur ve getirir.
veri = Math.min(1,2,234,234)


//Verilan degerler arasında en büyüğünü bulur ve getirir.
veri = Math.max(1,2,2,21,999)

// Random sayı getirir  0 ile 1 arasında bir sayi üretir.
// 1.7415121772960207 gibi.
veri = Math.random()

// diyelim ki 0 ile 10 arasında istiyoruz sayı degerlerimizi o zaman () *10 yazarak ürettiririz.
veri = Math.random()*10
// Ondalıklı kısımlarını istemiyorsak  Math.floor(Math.random()*10) kullanılmalıdır.
veri = Math.floor(Math.random()*10+1)
// *100+1 yazarakta 0 sayısını eklemeden rastgele sayılar ürettirmemize yarar.



//                                      STRING


const firstName = "Furkan"
const lastName = "Tasdemir"
const age = 24

let veri;

// String Birleştirme
veri = firstName + " " +lastName 
veri = "Furkan"
veri += "tasdemir"


// veri = 'Benim adım'+' '  + veri + ' ' + 'yaşım'+' ' + age+' ' + 'İstanbul\'da yaşıyorum'



// Contac
veri = firstName.concat(' ',lastName)
// Furkan Tasdemir olarak çıktımızı verir.


// UpperCase
// Tümünü büyük harf
veri = veri.toUpperCase()
// Tümünü küçük harf
veri = veri.toLowerCase()

Başlangıc ve bitiş noktaları verilir o indexler arasını keser ve getirir.
veri = veri.substring(3,5)

1.indexten gelir 5 arasına kadar gelir getirir.
veri = veri.slice(1,5)


String içerisinde karakter aramak için kullanılır
bulundugu index numalarını getirir eğer ki yoksa -1 çevirir.
veri = veri.indexOf("t")


replace:
değişken içindeki veriyi günceller
Büyük küçük harf duyarlılıgı vardır dikkat edin yazarken.

veri = veri.replace("furkan","Yasin")


lenght: Verilerin uzunlugunu bulmamıza yarar.
veri = veri.length;

split: stringler içerisinde dizi olusturmak istediğimzde onları ayırmak istediğimizde kullanırız.

let hobbies = "formula1 sinema spor kitap yazılım"
// (5) ['formula1', 'sinema', 'spor', 'kitap', 'yazılım']
// 0: "formula1"
// 1: "sinema"
// 2: "spor"
// 3: "kitap"
// // 4: "yazılım"
// length: 5 sonuc getirir bize
veri = hobbies.split(' ')
console.log(veri);

console.log(typeof veri);


//                                              DİZİLER VE METODLARI-------------------------//
//                                                  ARRAYS-----------------------------------//

// 
let names = ["furkan","yasin","alican","serhat"]

let years = [1997,1998,1997,1998]


let mix = ["furkan",1997,"taşdemir",null,undefined,["programlama","basketbol"]]



// get array item 
console.log(names[0]);
// furkan ekrana getirir.

// Dizideki eleamı değiştirmek için
// set array item
names[0]="aslı"

// dizinin sonuna ekler 
names[names.length]="arda"
console.log(names);

// diziye eleman eklemek istediğimizde
// add item - dizinin sonuna ekler
names.push("Eda")

// add item - dizinin başına eklemek için
names.unshift("eda")

// dizide ki son elemanı silmek için
// remove item
years.pop()
console.log(years);
// dizideki ilk elemanı silmek için.
years.shift()



// Dizi içerisindeki elemanı aramak o dizi içerisinde olup olmadıgını aramak için kullandıgımız metot.
// indexOf

let index = names.indexOf("alican")
console.log("index : " + index)


// reverse dizideki elemanların sıralamasını ters çevirmek için.
names.reverse()
console.log(names);


// dizi elemanlarını sıralamak istediğimizde.
// sort
years.sort()
console.log(years);

// alfabetik sıralama yapar.
// Büyük küçük harfe duyarlıdır sıralamada hata çıkarabilir size Eda alican varsa Eda'yı başa yazma gibi.
names.sort()
console.log(names);


// concar
// Dizileri birleştirmek istediğimizde kullandıgımız metotdur.

let veris = names.concat(years);
console.log(veris);




// splice
// Aşağıda demek istediğimiz 2.indexten başlayarak ilk index'i sil demektir. Yerine de 3.değeri ekle demektir, eğer ki silmeden eklemek istiyorsak names.splice(2,0,"mercedes") gibi kullanmalıyız.
names.splice(2,1,"mercedes")

































console.log(names);
console.log(years);

console.log(names.length);
console.log(years.length);

console.log(typeof names);
console.log(typeof years);


console.log(mix);
console.log(mix.length);
console.log(typeof mix);





















































































