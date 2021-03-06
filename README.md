# ADIARTA Dashboard

<p align="center"><img src='img/adiarta.png' width=80% /></p>

## 1. Deskripsi

Pembuatan aplikasi “ADIARTA” merupakan salah satu terobosan dari Dinas Komunikasi dan Informatika Kota Batu dalam memberikan fasilitas kepada Dinas Perpustakaan dan Kearsipan Kota Batu untuk menjamin terciptanya pengelolaan dokumentasi dan informasi yang terpadu dan terintegrasi diberbagai instansi pemerintah dan institusi lainnya. Salah satu tujuan aplikasi juga untuk memudahkan masing-masing operator Desa/Kelurahan dalam mengelola buku Letter C atau yang sering disebut buku percil di pemerintahan Kota Batu. 
Setelah beberapa tahun berjalan, alur dalam pengelolaan buku Letter C dilakukan dengan cara manual tanpa adanya aplikasi untuk membantu kinerja yang efisien dalam pengelolaan data. Karena hal tersebut maka Dinas Komunikasi dan Informatika Kota Batu memulai proyek ini untuk memberikan fasilitas kepada Dinas Perpustakaan dan Kearsipan Kota Batu berupa aplikasi “ADIARTA’’.

## 2. Backend

<p align="center" class="hiyaa">
<img src='img/php.svg' width=20% />
<img src='img/laravel.png' width=15% />
</p>

Untuk backend aplikasi Adiarta, menggunakan bahasa pemrograman PHP dan Framework Laravel.

- [PHP 7.4](https://www.php.net)
- [Laravel 8.0](https://www.laravel.com)
  
<!--  -->

  ### 2.1. Struktur Folder

  ```bash
  ├───app
  │   ├───Console
  │   ├───Exceptions
  │   ├───Http
  │   │   ├───Controllers
  │   │   └───Middleware
  │   ├───Models
  │   ├───Providers
  │   ├───Services
  │   └───Traits
  ├───bootstrap
  ├───config
  ├───database
  │   ├───factories
  │   ├───migrations
  │   └───seeders
  ├───public
  │   └───storage
  │       └───krawangan
  ├───routes
  ├───storage
  ├───tests
  └───vendor
  ```

  ### 2.2. Cara Menggunakan 

  ```bash
  $ composer install
  $ php artisan key:generate
  $ php artisan migrate --seed
  $ php artisan passport:install
  ```

## 3. Frontend

<p align="center" class="hiyaa">
<img src='img/js.png' width=22% />
<img src='img/react.png' width=25% />
</p>

Untuk Frontend, menggunakan Framework Javascript yaitu [React JS](https://reactjs.org/)

  ### 3.1. Struktur Folder
  
  ```bash
  ├───public
  └───src
    ├───config
    ├───css
    ├───dashboard
    │   ├───cetak-surat
    │   │   ├───document
    │   │   ├───generator
    │   │   └───table
    │   │       └───pagination
    │   ├───component
    │   ├───data-desa
    │   │   ├───crud
    │   │   └───table
    │   │       └───pagination
    │   ├───home
    │   ├───konfigurasi
    │   │   ├───crud
    │   │   └───table
    │   │       └───pagination
    │   ├───krawangan
    │   │   ├───crud
    │   │   └───table
    │   │       └───pagination
    │   ├───krawangan-detail
    │   │   ├───crud
    │   │   └───table
    │   │       └───pagination
    │   ├───letterc
    │   │   ├───crud
    │   │   │   ├───detail-history
    │   │   │   └───mutasi-select
    │   │   └───table
    │   │       └───pagination
    │   ├───sidebar
    │   └───user-config
    ├───img
    ├───login
    └───notfound
  ```
  
  ### 3.2. Cara Menggunakan

  ```bash
  # Menginstall Plugin
  $ npm install / yarn

  # Menjalankan development server
  $ npm run start / yarn start

  # Build untuk deployment
  $ npm run build / yarn build

  # Ganti Url API di src/config/API.js
  ```
  
> Dibuat oleh Anak Magang UNS untuk Diskominfo Kota Batu
> - Brilyan - Programmer
> - Chiesa - System Analyst
> - Erix - Database
> - Halim - UI/UX Designer

