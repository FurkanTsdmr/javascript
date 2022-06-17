//                              MOUSE EVENTLERİ                                 //


const btn = document.querySelector("#btnClick");

const ul = document.querySelector("#tasklist")


// click event

// btn.addEventListener("click",run)

// liste içerisinde herhangi bir yere basınca tetiklenir.
// ul.addEventListener("click",run)

// double click event: Çift tıkladıgımızda çalışır
// btn.addEventListener("dblclick",run)

// mouse down:Tıkladıgımızda andan itibaren bırakana kadar gerçekleşir

// btn.addEventListener("mousedown",run)

// mouse up:Mouse u tıklamamızı bıraktıgımız zaman calısır.
// btn.addEventListener("mouseup",run  )

// mouse enter:mouse üzerine geldiği anda çalışır.Her üzerine geldiğimizde tetiklenir
// btn.addEventListener("mouseenter",run)

// Mouse leave: Mosue ile üzerinden ayrıldıgımız zaman calısır
// btn.addEventListener("mouseleave",run)

// mouseover - mouseout: içerisindeki alt öpğlere geldiğimizde çalışır,
// nesnenin alt elemanlarında da çalışır.
// ul.addEventListener("mouseover",run)
// mouse out
// ul.addEventListener("mouseout",run)

// mouse move: Yaptıgımız hareketleri px cinsinden bize verir. Görsellerle calısıldıgında kullanılır genellikle.
ul.addEventListener("mousemove",run)





function run (event){
    console.log(`event type : ${event.type}`);
}