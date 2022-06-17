//                TARAYICILARIN DEPOLAMA ALANLARI------//
// Değerleimizi string veya number olarakta girsek hem locals.'da hem de sessions.'da hepsi string olarak kayıt edilecektir.
// SESSION STORAGE
// Sitemizde bir veri tabanı kullanmıyorsak burdaki verileri tarayıcıların depolama alanlarını kullanırız.
// Oturum açılıp kapatılana kadar tutulur.

// Sayfaya incele dedikten sonra Application sekmesinde Storage Bölümünde bulunur.
// key ve value değerlerinde tutulur


// const add = document.getElementById("#add")
// const del = document.getElementById("#delete")
// const clear = document.querySelector("#clear")

// const addkey = document.querySelector("#addkey")
// const addvalue = document.querySelector("#addvalue")
// const deletekey = document.querySelector("#deletekey")

// // Elementlerimizi seçme işlemlerini gerçekleştirdik şimdi de bunlara tıklandığında olaylarımız ekleyeceğiz.

// add.addEventListener("click",addItem)
// del.addEventListener("click",deleteItem)
// clear.addEventListener("click",clearItem)


// window.onload =function addItem(e){
//     // Gönderilen anahtar ve değeri alıcaz, sessionStorage'e gödnereceğiz.
//     sessionStorage.setItem(addkey.value,addvalue.value)
// }
// // Session storage'den değer silme
// window.onload =function deleteItem(e){
//     sessionStorage.removeItem(deletekey.value)
// }

// // tümünü silmek
// window.onload=function clearItem(e){
//     sessionStorage.clear()
// }


//                         LOCAL STORAGE                //
// Local storage'de ise biz bu verileri js ile silene kadar depolama alanında tutulur.
// kalıcı olan bilgileri ya application sekmesinden ya da js üzeirnden sileriz.

// SetItem
// anahtar ve değerleri vererek yeni elemena ekleyebiliyoruz.

localStorage.setItem("programlama","js")
localStorage.setItem("bilgisayar",9500)

// Kayıtlı bir veriye ulaşmak için
// // GetItem
// const value = localStorage.getItem("programlama")
// // const value = localStorage.getItem("programlama")
// // Çıktıda programlama key'inin value değerinin js oldugunu bize loglayarak gösterir.
// console.log(value);
// // string olarak getirir
// console.log(typeof value);

// Temizlemek istersek
// Clear Local Storage. Tüm verileri siler
// localStorage.clear()

// İçerisinde bir veri olup olmadıgını sorgulamak istediğimizde.
// getıtem
const value =localStorage.getItem("bilgisayar")
// Klavye değerinde bir veri olmadıgı için null değeri döndürür bize.
// console.log(value);
// 
if(localStorage.getItem("klavye")===null){
    console.log("Sorgulanan veri bulunamadı");
}else{
    console.log('"Sorgulanan veri bulundu') ;
}