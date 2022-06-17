//                                  KEYBOARD EVENT                              //
// klavyeden input girilkenb çalışır

const text = document.getElementById("input");

// focus
// elementımıze focus oldugumuzda calısır.Click oldugu zaman.Tetiklenmesi için focustan çıkıp tekrar clicklememiz gerekiyor üst üste aynı focus alanında basarsak tetiklenmez.
// text.addEventListener("focus",run)


// blur:Focus olduktan yani oraya click yaptıktan sonra faremız ile dışına çıksak dahi focusta kalırız fakat ne zaman farklı bir bölgeye click ettiğimiz zaman ise blur eventimiz çalışır.
// text.addEventListener("blur",run)



// Paste:.Bİr veri yapıştırıldıgında tetiklenir
// text.addEventListener("paste",run)

// Copy ctrl + c yapınca
// text.addEventListener("copy",run)
// Cut
// text.addEventListener("cut",run)

// select:seçim gerçekleştirdiğimizde devreye girer. herhangi bir bölgesini veya tamamını seçtikten sonra mouse ile click işlemini bitirdikten sonra tetiklenir.
// text.addEventListener("select",run)


// keydown: Klavyeden bir input a bastıgımızda ve o inputtan elımızı cekmediğimiz sürece de çalışan eventtir
// text.addEventListener("keydown",run)


// keyup:inputu bıraktıgımızda devreye girer.Kullanıcının hangi tuışa bastıgınıda alırız.
//   console.log(e.target.value) bu satır ile
text.addEventListener("keyup",run)




















function run(e){
    console.log(e.type);
    console.log(e.target.value)
}