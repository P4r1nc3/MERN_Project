# Projekt "TaskMaster"

## Opis projektu
TaskMaster jest narzędziem do organizacji i zarządzania zadaniami. Umożliwia łatwe zarządzanie codziennymi zadaniami, ustawianie przypomnień i śledzenie postępu. TaskMaster pomaga utrzymać wszystko na właściwej ścieżce i w czytelny sposób.

## Funkcjonalności
1. **Założenie konta**: Użytkownicy mogą tworzyć konta, co umożliwia dostęp do dodatkowych funkcji.

2. **Edycja danych**: Możliwość zmiany danych osobowych, takich jak nazwa użytkownika czy adres e-mail.

3. **Zmiana awatara**: Użytkownicy mogą przypisać lub zmienić swój awatar, personalizując swoje konto.

4. **Dodawanie tasków**: Możliwość dodawania nowych zadań do listy do wykonania.

5. **Ustawianie priorytetów tasków**: Umożliwia użytkownikom określanie ważności poszczególnych zadań poprzez ich priorytetyzację.

6. **Modyfikowanie tasków**: Użytkownicy mogą edytować istniejące zadania, zmieniając ich szczegóły lub priorytety.

7. **Filtrowanie i wyszukiwanie tasków**: Funkcja pozwalająca użytkownikom filtrować lub wyszukiwać zadania według różnych kryteriów, ułatwiając zarządzanie nimi.

8. **Usuwanie tasków**: Możliwość usuwania zadań, które zostały wykonane lub nie są już potrzebne.

### Użyte technologie (Stack MERN)
- MongoDB: baza danych NoSQL do przechowywania danych aplikacji.
- Express.js: framework do tworzenia aplikacji internetowych w Node.js.
- React.js: biblioteka JavaScript do budowania interfejsów użytkownika.
- Node.js: środowisko uruchomieniowe JavaScript po stronie serwera.

### Struktura aplikacji
Aplikacja składa się z dwóch głównych części: części klienckiej (frontend) oraz serwerowej (backend).

#### Część kliencka (frontend)
- **Technologie**: React.js
- **Opis**: Interfejs użytkownika aplikacji, zaimplementowany przy użyciu biblioteki React.js.
- **Lokalizacja**: Pliki związane z częścią kliencką znajdują się w folderze `frontend`.

#### Część serwerowa (backend)
- **Technologie**: Node.js, Express.js
- **Opis**: Serwer obsługujący logikę biznesową oraz komunikację z bazą danych.
- **Lokalizacja**: Pliki związane z częścią serwerową znajdują się w folderze `backend`.

### Endpointy
#### Auth Routes (ścieżki uwierzytelniania)
- `/signup`: POST - Tworzenie nowego konta użytkownika.
- `/signin`: POST - Logowanie użytkownika.
- `/signout`: GET - Wylogowanie użytkownika.

#### Task Routes (ścieżki związane z zadaniami)
- `/`: GET - Pobieranie zadań użytkownika.
- `/`: POST - Tworzenie nowego zadania.
- `/:id`: PUT - Aktualizacja istniejącego zadania.
- `/:id`: DELETE - Usunięcie istniejącego zadania.

#### User Routes (ścieżki związane z użytkownikami)
- `/`: GET - Testowanie działania API.
- `/update/:id`: POST - Aktualizacja danych użytkownika.
- `/delete/:id`: DELETE - Usunięcie konta użytkownika.

Powyższe endpointy zostały zdefiniowane w odpowiednich plikach routingu w części serwerowej aplikacji.

### Modele w bazie danych

#### Task Model
- **Opis**: Model reprezentujący zadania przechowywane w bazie danych.
- **Pola**:
  - `description`: Opis zadania.
  - `completed`: Status ukończenia zadania (domyślnie ustawiony na `false`).
  - `user`: Referencja do użytkownika, który jest właścicielem zadania.
  - `dueTo`: Data wyznaczona na ukończenie zadania (domyślnie ustawiona na `null`).
  - `priority`: Priorytet zadania, możliwe wartości: 'low', 'medium', 'high' (domyślnie ustawiony na `'medium'`).
- **Opcje**: Automatyczne dodawanie znaczników czasowych (`createdAt`, `updatedAt`).

#### User Model
- **Opis**: Model reprezentujący użytkowników przechowywanych w bazie danych.
- **Pola**:
  - `username`: Nazwa użytkownika (unikalna).
  - `email`: Adres e-mail użytkownika (unikalny).
  - `password`: Hasło użytkownika.
  - `profilePicture`: Adres URL do zdjęcia profilowego użytkownika (domyślnie ustawiony na domyślne zdjęcie profilowe).
- **Opcje**: Automatyczne dodawanie znaczników czasowych (`createdAt`, `updatedAt`).

Te modele definiują strukturę danych przechowywanych w bazie MongoDB. Są one używane przez aplikację do tworzenia, pobierania, aktualizowania i usuwania danych związanych z zadaniami i użytkownikami.
