# Projekt TaskMaster

## 1. Opis projektu
TaskMaster jest narzędziem do organizacji i zarządzania zadaniami. Umożliwia łatwe zarządzanie codziennymi zadaniami, ustawianie przypomnień i śledzenie postępu. TaskMaster pomaga utrzymać wszystko na właściwej ścieżce i w czytelny sposób.

## 2. Wymagania

### 2.1 Wymagania funkcjonalne
1. **Rejestracja użytkowników**: System musi umożliwiać użytkownikom rejestrację poprzez podanie nazwy użytkownika, adresu e-mail i hasła.
2. **Logowanie użytkowników**: System musi umożliwiać zalogowanie się zarejestrowanym użytkownikom przy użyciu adresu e-mail i hasła.
3. **Tworzenie, edytowanie i usuwanie zadań**: Użytkownicy muszą mieć możliwość tworzenia, edytowania i usuwania zadań.
4. **Przypisywanie priorytetów**: System musi umożliwiać użytkownikom ustawianie priorytetów dla zadań.
5. **Przypisywanie terminów**: Użytkownicy muszą mieć możliwość przypisania terminów wykonania dla zadań.
6. **Filtrowanie i wyszukiwanie zadań**: System musi umożliwiać filtrowanie i wyszukiwanie zadań według różnych kryteriów, takich jak priorytet, termin wykonania, status ukończenia itp.
7. **Wylogowanie użytkowników**: Użytkownicy muszą mieć możliwość wylogowania się z systemu.
8. **Zmiana danych użytkownika**: System musi umożliwiać użytkownikom zmianę swoich danych osobowych oraz hasła.

### 2.2 Wymagania niefunkcjonalne
1. **Skalowalność**: System musi być skalowalny, aby obsłużyć rosnącą liczbę użytkowników i zadań.
2. **Wydajność**: Operacje na zadaniach, takie jak tworzenie, edytowanie, usuwanie oraz filtrowanie i wyszukiwanie, powinny być wykonywane szybko i efektywnie.
3. **Bezpieczeństwo**: System musi zapewniać bezpieczeństwo danych użytkowników, w tym haszowanie haseł i zabezpieczenie tokenów JWT.
4. **Niezawodność**: System musi być niezawodny i dostępny przez większość czasu, minimalizując przestoje.
5. **Łatwość użycia**: Interfejs użytkownika powinien być intuicyjny i łatwy w użyciu.
6. **Zgodność z przeglądarkami**: Aplikacja frontendowa powinna być zgodna z najnowszymi wersjami popularnych przeglądarek internetowych.
7. **Dokumentacja**: System musi być dobrze udokumentowany, aby ułatwić deweloperom jego rozwój i utrzymanie.

## 3. Zaimplementowane funkcjonalności
1. **Założenie konta**: Użytkownicy mogą tworzyć konta, co umożliwia dostęp do dodatkowych funkcji.
2. **Edycja danych**: Możliwość zmiany danych osobowych, takich jak nazwa użytkownika czy adres e-mail.
3. **Zmiana awatara**: Użytkownicy mogą przypisać lub zmienić swój awatar, personalizując swoje konto.
4. **Dodawanie tasków**: Możliwość dodawania nowych zadań do listy do wykonania.
5. **Ustawianie priorytetów tasków**: Umożliwia użytkownikom określanie ważności poszczególnych zadań poprzez ich priorytetyzację.
6. **Modyfikowanie tasków**: Użytkownicy mogą edytować istniejące zadania, zmieniając ich szczegóły lub priorytety.
7. **Filtrowanie i wyszukiwanie tasków**: Funkcja pozwalająca użytkownikom filtrować lub wyszukiwać zadania według różnych kryteriów, ułatwiając zarządzanie nimi.
8. **Usuwanie tasków**: Możliwość usuwania zadań, które zostały wykonane lub nie są już potrzebne.

## 4. Architektura systemu

### 4.1 Opis ogólny
System TaskMaster jest zbudowany w oparciu o stos technologiczny MERN (MongoDB, Express.js, React.js, Node.js). Jest to aplikacja internetowa z backendem uruchomionym na Node.js i Express.js oraz frontendem uruchomionym na React.js. Dane przechowywane są w bazie danych MongoDB.

### 4.2 Architektura
Architektura systemu jest podzielona na trzy główne warstwy: Warstwa klienta (frontend), Warstwa serwera (backend) oraz Warstwa bazy danych.

