// --------------------------ELEMENT GÜNCELLEME----------------------------//
// 

const cardHeader = document.querySelector(".card-header");

const h2 = document.createElement("h2");
// class olusturma
h2.setAttribute("class","card-header");
// child olusturma
h2.appendChild(document.createTextNode("Yeni listeler"))

// olusturdugumuz h2 ile card-header'ın elemntini değiştirecez

const parent = document.querySelector(".card");
// div class ı card olanı se.tik şimdi çocuklarını değiştireceğiz
// replaceChild ' a 2 parametre veriyoruz 1.:değiştirmek isteidğimiz elemnt ve neyle değiştiriyoruz cardHeader ile
parent.replaceChild(h2,cardHeader)




// ----------------CLASS'LARDA GÜNCELLEME---------------------------------//
// id'si task-list olanı seciyoruz
const taskList = document.querySelector("#task-list")

let value;

// task-list'in çocuklarına erişmek istiyoruz

// link = taskList.children[0].children[0];

// value = link.className;
// value = link.classList
// value=link.classList[0];


link.classList.add("new ");

// var olan listeden silme işlemi
link.classList.remove("new")

// ----------------ATTRIBUTE GÜNCELLEME----------------------//

value = link.getAttribute("href")
value = link.setAttribute("href","https://google.com")


// attribute'nin olup olmadıgın test etmemize yarayan metot
value = link.hasAttribute("href")
// true false şeklinde döner





console.log(value);




console.log(cardHeader);
