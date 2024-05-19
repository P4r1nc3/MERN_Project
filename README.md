# Projekt TaskMaster

## 1. Opis projektu
TaskMaster jest narzędziem do organizacji i zarządzania zadaniami. Umożliwia łatwe zarządzanie codziennymi zadaniami, ustawianie przypomnień i śledzenie postępu. TaskMaster pomaga utrzymać wszystko na właściwej ścieżce i w czytelny sposób.

## 2. Funkcjonalności
1. **Założenie konta**: Użytkownicy mogą tworzyć konta, co umożliwia dostęp do dodatkowych funkcji.
2. **Edycja danych**: Możliwość zmiany danych osobowych, takich jak nazwa użytkownika czy adres e-mail.
3. **Zmiana awatara**: Użytkownicy mogą przypisać lub zmienić swój awatar, personalizując swoje konto.
4. **Dodawanie tasków**: Możliwość dodawania nowych zadań do listy do wykonania.
5. **Ustawianie priorytetów tasków**: Umożliwia użytkownikom określanie ważności poszczególnych zadań poprzez ich priorytetyzację.
6. **Modyfikowanie tasków**: Użytkownicy mogą edytować istniejące zadania, zmieniając ich szczegóły lub priorytety.
7. **Filtrowanie i wyszukiwanie tasków**: Funkcja pozwalająca użytkownikom filtrować lub wyszukiwać zadania według różnych kryteriów, ułatwiając zarządzanie nimi.
8. **Usuwanie tasków**: Możliwość usuwania zadań, które zostały wykonane lub nie są już potrzebne.

## 3. Użyte technologie (Stack MERN)
- **MongoDB**: Baza danych NoSQL do przechowywania danych aplikacji.
- **Express.js**: Framework do tworzenia aplikacji internetowych w Node.js.
- **React.js**: Biblioteka JavaScript do budowania interfejsów użytkownika.
- **Node.js**: Środowisko uruchomieniowe JavaScript po stronie serwera.

## 4. Struktura aplikacji
Aplikacja składa się z dwóch głównych części: części klienckiej (frontend) oraz serwerowej (backend).

### 4.1. Część kliencka (frontend)
- **Technologie**: React.js
- **Opis**: Interfejs użytkownika aplikacji, zaimplementowany przy użyciu biblioteki React.js.
- **Lokalizacja**: Pliki związane z częścią kliencką znajdują się w folderze `frontend`.

### 4.2. Część serwerowa (backend)
- **Technologie**: Node.js, Express.js
- **Opis**: Serwer obsługujący logikę biznesową oraz komunikację z bazą danych.
- **Lokalizacja**: Pliki związane z częścią serwerową znajdują się w folderze `backend`.

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

## 6. Modele w bazie danych

W bazie danych dla projektu TaskMaster mamy dwie główne tabele (kolekcje): `users` i `tasks`. Relacja między tymi tabelami jest typu "jeden-do-wielu", co oznacza, że jeden użytkownik może mieć wiele zadań, ale każde zadanie jest przypisane do jednego użytkownika.

### 6.1 Diagram relacji

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

### 6.2 Opis relacji
- Każdy dokument w kolekcji `Task` ma pole `user`, które przechowuje identyfikator `_id` użytkownika z kolekcji `User`.
- Ta relacja umożliwia przypisanie wielu zadań do jednego użytkownika, przy czym każde zadanie jest przypisane do dokładnie jednego użytkownika.

### 6.3 Wizualizacja w notacji ERD (Entity-Relationship Diagram)

```plaintext
User (1) ──────── (∞) Task
```

### 6.4 Szczegóły pól i relacji

#### Task Model
- **Opis**: Model reprezentujący zadania przechowywane w bazie danych.
- **Pola**:
  - `_id` (Primary Key): Unikalny identyfikator zadania.
  - `description`: Opis zadania.
  - `completed`: Status ukończenia zadania.
  - `user` (Foreign Key): Odwołanie do `_id` użytkownika z kolekcji `User`, reprezentujące właściciela zadania.
  - `dueTo`: Data wyznaczona na ukończenie zadania.
  - `priority`: Priorytet zadania.
  - `createdAt`: Data utworzenia rekordu.
  - `updatedAt`: Data ostatniej aktualizacji rekordu.

#### User Model
- **Opis**: Model reprezentujący użytkowników przechowywanych w bazie danych.
- **Pola**:
  - `_id` (Primary Key): Unikalny identyfikator użytkownika.
  - `username`: Nazwa użytkownika.
  - `email`: Adres e-mail użytkownika.
  - `password`: Hasło użytkownika.
  - `profilePicture`: Adres URL do zdjęcia profilowego użytkownika.
  - `createdAt`: Data utworzenia rekordu.
  - `updatedAt`: Data ostatniej aktualizacji rekordu.

## 7. Runbook

## 7.1 Instalacja i uruchomienie
1. **Klonowanie repozytorium**:
   ```bash
   git clone https://github.com/P4r1nc3/MERN_Project
   cd MERN_Project
   ```
2.  **Instalacja zależności**:
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

Wyjaśnienie zmiennych:
- `MONGO`: String połączeniowy do bazy danych MongoDB.
- `JWT_SECRET`: Klucz tajny używany do podpisywania tokenów JWT.
- `VITE_FIREBASE_API_KEY`: Klucz API używany do integracji z Firebase (jeśli jest używany w projekcie).