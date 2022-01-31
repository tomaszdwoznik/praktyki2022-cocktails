### Wstęp

Celem projektu jest zbudowanie strony internetowej z koktajlami zgodnie z projektem graficznym i w standardzie Responsive Web Design (RWD).
Dane dotyczące koktajli będą pochodzić z otwartego API Cocktail Recipe. Wszystkie elementy interaktywne strony, powinny posiadać efekt hover (animację po najechaniu myszką). Wszystkie animacje powinny być płynne. Strona powinna być równie użyteczna na urządzeniach mobilnych.

W ramach tego projektu popracujesz z:

- HTML5
- CSS
- BEM
- JavaScript
- Ajax
- Web Storage
- systemem kontroli wersji oprogramowania Git
- platformami Github i Heroku

##### Dokumentacja API:

https://app.swaggerhub.com/apis-docs/tully4school4/cocktailrecipeapidoc/v2#/

##### Podgląd projektu graficznego:

http://natalia.trol.pl/praktyki2022-luty/makecocktailsathome.jpg

### Wytyczne funkcjonalne

1. Po wejściu na stronę użytkownik nie ma wybranej żadnej kategorii, dlatego powinien widzieć listę wszystkich koktaili bezalkoholowych pod nagłówkiem "Na co masz dzisiaj ochotę?". Kliknięcie w logo powoduje powrót do tego widoku.

2. Po wybraniu kategorii z menu, na liście powinny pojawić się wyłącznie koktajle z wybranej przez użytkownika kategorii, a nagłówek powinien zmienić się na nazwę wybranej kategorii.

3. Po wpisaniu i zatwierdzeniu frazy w wyszukiwarce, na liście powinny pojawić się wyłącznie koktalje spełniające kryteria wyszukiwania, a nagłówek powinien zmienić się na "Wyniki wyszukiwania". Wyszukiwanie powinno odbywać się po nazwie koktajlu.

4. Po kliknięciu ikonki obok etykiety "Sortuj" lista koktajli powinna uporządkować się alfabetycznie po nazwie od A do Z. Wciśnięcie ikonki kolejny raz powinno odwórcić sortowanie, czyli posortować koktajne alfabetycznie od Z do A.

5. Po wybraniu/najechaniu na kategorię w menu, powinna się ona zaznaczyć poprzez linię nad nazwą kategorii (jak na projekcie)

6. Po najechaniu na koktail powinna pojawić się ikonka serduszka. Kliknięcie ikonki powinno spowodować dodanie koktajlu do Ulubionych, a ikonka serduszka powinna się wypełnić kolorem. Ponowne kliknięcie ikonki serduszka przy koktajlu, który został już dodany do Ulubionych, poiwnno spowodować usunięcie koktajlu z listy Ulubionych.

7. Koktajle dodane do Ulubonych powinny zostać zapamiętane przez przeglądarkę, tak aby użytkownik mógł wrócić do swojej listy podczas kolejnych wizyt na stronie.

8. Kliknięcie przycisku Ulubione w top powinno spowodować wyświetlenie na liście koktajli znajdujących się w Ulubionych, a nagłówek powinen zmienić się na "Ulubione". Jeśli użytkownik nie ma ulubionych koktajli, powinien wyświetlić się stosowny komunikat.

9. Minimalna szerokość, do której projekt powinien prezentować się dobrze to 320px, powyżej 1920px layout nie powinien się już skalować w górę tylko zostać na stałej szerokości (takiej jak na projekcie) i tylko centrować się w poziomie.