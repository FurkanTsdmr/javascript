//                                  EVENT LISTENER VE EVENT OBJESİ                      //
// elementlerimize olay eklememizi sağlar. İstediğimiz işlemlerin yapıalmasını sağlarız.
// interaktif bir site yapmamızı sağlarız.



// bir butonumuz var diyelim buna etkileşime yapmak istiyoruz id sini seçerek başlıyoruz.

const btn = document.querySelector("#btnDeleteAll")
const btn2= document.querySelector("#btnClick")

// addEventListener: hangi olayın gerçekleştiğini ve o olaya göre neyin olmasını istediğimizi belirtiriz.
// 2 paramaetre alır. İlki bu elemente ne oldugunda örn.tıklandığında,üzerine gelindidğinde,focuslandığında vs.
// İkinci o olay olduktan sonra ne olacak onu söylüyoruz,eylem olabilir,fonksiyon belirtip onun içinde de belirtebiliriz. Altta belirttiğimiz şekilde de kullanılabilir fakat biz ayrı bir fonk.olusturup onu 2.parametreye atama yapmayı tercih ederiz.

// btn.addEventListener("click",function(){
//     console.log("Butona tıklandı");
// })

// Sayfamızda  o butona basıldıgında bir yönlendirme olur ve bu yönlendirmeden dolayı da biz diyelim ki sayfanın altındayız ve o butona bastıgımızda bizi yukarıya atma durumunda bulunur (refresh yapar) engellemek için preventDefault() kullanılır yani varsayılına engelle demektir bir nevi ve bu durum bizi sayfanın üstüne atma olayını engeller.


btn.addEventListener("click",function(a){
    let value;
    value = a;
    // Butona tıkladıgımızda target dediğimiz için hangi butona bastıgımızı getirir
    value = a.target;
     // Butona tıkladıgımızda target.id dediğimiz için butonun id'sini getirir
    value=a.target.id;
   // Butona tıkladıgımızda target.classList dediğimiz için classini bize getirir.
    value=a.target.classList
    // a.type dediğimiz zaman bize tipini getirir bize click ' i getirir.
    value = a.type






    console.log(value);
    a.preventDefault();
})





// 2 farklı olayı tek bir fonksiyonla gerçekleştirdik.
// btn.addEventListener("click",btnClick)

// btn2.addEventListener("click",btnClick)

// function btnClick(){
//     console.log("Butona tiklandi.");

// }

