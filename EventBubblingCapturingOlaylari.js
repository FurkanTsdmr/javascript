//              EventBubblingCapturingOlaylari              //
// Olay Kabarcıklanması
// 3 parametre alır eğer belirtmezsek default olarak false olarak gelir ve evetn bubling çalışır
// İÇTEN DIŞA DOĞRU.
// Sitemizde bir elemente tıkladıgımızda deniz zemninden yuukarıya doğru çıktıgı kabarcıkların diğerleri ile birleşip daha büyük bir hal alması gibi düşünebiliriz.
// En lattan üst parentlerin etkilenmesidir.
// İçten dışa doğru devam eder.

const form = document.querySelector("form")

const cardBody = document.querySelector(".card-body")

const card = document.querySelector(".card")

const container = document.querySelector(".container")

// form.addEventListener("click",function(e){
//     // clicklediğimiz anda altta olan tüm fonksiyonlarımız da çalıştıgını görürüz. bu olay event bublingdir.
//     // 1.form 2.card-body 3.card 4.container tetiklenir.
//     console.log("form");
//     // Bu kod yapısı ile olay kabarcıklanmasını engelleriz.
//     e.stopPropagation()
// })

// cardBody.addEventListener("click",function(e){
//     console.log("card-body");
//     e.stopPropagation()
// })

// card.addEventListener("click",function(e){
//     console.log("card");
//     e.stopPropagation()
// })

// container.addEventListener("click",function(e){
//     console.log("container");
//     e.stopPropagation()
// })




//              EVENT CAPTURING------------------//
// BURDA DA DIŞTAN İÇE DOĞRU BİR DÖNGÜ VARDIR.
// 3.parametreyi true olarak belirtiriz
// 1.CONTAİNER 2.CARD 3.CARD-BODY 4.FORM EN DIŞTAN BAŞLAYARAK CHILD'E ULAŞIR.
// form.addEventListener("click",function(e){

//     console.log("form");
// },true)

// cardBody.addEventListener("click",function(e){
//     console.log("card-body");
// },true)

// card.addEventListener("click",function(e){
//     console.log("card");
// },true)

// container.addEventListener("click",function(e){
//     console.log("container");
// },true)



// Silme butonuzum var diyelim onlar üzerinden bir örnekle gidicez.

// const deleteItems = document.querySelectorAll(".fa-times")

// deleteItems.forEach(function(item){
//     // item bize deleteItem'ı kapsar.
//     item.addEventListener("click",function(e){
//         console.log(e.target);
//         // Bu fonksiyon ile o butona basıldıında bize butuno getirir.
//     })
// })


const ul = document.querySelector("ul")
ul.addEventListener("click",function(e){
    if(e.target.className==="fas fa-times"){
        e.target.parentElement.parentElement.remove()
    }
})