#### 4.2.1 Warstwa klienta (frontend)
Warstwa klienta jest odpowiedzialna za interfejs użytkownika i logikę aplikacji działającą po stronie przeglądarki. Została zbudowana z użyciem React.js i komunikuje się z backendem za pośrednictwem API RESTful.

- **Technologia**: React.js
- **Struktura katalogów**:
  - `src`: Główny katalog z kodem źródłowym.
    - `assets`: Zawiera zasoby takie jak obrazy.
      - `landing.jpg`: Obraz używany na stronie głównej.
    - `components`: Zawiera komponenty wielokrotnego użytku.
      - `Header.jsx`: Komponent nagłówka strony.
      - `PrivateRoute.jsx`: Komponent do ochrony tras wymagających autoryzacji.
    - `pages`: Zawiera komponenty stron.
      - `Home.jsx`: Strona główna.
      - `Profile.jsx`: Strona profilu użytkownika.
      - `SignIn.jsx`: Strona logowania.
      - `SignUp.jsx`: Strona rejestracji.
      - `TaskModal.jsx`: Modal do tworzenia/edycji zadań.
      - `Tasks.jsx`: Strona z listą zadań użytkownika.
    - `redux`: Konfiguracja i zarządzanie stanem aplikacji.
      - `user`: Zawiera slice użytkownika.
        - `userSlice.js`: Slice Redux do zarządzania stanem użytkownika.
      - `store.js`: Konfiguracja sklepu Redux.
    - `App.jsx`: Główny komponent aplikacji.
    - `firebase.js`: Konfiguracja Firebase.
    - `index.css`: Główny plik CSS.
    - `main.jsx`: Punkt wejścia do aplikacji.

#### 4.2.2 Warstwa serwera (backend)
Warstwa serwera zarządza logiką biznesową aplikacji i komunikuje się z bazą danych MongoDB. Została zbudowana z użyciem Node.js i Express.js.

- **Technologie**: Node.js, Express.js
- **Struktura katalogów**:
  - `controllers`: Zawiera logikę kontrolerów dla różnych operacji.
    - `auth.controller.js`: Obsługuje operacje uwierzytelniania użytkowników.
    - `task.controller.js`: Obsługuje operacje CRUD dla zadań.
    - `user.controller.js`: Obsługuje operacje CRUD dla użytkowników.
  - `models`: Zawiera modele danych aplikacji.
    - `task.model.js`: Model danych dla zadań.
    - `user.model.js`: Model danych dla użytkowników.
  - `routes`: Zawiera definicje tras API.
    - `auth.route.js`: Trasy związane z uwierzytelnianiem użytkowników.
    - `task.route.js`: Trasy związane z operacjami na zadaniach.
    - `user.route.js`: Trasy związane z operacjami na użytkownikach.
  - `utils`: Zawiera pomocnicze moduły i middleware.
    - `error.js`: Obsługa błędów.
    - `verifyUser.js`: Middleware do weryfikacji tokenów JWT.
  - `index.js`: Główny plik uruchamiający serwer.

#### 4.2.3 Warstwa bazy danych
Warstwa bazy danych jest odpowiedzialna za przechowywanie danych aplikacji. Dane są przechowywane w dokumentach w bazie danych MongoDB. Poniżej przedstawione zostały modele danych:

- **User Model**
  - **Opis**: Reprezentuje dane użytkowników, takie jak nazwa użytkownika, e-mail, hasło, zdjęcie profilowe.
  - **Pola**:
    - `_id` (Primary Key): Unikalny identyfikator zadania.
    - `description`: Opis zadania.
    - `completed`: Status ukończenia zadania.
    - `user` (Foreign Key): Odwołanie do `_id` użytkownika z kolekcji `User`, reprezentujące właściciela zadania.
    - `dueTo`: Data wyznaczona na ukończenie zadania.
    - `priority`: Priorytet zadania.
    - `createdAt`: Data utworzenia rekordu.
    - `updatedAt`: Data ostatniej aktualizacji rekordu.

- **Task Model**
  - **Opis**: Reprezentuje dane zadań, takie jak opis, status ukończenia, priorytet, data ukończenia, identyfikator użytkownika.
  - **Pola**:
    - `_id` (Primary Key): Unikalny identyfikator użytkownika.
    - `username`: Nazwa użytkownika.
    - `email`: Adres e-mail użytkownika.
    - `password`: Hasło użytkownika.
    - `profilePicture`: Adres URL do zdjęcia profilowego użytkownika.
    - `createdAt`: Data utworzenia rekordu.
    - `updatedAt`: Data ostatniej aktualizacji rekordu.
    - 
