// NUMBERS,STRING,NAN,UNDIFINIED DISINDA KALAN YANI PRIMITIVE DISINDA KALAN HER SEYE OBJE DİYEBİLİYORUZ
// Yukarıda belirttiğimiz gibi her bir objenin ayın özelliklere sahip olmasını isteyebiliriz bu kalıp/formata göre olussun isteidğimiz zaman CONSTRUCTOR denilen kavram bizleri karşılar. Oluşturdugumuzda her bir özellik aynı şekilde ifade ediliyor ve karmaşa olmasının önüne geçiyoruz.



// let furkan ={
//     firstName:"Furkan",
//     yerOfBirth:2008,
//     meslek:"Developer"
// }

// let furkan ={
//     name:"Furkan",
//     yerOfBirth:2008,
//     job:"Developer"
// }

// val = furkan
// console.log(val);
// console.log(typeof val);
// Cunstructor olusturmak istediğimizde bizler fonkiyonlar eşliğinde oluşturabiliyoruz.

//Öğrencinin özelliklerini Student yanına yazarız 
// function Student(name, yearOfBirth, job) {
//     // yukarıda olusturacagım yeni objeler burdaki name'in içine gitsin diyoruz
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job
//     // Bilgileri kullanarak bazı fonksiyonlarda oluşturabiliriz.
//     this.calculateAge=function () {
//         return 2021 - this.yearOfBirth
//     }

// }

// YUKARIDA FONKSİYON OLARAK OLUSTURDGUUNMUZ CONSTRUCTOR'I BİR DEĞİŞKENE ATAYIP TA KULLANABİLİYORUZ.
// let Student = function(name,yearOfBirth,job){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
//     this.calculateAge=function(){
//         2021 - yearOfBirth
//     }
// }




// // furkan'a atama yapıyoruz burda new Student() diyoruz nedeni ise function'da biz Student verdik.
// // yukarıda olsuturdugumuz bilgileri istiyor bizden
// // Yeni objemizi olusuturup bize bu bilgileri tek satırda vermiş olur.
// // Bize bir obje olarak döner.
// let furkan = new Student("furkan", 1997, "Developer")
// // constructor olarak yaptıgımız için baişka bir öğrenci eklemek isteidğimiz zaman rahat şekilde yaparız.
// let alican = new Student("alican", 1995, "student")

// // Bunları olusturduktan sonra bu objeklerimizin özelliklerini alır ve ekranda gösterebiliriz.
// console.log(furkan.name);
// console.log(furkan.yearOfBirth);
// console.log(furkan.calculateAge());

// console.log("*-----------------------*");
// console.log(alican.name);
// console.log(alican.yearOfBirth);
// console.log(alican.calculateAge());

//                          INHERITANCE                                 ///
// prototype: Kalıtım miras almayı bu yöntemle gerçekleştiririz.

// let Person = function(name,yearOfBirth,job,height){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
//     this.height=height;
// }

// let furkan = new Person("Furkan",1997,"Developer",175)

// let Ogrenci = new Person("kaan",2005,"student",205)


// // Bu şekilde tanımlama yaparak prototype tanımalması yapmış oluıyoruz ve artık log'da [[Prototype]] kısmının altında bize calculateAge'i getirir.
// Person.prototype.calculateAge=function(){
//     return 2022 - this.yearOfBirth
// }

// Person.prototype.getName=function(){
//     return this.name
// }

// Person.prototype.thisHeight=function(){
//     if(this.height <= 180){
//         console.log("Basketçi Olamazsın");
//     }else{
//         console.log("Basketçi olmak için uygun seçmelere gidiniz");
//     }
// }

// console.log(furkan.thisHeight());

// console.log(furkan);
// console.log(furkan.calculateAge());
// console.log(furkan.getName());

// console.log("-----------------------");

// console.log(Ogrenci.getName());
// console.log(Ogrenci.calculateAge());
// console.log(Ogrenci);


// --------------------------OBJECT.CREATE METODU-----------------------//
// Varolan bir objenın yeni olusturacagımız bir nesnin içerisine prototype olarak ekleme işlemi bunun için object.create kullanırız.

// let personProto = {
//     calculateAge:function(){
//         return 2022 - this.yearOfBirth;
//     }
// }

