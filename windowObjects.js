//                  Window Objesi---------------------//

// Js'de hazır olarak olan ve birçok metot ve özellik barındırır.
// Tarayıcımızın penceresinde nasıl görünüdüyle alakaladır.


veri = window;
// console.log(veri);

// //alert
// // Kullanıcıya pop-up tarzında bir pencere için kullanırız.
// alert("Merhaba")

// prompt: Kullanıcıdan bir veri istediğimizde kullanırız.

// var veri2=prompt("Adınızı Giriniz.")

// confirm: Evet hayır şekilde onay için
// Evet denilirse true döner, hayırda false: boolean cinsi.
// veri3 = confirm("Cıkmak istediginiziden emin misiniz ?")
// if(veri3){
//     console.log("Çıkış Gerçekleşti");
// }else{
//     console.log("Kişi Sitede kaldi.");
// }

// location:Tarayıcımızın özelliklerini alırız bu metotu kullanarak.
veri2 = window.location;
console.log(veri2);
// Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
// ancestorOrigins: DOMStringList {length: 0}
// assign: ƒ assign()
// hash: ""
// host: "127.0.0.1:5500"
// hostname: "127.0.0.1"
// href: "http://127.0.0.1:5500/"
// origin: "http://127.0.0.1:5500"
// pathname: "/"
// port: "5500"
// protocol: "http:"
// reload: ƒ reload()
// replace: ƒ replace()
// search: ""
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// Symbol(Symbol.toPrimitive): undefined
// [[Prototype]]: Location

veri3=window.location.href;
veri4 = window.location.hostname
veri5=window.location.protocol
console.log(veri3);
console.log(veri4);
console.log(veri5);


// Aşağıda kulllanıcı evet'e bastıgı zamanda otomatik olarak google'a yönlendiriliyor,false ise log'da location değerini yazdırıyoruz.
veri5=confirm("Çıkmak istediğinize emin misiniz")
if(veri5){
    window.location.href="https://www.google.com"

}else{
    console.log(window.location);
}


// reload : siteyi sürekli olarak yeniler
// window.location.reload();


// navigator
console.log(window.navigator);


// document.
// Documanları getirir kullanılan kodları getirir.
console.log(window.document);