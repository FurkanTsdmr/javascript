//                                  ELEMENT OLUSTURMA---------------------------//


// const li = document.createElement("li")


// // add class
// li.className="list-group"

// //attribute
// li.setAttribute("title","new item")
// li.setAttribute("data-id","5")

// const text = document.createTextNode("new item");
// // yukarıda yaratmış oldugumuz li yi listemize ekleme
// li.appendChild(text)
// // bu halden halen sayfada görünmüyor

// // a ekleme
// const a = document.createElement("a");
// a.setAttribute("href","#");
// a.className="delete-item"
// a.innerHTML='"<i class="fas fa-times"></i>';

// // oluşturdugumuz yapıyı ilk olarak li ye dahil etmek için
// li.appendChild(a)

// // listemizin id sini seçip 

// document.querySelector("#task-list").appendChild(li)



// console.log(li);


//                                  ELEMENT SİLME                                   //
// ilk olarak listemizi seçerek başlıyoruz

const taskList = document.querySelector("#task-list");

// remove ile hepsini sileriz
// taskList.remove()

// istediğimiz elemanı silmek için
// taskList.childNodes[5].remove()

// children metodu ile silme işlemi
// taskList.children[2].remove()

// alternatif olarak başka silme kodumuz.
// taskList.removeChild(taskList.children[0])



//                            ATTRIBUTE SILME---------------------------------//
// class'ı sileriz
// taskList.children[1].removeAttribute("class")

// parrent eleman üzerindne tüm hepsine erişip for döngüsü ile hepisini silme işlemi

for(let i =0;i<taskList.children.length;i++){
    // burda classlarını sildik
    taskList.children[i].removeAttribute("class");
    // idleri silme işlemi
    taskList.children[i].removeAttribute("#id")
}





console.log(taskList);

