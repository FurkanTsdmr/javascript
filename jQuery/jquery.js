//                   JQuery Selectors                       //





// Js'de document.getElementByIf("container") şeklinde şekerken.

// Jquery'de $("selectors") diyerek seçebiliyoruz.

// jquery Selectors 
// Id => $("#container")
// CLass => $(".item")
// Element => $("ul")


// console.log($("#liste"));
// console.log($("h3"));
// console.log($("ul"));
// console.log($("li"));
// console.log($(".item1"));
// console.log($("a"));
// console.log($("li a"));
// console.log($("#liste a"));


// document.getElementById("header").style.color="red"


// styling_content.html içeriği
// // STYLING CONTENT

// $("#header").css("color","orange")
// // Liste içindeki a'ya etki
// // $("#liste a").css("text-decoration","none")
// // SAyfadaki tüm linkler için
// $("a").css("text-decoration","none")

// // Tanımlama yaparak sayfa içerisindeki tüm li lere etki etme işlemi.
// var styles={
//     color:"aqua",
//     fontSize:"22px",
//     border:"1px solid gray",
// }
// $("ul li").css(styles)



// $("a").css({
//     color:"green",
//     fontSize:"16px",
//     border:"2px solid blue",
//     borderRadius:"50px"
// })

// JS ile seçim işlemi
// var listeler = document.querySelectorAll("li")

// for(var i=0;i<listeler.length;i++){
//     listeler[i].style.color="red"
// .css (özellik,değer)
// $("container").css("color:blue")

// var styles={
//     border:1px solid red,
//     background:gray,
//     color:white
// }
// $("container").css(styles)
// ------------------------



// jqueryDocument.html içeriği







// text()
// h3 başlığının textini getirir
// console.log($("h3").text())
// Notlarımız kısmını getirir.
// console.log($("ul li").text());


// var olan yazıyı set ederek değiştirme
// ilk olarak seçimi yaparız. Yanına yeni değerini yazıp kullanabiliyoruz.
// $("h3").text("Furkan Taşdemir")

// input alanı olusturma 
// val()
// butona clickledğimiz zaman furkan taşdemir kursa kayıt oldu der.
// addclass:class ekleme
// onclick oldugu zaman html'de inline olarak belirttiğim kodlar çalışacak.


// var styles={
//     borderRadius:"20px",
//     border:"1px solid gray",
// }

// $("#ad,#soyad").css(styles)



// function kayitOl(){
//     var ad=$("#ad").val()
//     var soyad = $("#soyad").val()
//     console.log(ad+ " " + soyad+ " "+"kursa kayıtoldu");
//     $("#ad").addClass("highlight")
//     $("#soyad").addClass("orange")
// }



// toogle class
// Eğer class yoksa ekliyor varsa değiştirmesine yarar. Dönüşümlü olarak renklerini değiştiriyor burdaki örneğimizde.
// function kayitOl(){
//     var ad=$("#ad").val()
//     var soyad = $("#soyad").val()
//     console.log(ad+ " " + soyad+ " "+"kursa kayıtoldu");
//     $("#ad").toggleClass("highlight")
//     $("#soyad").toggleClass("orange")
//     $("img").attr("width","350")

// }


// remove class var olan class'ı çıkarıyor.
// function kayitOl(){
//     var ad=$("#ad").val()
//     var soyad = $("#soyad").val()
//     console.log(ad+ " " + soyad+ " "+"kursa kayıtoldu");
//     // önce addclass ile ekliyor devamında remove diyerek çıkarıyoruz.
//     $("#ad").addClass("highlight")
//     $("#ad").removeClass("orange")
// }

// attribute ile sayfamıza eklediğimiz resmi değiştirebiliyoruz.

// function kayitOl(){
//     var ad=$("#ad").val()
//     var soyad = $("#soyad").val()
//     console.log(ad+ " " + soyad+ " "+"kursa kayıtoldu");
//     $("#ad").toggleClass("highlight")
//     $("#soyad").toggleClass("orange")
//     $("img").attr("width","350")

// }





// clickEvent.html
//      CLICK EVENT----------//
// Alttaki 2 örnekte click eventine değil dileylim ki sayfamızda öncesinden yüklenmesini istediğimiz veriler var ve bunların ilk önce yüklenip sonrasında işleme girmemiz gerekiyordur. JQuery'de ekrana yüklenmemiş olan verilerle herhnagi bir işlem yapamayız.
// ready kullanırız ondan dolayı ama kalktı or'dan sonra kullanılan komut satırı daha çok tercih edilir.
// $(document).ready(function(){
//     console.log("ready!");
// })
// // or
// $(function(){
//     console.log("ready!");
// })