W bazie danych dla projektu TaskMaster mamy dwie główne tabele (kolekcje): `users` i `tasks`. Relacja między tymi tabelami jest typu "jeden-do-wielu", co oznacza, że jeden użytkownik może mieć wiele zadań, ale każde zadanie jest przypisane do jednego użytkownika.

##### Diagram relacji

```plaintext
┌───────────────┐           ┌───────────────┐
│    User       │           │     Task      │
├───────────────┤           ├───────────────┤
│ _id (PK)      │◄──────────│ _id (PK)      │
│ username      │           │ description   │
│ email         │           │ completed     │
│ password      │           │ user (FK)     │
│ profilePicture│           │ dueTo         │
│ createdAt     │           │ priority      │
│ updatedAt     │           │ createdAt     │
└───────────────┘           │ updatedAt     │
                            └───────────────┘
```

##### Opis relacji
- Każdy dokument w kolekcji `Task` ma pole `user`, które przechowuje identyfikator `_id` użytkownika z kolekcji `User`.
- Ta relacja umożliwia przypisanie wielu zadań do jednego użytkownika, przy czym każde zadanie jest przypisane do dokładnie jednego użytkownika.

##### Wizualizacja w notacji ERD (Entity-Relationship Diagram)

```plaintext
User (1) ──────── (∞) Task
```

### 4.3 Przepływ danych
1. **Rejestracja i logowanie użytkownika**:
  - Użytkownik wprowadza swoje dane w formularzu na stronie frontendowej.
  - Dane są wysyłane do serwera za pomocą żądania HTTP POST.
  - Serwer weryfikuje dane, hashuje hasło i zapisuje nowego użytkownika w bazie danych.
  - Podczas logowania serwer generuje token JWT,

który jest zwracany do klienta i przechowywany w ciasteczkach.

2. **Tworzenie, edytowanie i usuwanie zadań**:
  - Użytkownik tworzy, edytuje lub usuwa zadanie za pomocą formularza na stronie frontendowej.
  - Żądania HTTP POST, PUT, DELETE są wysyłane do serwera z odpowiednimi danymi.
  - Serwer przetwarza żądanie, wykonuje odpowiednie operacje na bazie danych i zwraca odpowiedź do klienta.

3. **Przeglądanie zadań**:
  - Użytkownik przegląda swoje zadania na stronie frontendowej.
  - Frontend wysyła żądanie HTTP GET do serwera w celu pobrania listy zadań.
  - Serwer pobiera dane z bazy danych i zwraca je do klienta.

### 4.4 Bezpieczeństwo
- **Hashowanie haseł**: Hasła użytkowników są hashowane przy użyciu biblioteki bcryptjs przed zapisaniem ich w bazie danych.
- **Autoryzacja JWT**: Uwierzytelnianie użytkowników jest zarządzane za pomocą tokenów JWT. Tokeny są generowane podczas logowania i weryfikowane przy każdym żądaniu do chronionych endpointów.
- **Middleware**: Middleware na serwerze obsługuje uwierzytelnianie, autoryzację oraz globalną obsługę błędów.

Ta architektura zapewnia skalowalność, bezpieczeństwo i łatwość utrzymania systemu TaskMaster, umożliwiając jednocześnie prostą i intuicyjną obsługę przez użytkowników końcowych.

## 5. Endpointy
### 5.1. Auth Routes (ścieżki uwierzytelniania)
- `/signup`: POST - Tworzenie nowego konta użytkownika.
- `/signin`: POST - Logowanie użytkownika.
- `/signout`: GET - Wylogowanie użytkownika.

### 5.2. Task Routes (ścieżki związane z zadaniami)
- `/`: GET - Pobieranie zadań użytkownika.
- `/`: POST - Tworzenie nowego zadania.
- `/:id`: PUT - Aktualizacja istniejącego zadania.
- `/:id`: DELETE - Usunięcie istniejącego zadania.

### 5.3. User Routes (ścieżki związane z użytkownikami)
- `/`: GET - Testowanie działania API.
- `/update/:id`: POST - Aktualizacja danych użytkownika.
- `/delete/:id`: DELETE - Usunięcie konta użytkownika.

