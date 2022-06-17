//                          ELEMENT SEÇİMİ------------//
//                   document.getElementById()------------//
//                   document.querySelector()------------//


// Tek Element Seçimi
// document.getElementById() metodu

// let veri;
// // seçmek istediğimiz elementi (eğer id'si ile seçeceksek beliryitor "" veya '' içinde ismini yazıp seçiyoruz.)

// veri = document.getElementById("headers")
// // sadece id'sini istediğimizde ismini getirir.
// veri = document.getElementById("headers").id;

// // headers'in class ismini bize getirir.
// veri= document.getElementById("headers").className;

// //Her seferinde uzun uzun tanımlama yapmaktansa burda seçip alttada direkt veri=veri.id diyerek veri=document.getElementById("headers").id yazmaktan kurtuluyoruz.
// veri = document.getElementById("headers");
// // veri=veri.id;


// // Verinin className'ini çağırmış oluyoruz.
// veri = veri.className;


// console.log(veri);


//              Veri Üstünde Değişimler Yapmak İçin-------//

// let veri;
// veri = document.getElementById("headers");

// // Rengini değiştirebiliyoruz
// veri.style.color="red"
// // Fontsizeini değiştiriyoruz
// // veri.style.fontSize="55px"

// // veri.style.fontWeight="bold"
// // Görünürlüğünü kapatırız.
// // veri.style.display="none"

// // Başlığın ismini innerText ile değiştirdik.
// document.getElementById("headers").innerText="Yapılacaklar"

// // Başlığın ismini değiştiriyoruz fakat yukarıda yaptıgımız gibi ayrı bir bold tanımlaması yapmadan direkt aynı satır içerisinde kullanmak istediğimiz zaman innerHTML koduyla birlikte kullanırız ve direkt olarak HTML'e etki edebiliriz.
// document.getElementById("headers").innerHTML="<b> Furkan Taşdemir</b>"



// document.querySelector METODU
// id'ye göre seçim yapmak isteidğimiz zaman bu şeklide kullanırız.
// console.log(document.querySelector("#headers"));


// class'a göre seçim yapmak istediğimizde bu şekilde kullanırız.
// Sadece class'i apptitle olan yapımızı gösterir
// console.log(document.querySelector(".apptitle"));

// etiket isimlerine göre seçim
// console.log(document.querySelector("div"));
// listemizde bulunan ilk elemanın rengini değiştirir
// document.querySelector("li").style.color = "blue"

// // listeminzde bulunan son elemanı yapmak için
// document.querySelector("li:last-child").style.color="aqua"
// // İstediğimiz eleamı değiştirmek için
// document.querySelector("li:nth-child(2)").style.color="red"


// class'i değiştirmek için. Aşağıda bootstrap kütüphanesine göre bir örnek yaptım.
// document.querySelector("li").className="list-group-item list-group-item-primary"

// class eklemek için
// document.querySelector("li").classList.add("active");



//                      Çoklu Element Seçimi-----------------//
//                document.getElementsByClassName()-----------------//


let veri ;

veri = document.getElementsByClassName("list-group-item");

// veri = document.getElementsByClassName("list-group-item")[0];
// istediğimiz index'e erişmemizi sağlıyor aynı zamanda altta kullandığımız veri=veri[2] aynı ve daha kısa kullanımdır bunu tercih etmeliyiz.
// veri = document.getElementsByClassName("list-group-item")[2];

// veri = veri[2]

// ierçsinideki liste elemanlarının özelliklerini değiştirmek
// veri[1].style.fontSize = "30px"
// veri[1].style.color = "red"

// 2 numaralı index'in içeriğini değiştirmek için
// veri[2].textContent="new item"


// for(let i=0;i<veri.length;i++){
//     console.log(veri[i].style.color="orange");
//     console.log(veri[i].textContent="new item");
// }

// // document.getElementsByTagName()
// veri = document.getElementsByTagName("li");
// // içerisindeki tüm a lari seçmemize yarar 
// veri = document.getElementsByTagName("a");

// sadece listedeki a ları kullanmak için
// Küme içerisindeki bir alt kümeyi seçmemize yarar.
// veri = document.getElementById("task-list").getElementsByTagName("a");



// // document.querySelectorAll()
// // nodelist olarak gelir.forEach kullanmamıza olanak sağlar
// veri = document.querySelectorAll("li");

// veri.forEach(function(item,index){
//     item.textContent=`${index} - item`;
// });


// console.log(veri);

//                       DOM ELEMENTLER ÜZERİNDE GEZİNME-------------------------------//

let value;
// li içindeki listemizi seçer
const todoList = document.querySelector(".list-group");
// listedeki 2.elemanımızı seçeriz
const todo=document.querySelector(".list-group-item:nth-child(2)")
// class'ı card olan divi seçmiş oluruz.
const card = document.querySelector(".card");

value=todoList;
value=todo;
value = card;



// CHILD NODES
// nodelist olarak gelir.Tüm öğeleri seçer
value = todoList.childNodes;
// HTMLColletion olarak gelir. Sadece elementleri seçer 
value = todoList.children;
// bir childrini almak için
value = todoList.children[2];
// VAr olan son indexten 1 çıakrır ve son elemanı ekranı göstermemize yarar.
value=todoList.children[todoList.children.length-1];
// erişmiş oldugumuz children'in textini değiştirmek için
value = todoList.children[1].textContent="değişen madde"

value = card;
value=card.children;
// card'ın 1.elemanına eriştik onun 0.indexindeki çocuğunu seçip yazısını değiştirdik
value = card.children[1].children[0].textContent="merhaba"


value=todoList;
// ikisi aynı kullanım - ilk çocuga erişme
// value = todoList.children[0];
// value=todoList.firstElementChild;

// son cocuga erişme
// value = todoList.lastElementChild;


// kaç çocugu varsa onların kullanımı ikiside aynı kullanım
// value = todoList.children.length;
// value = todo.childElementCount



// cocuklardan ebeveynnlere gitmek
// value = card;
// value = card.parentElement;

//ebeveynin ebeveynine gitmek için
 value = card;
 value = card.parentElement.parentElement;

//  kardeşler arası gitmek için
 value = todo;
//  bir önceki üstündeki kardeşine erişim sağlar.
 value = todo.previousElementSibling;

//  bir sonrakine geçmek
value = todo.nextElementSibling;

// değişen maddenin sonrakinin sonraki
value = todo.nextElementSibling.nextElementSibling

// öncekinin öncesi kardeşine girtmek için kullanılır eğer ki onun da üstünde yoksa bize null olarak sonuç döner yani bize onun üstünde ki artık ebeveyn diyor.
value= todo.previousElementSibling.previousElementSibling;








console.log(value);



