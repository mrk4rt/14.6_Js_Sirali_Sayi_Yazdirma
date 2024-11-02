let baslangic = parseInt(prompt("Lütfen başlangıç sayısını giriniz."));
let bitis = parseInt(prompt("Lütfen bitiş sayısını giriniz."));

// Geçerli giriş kontrolü
if (isNaN(baslangic) || baslangic === "") {
  alert("Lütfen geçerli bir başlangıç sayısı giriniz.");
} else if (isNaN(bitis) || bitis === "") {
  alert("Lütfen geçerli bir bitiş sayısı giriniz.");
} else {
  let sonuc = "";
  for (let i = baslangic; i <= bitis; i++) {
    sonuc = sonuc + i + "\n"; // Her sayıyı bir satıra yazdır
  }
  alert(sonuc); // Sonuçları ekrana uyarı olarak yazdır
  console.log(sonuc); // Sonuçları konsola yazdır
}