// $(function(){
//     $("selector").click(function(){
//         console.log("click event calisti");
//     })
// // })
// $(document).ready(function(){
//     // sadece p yazarakta tüm hepsinde işlemlerin geçerli oldugunu görürüz.
//     $(".paragraf").click(function(){
//         // this burda bize .paragraf'ı ifade eder.
//         // this yerine $(".paragraf") yazdgımız zaman tanımlı olan 2 adet p var ve herhangi birine tıkladıgımız zaman da ikiside tetiklenip çalışacaktır çünkü tıklanan paragraf değişti ve ikinci olarak .paragraf classı ikisinede tanımlı oldugu için çalışır. Fakat this oldugu zaman oldugu .paragraftan devam eder herhangi bir değişiklik olmaz.
//         // this ile bulundugumuz p1 e devam ettiğimizi ifade ediyoruz.
//         $(this).addClass("paragrafrenklendir")
//         // console.log("paragrafa tiklandi");
//     })
//     $("#p1,#p2").click(function(){
//         $(this).addClass("border")
//     })
// })







//changeEvent.html
//              CHANGE EVENT-------------------//
// kullanıcı seçim yaptıgında veya input laanına veri giridğin zaman değişiklik yaptıgımız eventtir.

// // kutuda değerimnizi seçtiğimiz zaaman örneğin lise log'da bize lise çıktısını verecektir. Veya input'a girişi yapıp çıktıktan sonra da aynı çıktıyı verir.
// $(document).ready(function(){
//     $(".control").change(function(){
//         console.log($(this).val())
//     })
// })



//                  SHOW-HIDE EFFECT------///
// SAYFA ÜZERİNDEKİ NESNELERİ GÖRÜNÜP/KAPATIP OYNAYABİLMEMİZE YARAR. Zamanla yapıp anımasyon özelliği katabiliriz.

// 2 farklı butondan görünüğ kapatma işlemini yapıyoruz fakat toggle classını kullanarak bunları tek bir butonda gösterip açıksa/kapalı kapalıysa/açık konuma getirebiliriz.
// $(document).ready(function(){
//     $("#hide").click(function(){
//         $("p").hide()
//     })
// })

// Animasyon eklemesine yarar.
// $(selector).show(speed,callback)
// $(selector).hide(speed,callback)
// $(selector).toggle(speed,callback)

// $(document).ready(function(){
//     $("#hide").click(function(){
//         // $("p").hide("slow")
//         // diyelimki 2 saniyede yok olmasını istiyoruz 2000 yazarız
//         $("p").hide(1000)
//     })
// })

// $(document).ready(function(){
//     $("#show").click(function(){
//         // slowdan sonra , devamında callback'i kullanırız bir fonksiyon oluşturabilirz.
//         $("p").show("slow",function(){
//             alert("paragraf gösterildi")
//         })
//     })
// })
// // Tek buton altında toplayıp işlemi yapma.
// $("#toggle").click(function(){
//     $("p").toggle("fast")
// })

//  fading ve slide
// show ve hide metotlarına benzer. farkları diyelim ki div gibi nesneleri efektli bir şekişde gösterip gizleyebiliyoruz.
// slide'da ise fadingden farklı olarak bir slayt eşiliğinde yapmasıdır.

// $(selector).fadeIn(speed,callback)
// $(selector).fadeOut(speed,callback)
// $(selector).fadeTo(speed,callback)
// $(selector).fadeToggle(speed,callback)

// $(selector).slideDown(speed,callback)
// $(selector).slideUp(speed,callback)
// $(selector).fadeToggle(speed,callback)


// sliding işlemleri

// $("#slideup").click(function(){
//     $("div").slideUp(1000)
// })

// $("#slidedown").click(function(){
//     $("div").slideDown(1000,function(){
//         alert("Resim Tekrar Geldi.")
//     })
// })

// $("#toggle").click(function(){
//     $("div").slideToggle(1000)
// })

// // Fading


// $("#fadein").click(function(){
//     $("div").fadeIn(1000)
// })

// $("#fadeout").click(function(){
//     $("div").fadeOut(1000,function(){
//         alert("Resim Tekrar Geldi.")
//     })
// })
// $("#fadeto").click(function(){
//     $("div").fadeTo(1000,0.5)
// })
// $("#fadetoggle").click(function(){
//     $("div").fadeToggle(1000)
// })

//              EFEKTLER-ANIMATE---------//
// $(document).ready(function(){
//     $("#animate").click(function(){
//         $("#box").animate(
//             {
//                 left:"200px",
//                 width:"300px",
//                 height:"300px",
//             },
//             3000
//         )
//         $("#box").animate(
//             {
//                 top:"200px",
//                 width:"50px",
//                 height:"50px",
//             },2000
//         )
//     })
// })




//      Animate Massage Box                    //
// mesajınız var yazsıına tıklanınca content sayfasının acılması
// $(document).click gibi uzun yazmak yerine direkt $(function ... ) diyerek tanımladık.
$(function(){
    $("#header").click(function(){
        $("#content").toggle("slow")
    })
})

// X ' e basılınca kapsayıcının gitmöeisin istiyoruz
$("#close").click(function(){
    $("#message-box").hide("slow")
})