// // Hangi objenin özelliklerine göre bunu oluşturacağımızı buraya gireriz
// let furkan = Object.create(personProto)
// // Çktı olarak şu anda içerisi boş bir şekilde {} olusur ve [[Prototype]]:Object olarak gelir.
// // console.log(furkan);

// furkan.name="furkan"
// furkan.yearOfBirth=1997;
// furkan.job="Developer"
// // Şu anki logumuzda ise artık yukarıda tanımlamıs oldugumuz nesnemizin özelliklerini görüyor olduk.
// console.log(furkan);
// console.log(furkan.calculateAge());

// console.log("----------------------------------");

// let alican = Object.create(personProto,{
//     name:{value : "Alican"},
//     yearOfBirth:{value : 1997},
//     job :{value : "GYM"}
// })
// console.log(alican);
// console.log(alican.calculateAge());

//                        PROTOTYPE TABANLI KALITIM                         //
// prototyta tabanlı miras alma olayını inherit özelliğini kullanma.

// let Person =function(name,yerOfBirth,job){
//     this.name=name;
//     this.yerOfBirth=yerOfBirth;
//     this.job=job;
// } 

// Person.prototype.calculateAge=function(){
//     return 2022 - this.yerOfBirth;
// }

// // Burda diyelim ki teacher adında başka bir obje olusturacağız biz burda yeniden tanımlamak yerine Person içerisinden miras alarak kısa yoldan direkt tanımlama işlemlerini yapacağız.Miras aldıracaz
// let Teacher= function(name,yearOfBirth,job,subject){
//     // Normalde eğer ki miras alma olayını yapmasaydık eğer this.name=name gibi uzun uza yazmamız gerekiyordu. Miras almayı yapmamız için tanımlı olanları burda yazmamamız gerekiyor.
//     // Miras alma için bu komutu kullanırız Person.call(this(diyerek alacak olduklarımı belirtik virgül ile yan yana istediklerimizi yazıyoruz.))
//     Person.call(this,name,yearOfBirth,job)
//     // subject yukarıda da olmadıgı için onu kendimiz olusturuyoruz.
//     this.subject=subject;
// }

// // Alttaki fonskyinonu çalıştırmak istediğimizde hata alırız bize Yasin.calculateAge is not a function hatası verir direkt kullanmak istediğimiz zamanda.
// // Sebebi prototype kısmı Person.prototype kısmında calculateAge fonklsiyonumuz bulunuyor Teacher'da bulunmuyor.Bunun için person.prototype'ini inherit etmemiz gerekiyor.Miras almamız yani
// // teacher prototype'ını olusturduk olustururken de Person nesnesinin prototyupe'ından inherit(miras) ettik yani
// // bu şekilde de log'dan çapıtrsak yine bize vermeyecektik çünkü setEtmemiz gerekiyor teacher'ın constructırını
// // console.log(Teacher.calculateAge());


// // İnherit the Person prototype methods
// Teacher.prototype=Object.create(Person.prototype)

// // set teacher constructor

// Teacher.prototype.constructor=Teacher;
// let Yasin = new Teacher("Yasin",1998,"Teacher","Body")

// console.log(Yasin);
// // Şimdi ise çalışr.
// console.log(Yasin.calculateAge());


//                      Immediate Fonksiyonlar                  //

// Bazen oluşturmuş oldugumuz fonksiyonların sadece bir kez çalışmasını isteyebiliyoruz.örn:Kullanıucıyı karşılama mesajlarında vs.kullanılır.
// Şu anki tanımlamış oldugumuz fonksiyon tek seferlik bir fonksiyon dğeil.
// function welcome(){
//     var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//     var today = new Date()
//     var msg = "Welcome. Today is " + days[today.getDay()]
//     return msg
// }

// console.log(welcome());

// Immediate Fonksiyonlar 2 şekilde kullanım vardır süslü parantezler bitünce istersek yanına () veya })'dan sonra () diyerek.
// (function(){
// }())

// (function(){
//})()

// Return'e gerek olmuyor log'da veya ekranda göstermek istediğimiz fonksiyonu yazarız.
// Tek seferlik fonkisoynumuzdur
(function(name){
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var today = new Date()
    var msg = 'Welcome'+ " " + name + " "+ 'Today is' + days[today.getDay()]
   console.log(msg);
}("Furkan"))












