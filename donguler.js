//                             DÖNGÜLER(LOOPS)                 //



// bazı komutların birçok kez çalışması için kullanırız.
// 1.While loop
// 2.Do-while Loop
// 3.Dop loop

// 1.whıle loop: Koşul doğru oldugu süre boyunca çalışan döngüdür.

// let i = 0;
//while(i<10){ //Eğer ki döngümüzü sade bu halde çalıştırırsak sonsuz döngüye girer nedeni ise i'nin baslangıcı 10 dan küçük ve her seferinde bu kosul saglandıgı için sonsuz döngüye girer.

while(i<10){
    // döngü çalıştıgında defalarca kez çalışmasını istediğimiz komut kısmı.
    console.log(i);
    i++;//NBu şekilde kullanarak 0 dan başlar ve 10 a kadar gider.
}

while(i>=0){
    console.log(i);
    i--;
}

// break ve continue

let i = 0;
while(i<10){
    if(i == 3){//SAyımız 6 ya geldiği zaman break diyip bırakacak ve alt satıra geçicek
        break
    }
    console.log(i);
    i++
}

continue:Kendisi çalıştıgı zaman  döngü onun kalan kısmını çalıştırmadan döngüyü tekrar başa alır



let i = 0;
while(i<10){
    if(i==3){
        continue;
    }
    console.log(i);
    i++;
}


// 2.Do-while
//  Whiledan farklı olarak ilk önce do'nun içinde yazan kodları çalıştırır orayı bitirdikten sonra while döngüsünüe bakar.Koşul devam ediyorsa eğer tekrar yukaruya çıkıp döngüyü çalıştırmaya devam eder. 
let i =0;
do{
    console.log(i);
    i++;
}while(i<10)


// 3.For
// 3 parametre alır ilk önce VERİLECEK DEĞER,ikinci parametre KOŞULU BELİRTİYORUZ,ARDINDAN ARTRTIRMA VEYA AZALTMAYI VERİYORUZ

for (let i=0;i<10;i++){
    console.log(i);
}

for(let i =0;i<10;i++){
    if(i ==3){
        console.log("i'nin değeri : " + i);
        break
    }
    console.log(i);
}


let toplam =0;
for(let i=1;i<10;i++){
    toplam+=i;
}
console.log(toplam);

let carpim =1;
for(let i=1;i<10;i++){
    carpim*=i;
}
// console.log(carpim);



//                  DİZİ VE OBJELERDE DÖNGÜ KULLANIMI--------//


let city=["Giresun","İstanbul","Ankara","İzmir","Eşkişehir"];

let users=[
    {firstName:"Furkan",lastName:"Tasdemir"},
    {firstName:"Alican",lastName:"Cazir"},
    {firstName:"Yasin",lastName:"Adak"},
    {firstName:"Serhat",lastName:"Yosma"}
]
// Arrays
// for(let i=0;i<city.length;i++){
//     // city[i] şeklinde belirttiğimiz zaman içerisindeki elemanları bize getirir fakat sadece city şeklinde belirtirsek her seferinde bize array'in hepsini getirecekti  ['Giresun', 'İstanbul', 'Ankara', 'İzmir', 'Eşkişehir'] 5 defa
//     console.log(city[i]);
// }

// for-in metodu,
// veridğimiz city içerisinde dönmesini istiyoruz bize bunu yapmamız için imkan sağlar
for(let i in city){
    // ``hem string hem de değişkeni aynı anda kullanmamıza yarar "index : " i şeklinde yazmının kolay yoludur.
    console.log(`index : ${i} value : ${city[i]}` );
// index : 0 value : Giresun
// donguler.js:103 index : 1 value : İstanbul
// donguler.js:103 index : 2 value : Ankara
// donguler.js:103 index : 3 value : İzmir
// donguler.js:103 index : 4 value : Eşkişehir
// bize çıkmızı verir.
}


// for-each
// yukarıda for döngüsüyle yaptıgımız işlemlerin aynısını burda da çıktı olarak görüyoruz.
// city.forEach(function içinde ki (item bize city içersindeki tüm elemanları döner ve logladıgımız için de onları ekrana yazdırır.))
city.forEach(function(item){
    console.log(item);
})


for(let i=0;i<users.length;i++){
    console.log(users[i].firstName);
    console.log(users[i].lastName);
}

for(let i in users){
    console.log(`index : ${i} value : ${users[i].firstName}`);
    console.log(`index : ${i} value : ${users[i].lastName}`);
}

// MAP:Returns An Array

let veri = users.map(function(item){
    console.log(item.firstName+ " " + item.lastName);
})

let veri = users.map(function(item){
    return item.firstName + item.lastName
})
console.log(veri);

// Karerlerini almaya yarar.
let numbers=[1,2,3,4,5,6,45,63];
let num = numbers.map(function(n){
    return n*n;
})
console.log(num);