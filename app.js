const randomSayi = Math.floor(Math.random() * 21); // Rasgele bir sayı oluşturuluyor
let tahmin = parseInt(prompt('Lütfen 0 ile 20 arasında bir değer giriniz:'), 10); // Kullanıcıdan tahmin isteniyor ve tam sayıya çevriliyor
let Haksayisi =5
while (tahmin !== randomSayi) { // Tahmin doğru olana kadar döngü devam edecek
    Haksayisi--;
    if (tahmin > randomSayi) {
        tahmin = parseInt(prompt(`Yanlış girdiniz. ${Haksayisi} hakkınız kaldı. Sayıyı azaltın:`), 10);
    } else if (tahmin < randomSayi) {
        tahmin = parseInt(prompt(`Yanlış girdiniz.  ${Haksayisi} hakkınız kaldı. Sayıyı artırın:`), 10);
    }
}
document.write("Tebrikler, doğru tahmin! Sayı: " + randomSayi);