## 6. Wiremocki
Poniżej znajdują się wiremocki (makiety) przedstawiające kluczowe strony i funkcje aplikacji TaskMaster. Pozwolą one na lepsze zrozumienie wyglądu i interakcji użytkownika z aplikacją.

### Landing Page
Strona główna aplikacji TaskMaster, która zachęca nowych użytkowników do założenia konta lub zalogowania się. Na stronie znajduje się przycisk "Get Started", który prowadzi do formularza rejestracji.
<img width="1552" alt="landing" src="https://github.com/P4r1nc3/MERN_Project/assets/51295585/b25f1768-1436-4766-9a93-bb00289b8d84">

### Sign Up
Formularz rejestracji nowego użytkownika. Umożliwia użytkownikom wprowadzenie nazwy użytkownika, adresu e-mail i hasła, a następnie utworzenie nowego konta.
<img width="1552" alt="signup" src="https://github.com/P4r1nc3/MERN_Project/assets/51295585/c44ec22c-5c20-4d9e-9e36-4be9849db876">

### Sign In
Formularz logowania istniejącego użytkownika. Użytkownicy mogą wprowadzić swój adres e-mail i hasło, aby zalogować się na swoje konto.
<img width="1552" alt="signin" src="https://github.com/P4r1nc3/MERN_Project/assets/51295585/6bf7492c-5527-4fed-a6c4-766ae0e63b84">

### Tasks
Strona z listą zadań użytkownika. Umożliwia przeglądanie wszystkich zadań, filtrowanie ich według daty i priorytetu oraz zarządzanie zadaniami poprzez edycję lub usuwanie.
<img width="1552" alt="tasks" src="https://github.com/P4r1nc3/MERN_Project/assets/51295585/982e6b1c-a392-4930-b09f-69568433e2b4">

### Add Task
Formularz dodawania nowego zadania. Użytkownicy mogą wprowadzić opis zadania, ustawić datę ukończenia oraz priorytet zadania. Formularz zawiera przyciski do zapisywania lub anulowania nowego zadania.
<img width="1552" alt="addtask" src="https://github.com/P4r1nc3/MERN_Project/assets/51295585/0ca6b963-ed0a-4420-87e9-567758cd6e2d">

### Profile
Strona profilu użytkownika, na której można edytować dane osobowe, takie jak nazwa użytkownika, adres e-mail i hasło. Umożliwia również usunięcie konta użytkownika lub wylogowanie się z aplikacji.
<img width="1552" alt="profile" src="https://github.com/P4r1nc3/MERN_Project/assets/51295585/b13252d6-fce0-46f5-ac90-2a52df283759">

## 7. Runbook

### 7.1 Instalacja i uruchomienie
1. **Klonowanie repozytorium**:
   ```bash
   git clone https://github.com/P4r1nc3/MERN_Project
   cd MERN_Project
   ```
2. **Instalacja zależności**:
   ```bash
   npm install
   cd frontend
   npm install
   cd ..
   ```
3. **Uruchomienie aplikacji**:
  - Backend:
    ```bash
    npm start
    ```
  - Frontend:
    ```bash
    cd frontend
    npm start
    ```

### 7.2. Plik konfiguracyjny .env
Aby aplikacja działała poprawnie, należy skonfigurować plik `.env` z odpowiednimi zmiennymi środowiskowymi. Przykład pliku `.env` dla projektu TaskMaster:

```plaintext
MONGO=<YOUR_MONGO_DB_CONNECTION_STRING>
JWT_SECRET=<YOUR_JWT_SECRET_KEY>
VITE_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
```

### Wyjaśnienie zmiennych:
- `MONGO`: String połączeniowy do bazy danych MongoDB.
- `JWT_SECRET`: Klucz tajny używany do podpisywania tokenów JWT.
- `VITE_FIREBASE_API_KEY`: Klucz API używany do integracji z Firebase.

## 8. Przyszłe rozszerzenia
- **Integracja z kalendarzem**: Możliwość integracji z popularnymi usługami kalendarza, aby automatycznie synchronizować zadania.
- **Powiadomienia**: Implementacja powiadomień push, aby informować użytkowników o nadchodzących zadaniach.

## 9. Licencja

Projekt TaskMaster jest udostępniany na licencji MIT.

```plaintext
MIT License

Copyright (c) 2024 TaskMaster

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
