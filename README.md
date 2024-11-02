# Sıralı Sayı Yazdırma

## Proje Açıklaması
Bu projede, kullanıcıdan iki sayı alınarak bu sayılar arasındaki tüm tam sayıları sıralı bir şekilde ekrana yazdıran bir uygulama yapılır. Kullanıcıdan alınan başlangıç ve bitiş değerleri doğrultusunda döngü kullanılarak sayılar yazdırılır.

## Projenin Akışı

1. **Kullanıcıdan Giriş Alma**:
   - `prompt()` fonksiyonu kullanılarak kullanıcıdan başlangıç ve bitiş sayıları alınır.
   - Başlangıç sayısı, yazdırılacak sayılar için başlangıç noktasıdır.
   - Bitiş sayısı, yazdırılacak sayılar için son noktadır.

2. **Geçerli Giriş Kontrolleri**:
   - Kullanıcının girdiği değerlerin geçerli olup olmadığını kontrol etmek için `isNaN()` fonksiyonu kullanılır. 
   - Eğer kullanıcı geçersiz bir sayı (örn. metin) girerse veya başlangıç sayısı bitiş sayısından büyükse, hata mesajı gösterilir.
   - Hata mesajı için `alert()` fonksiyonu kullanılır.

3. **Sayıları Yazdırma**:
   - Girilen aralıktaki tüm sayılar bir `for` döngüsü kullanılarak yazdırılır.
   - Döngü, başlangıç sayısından başlayarak bitiş sayısına kadar devam eder ve her bir sayıyı ekrana yazdırır.

4. **Sonuç Gösterme**:
   - Kullanıcının girdiği sayılar arasındaki sayılar bir `alert()` ile gösterilir.

## Kullanılacak Nesneler ve Anahtar Kelimeler

- **Değişkenler**:
  - `baslangic`: Kullanıcının girdiği başlangıç sayısını tutar.
  - `bitis`: Kullanıcının girdiği bitiş sayısını tutar.
  - `sonuc`: Yazdırılacak sayıların tutulduğu string (sonuç).

- **Fonksiyonlar**:
  - `prompt()`: Kullanıcıdan veri almak için kullanılan JavaScript fonksiyonu.
  - `alert()`: Kullanıcıya bilgi vermek için kullanılan JavaScript fonksiyonu.

- **Koşul İfadeleri**:
  - `if`: Girilen değerlerin geçerliliğini kontrol eder.

- **Döngü**:
  - `for`: Başlangıç ve bitiş sayıları arasında döngü kurarak sayıları yazdırmak için kullanılır.

- **Örnek Çıktı**:
  - Eğer kullanıcı başlangıç sayısı olarak 5 ve bitiş sayısı olarak 10 girerse, programın konsola yazdıracağı çıktı şu şekilde olacaktır:
  5
  6
  7
  8
  9
  10
