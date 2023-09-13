# Notes

Ini merupakan sebuah catatan yang berisi ringkasan hal-hal penting dalam pembelajaran saya pada kelas [Belajar Fundamental Front-End Web Development](https://www.dicoding.com/academies/163).

## Daftar Isi

- [Notes](#notes)
  - [Daftar Isi](#daftar-isi)
  - [ECMAScript 6](#ecmascript-6)
    - [Deklarasi Variabel](#deklarasi-variabel)
      - [_Hoisting_](#hoisting)
      - [`let` \& `const`](#let--const)
      - [Inisialisasi dan ubah](#inisialisasi-dan-ubah)
    - [_Template Literals_](#template-literals)
    - [_Destructuring Object_ dan _Array_](#destructuring-object-dan-array)
    - [_Spreading Operator_ dan _Rest Parameter_ (`...`)](#spreading-operator-dan-rest-parameter-)
    - [_Arrow Function_](#arrow-function)
    - [_Class_](#class)
      - [_Constructor_, _Instance_, _Property Accessor_](#constructor-instance-property-accessor)
      - [_Inheritance_](#inheritance)
      - [_Static Method_](#static-method)
    - [_Asynchronous_](#asynchronous)
      - [`setTimeOut`](#settimeout)
      - [_Callback Function_](#callback-function)
      - [_Promise_](#promise)
      - [`async` \& `await`](#async--await)
    - [Module](#module)
      - [Ekspor \& Impor](#ekspor--impor)
  - [_Web Component_](#web-component)
    - [_Custom Element_](#custom-element)
      - [_Lifecycle Callbacks_](#lifecycle-callbacks)
      - [Atribut dan _Method_](#atribut-dan-method)
    - [_Shadow_ DOM](#shadow-dom)
  - [Package Manager](#package-manager)
    - [NPM](#npm)
  - [Bundle dengan Module Bundler (Webpack)](#bundle-dengan-module-bundler-webpack)
    - [Core Concepts](#core-concepts)
      - [_Entry_](#entry)
      - [_Output_](#output)
      - [_Loaders_](#loaders)
      - [_Plugin_](#plugin)
      - [Mode](#mode)
    - [Implementasi webpack](#implementasi-webpack)
  - [Asynchronous JavaScript Request](#asynchronous-javascript-request)
    - [Web API](#web-api)
    - [CORS](#cors)
    - [JavaScript Object Notation (JSON)](#javascript-object-notation-json)
    - [AJAX menggunakan XHR](#ajax-menggunakan-xhr)
    - [AJAX menggunakan Fetch](#ajax-menggunakan-fetch)

## ECMAScript 6

### Deklarasi Variabel

#### _Hoisting_

_Hoisting_ merupakan kondisi dimana ketika variabel dideklarasikan dengan _keyword_ `var` sehingga variabel pada tingkat atas sebuah fungsi.

```js
function makeTea(isCold) {
    if (isCold) {
        var tea = 'Make an Ice Tea!';
    } else {
        var tea = 'Make a Hot Tea!';
    }
    return tea;
}

console.log(makeTea(false));

/* Output: Make a Hot Tea! */
```

_Hoisting_ juga dapat mengakibatkan variabel dapat diinisialisasi sebelum dideklarasikan.

#### `let` & `const`

`let` & `const` merupakan _keyword_ yang dapat mencegah terjadinya _hoisting_ sehingga dapat meminimalisir terjadinya _bug_ dalam penggunaan variabel.

#### Inisialisasi dan ubah

Perbedaan dari keduanya adalah ketika terdapat sebuah variabel _constant_ berupa _array_ ataupun _object_. Variabel tersebut sudah pasti tidak dapat di-inisialisasi kembali tetapi tetap dapat diubah elemennya atau _property_-nya.

### _Template Literals_

Dengan bantuan _template literals_, _programmer_ dapat menyelipkan variabel di dalamnya dan dapat membaca _whitespace_ dan _linespace_ tanpa _escape character_ seperti berikut.

```js
const name = 'Mario Alfredo Bawu';
const age = 20
let test = `Perkenalkan nama saya ${name}. Umur saya ${age} tahun.
Saya lahir di Mataram, 29 Juli 2003.
Kemudian sekarang saya tinggal di Ampenan, Mataram, Nusa Tenggara Barat.
`;
```

### _Destructuring Object_ dan _Array_

Destructing Object dapat dilakukan dengan bantuan `{ }`. Mulai dari _destructing assignment_, _default value_, dan _different variabel name_. Berikut contoh pengimplementasiannya.

```js
const myself = {
    name: 'Mario',
    age: '19',
    born: 'Mataram, 29 July 2003'
};

const {name, age, born} = myself;
let name2, age2, born2;

// destructing assignment & different variabel name
({name: name2, age: age2, born: born2} = myself);
// default value & different variabel name
const {name: name3, age: age3, born: born3, address='Ampenan'} = myself;
```

Destructing Array pada dasarnya sama, hanya berbeda dipenggunaan tanda kurung yang menjadi kurung siku `[ ]` dan dikarenakan array disimpan secara berurutan maka destructing array akan wajib memperhatikan urutannya, bukan nama dari variabel yang akan menyimpannya. Berikut contoh pengimplementasiannya.

```js
const malbaBakery = ['Strawberry Doughnut', 'Chocolate Doughnut', 'Croissant', 'Srikaya Bread'];
let [myOrder] = malbaBakery;
let [, sisterOrder,daddyOrder, mommyOrder, fianceOrder='Crocodile Bread'] = malbaBakery;

// swapping
[myOrder, fianceOrder] = [fianceOrder, myOrder];
```

### _Spreading Operator_ dan _Rest Parameter_ (`...`)

_Spread operator_ adalah operator yang digunakan untuk menyebarkan elemen dari sebuah _iterable object_ seperti _array_ dan cocok digunakan dalam memberikan argumen pada _variadic functions_ seperti `console.log()` ataupun `Math.max()`. Sedangkan _rest parameter_ adalah ketika ingin membuat sebuar _variadic function_ maka operator tersebut dapat digunakan untuk membentuk sebuah parameter berupa _iterable object_ untuk menampung argumen yang jumlahnya tak tentu atau hasil dri _spread operator_.

### _Arrow Function_

_Arrow Function_ merupakan salah satu cara penulisan fungsi dalam bentuk ekspresi menggunakan panah (=>). Fungsi ini dapat tersimpan dalam sebuah variabel maupun properti objek dan langsung diimplementasikan sebagai argumen sebuah fungsi. Penulisannya cukup menuliskan paramter dan _body_-nya, jika tanpa parameter cukup dengan tanda kurung `()` atau `(_)` jika hanya ada satu maka tidak perlu tanda kurung, begitu juga dengan _body_-nya, jika hanya satu _statement_ maka tidak perlu tanda `{}`

Pada _regular function_ jika ingin membentuk objek maka ketika dipanggil wajib menyertakan _keyword_ `new`, sehingga objek `this` pada fungsi tersebut dapat mengacu pada objek fungsi tersebut, sedangkan dengn _arrow function_ tidak perlu menggunakannya dan object `this` akan langsung mengacu pada dimana fungsi tersebut dipanggil.

### _Class_

_Class_ pada JS sebelum ES6 menggunakan teknik _prototype_. Dengan begitu maka method dari masing-masing tidak berkali-kali dibuat oleh masing-masing _instance_ nantinya sehingga cukup diwariskan (_inheritance_) ke setiap _instance_ melalui _prototype_ alias `__proto__`. Setelah update ES6 penulisan _class_ berubah menjadi seperti bahasa yang lainnya.

#### _Constructor_, _Instance_, _Property Accessor_

```js
class Book{
    constructor(title, author, publishDate){
        this.title = title;
        this.author = author;
        this._publishDate = publishDate;
    }

    get publishDate(){
        return this._publishDate;
    }

    set publishDate(pubDate){
        this._publishDate = pubDate;
    }
}

const myBook = new Book('Si Kancil dan Si Buaya', 'Purbaloka', '22 Desember 2002');
const myFianceBook = new Book('Ladin 1977', 'Batu Kampuang', '29 Februari 2039');
```

#### _Inheritance_

```JS
class ParentClass{
    constructor(prop1, prop2){
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}
class ChildClass extends ParentClass {
    constructor(prop1, prop2, prop3){
        super(prop1, prop2);
        this.prop3 = prop3;
    }
}
```

#### _Static Method_

_Static Method_ merupakan _method_ yang dapat dipanggil tanpa harus melakukan instansiasi terlebih dahulu.

### _Asynchronous_

#### `setTimeOut`

Fungsi untuk memberikan waktu jeda sebelum dieksekusi oleh program sehingga berjalan secara _asynchronous_.

#### _Callback Function_

Callback function merupakan fungsi yang menjadi argumen dan digunakan pada fungsi lainnya.

#### _Promise_

_Promise_ dapat menghindari terjdinya _callback hell_ alias penggunaan _callback_ yang beruntun. Sebuah object _promise_ memerlukan fungsi _resolver_ atau _executor_ ketika instansiasi. Di dalamnya terdapat 2 fungsi yaitu `resolve()` untuk mengirimkan data ketika _promise_ berhasil alias statusnya berubah menjadi _fulfilled_ sedangkan `reject()` untuk memberitahu ketika _promise_ tidak dapat dijalankan alias statusnya berubah menjadi _rejected_. Untuk menangani status tersebut digunakan _method_ `.then()` setelah _promise_ dipanggil. Argumen yang diberikan pada _method_ tersebut berupa fungsi _handler_ `onFulfilled` ataupun `onRejected`. Berikut contohnya.

```js
const execution = (resolve, reject) => {
    if(true) resolve('Anda telah berhasil');
    else reject('Anda telah gagal');
}

const fulfilledHandler = mess => console.log(mess);
const rejectedHandler = mess => {
    console.log(mess);
    console.log('Coba lagi...');
}

const myPromise = new Promise(execution);
myPromise.then(fulfilledHandler, rejectedHandler);
```

> Salah satu cara menulis kode yang baik adalah mengikuti prinsip yang disebut separation of concerns yang artinya pemisahan masalah.

Maka dari itu terdapat _method_ `.catch()` yang dapat digunakan untuk menerima argumen dari _handler_ `onRejected`. Sehingga menjadi seperti berikut.

```js
myPromise.then(fulfilledHandler).catch(rejectedHandler);
```

_Promise_ juga dapat dibuat secara berantai dengan cara mengembalikan hasil fungsi _callback_ berupa _promise_ sehingga dapat dilanjutkan dengan fungsi lain yang menangani _promise_ tersebut. Selain itu agar dapat menjalankan beberapa promise secara bersamaan dapat menggunakan _method_ `.all()`. Berikut contohnya.

```js
const promise1 = () => {
    return new Promise(resolve => {
        setTimeOut(()=>{
            resolve('promise1 berhasil')
        }, 4000);
    })
};

const promise2 = () => {
    return new Promise(resolve => {
        setTimeOut(()=>{
            resolve('promise2 berhasil')
        }, 3000);
    })
};

const myPromises = [promise1(), promise2()];

Promise.all(myPromises).then( mess => console.log(mess));
/* Hasilnya:
['promise1 berhasil', 'promise2 berhasil'] (Urutan hasil yang keluar sesuai posisi dan dilakukan sesuai timeout terlama)
*/
```

#### `async` & `await`

Kedua keyword tersebut digunakan agar promise dapat dijalankan pada sebuah fungsi agar fungsi tersebut berjalan secara async. Untuk menangani `onRejected` dapat menggunakan `try-catch`.

### Module

#### Ekspor & Impor

Terdapat beberapa versi dalam melakukannya seperti pada Node.js untuk _export_ dapat menggunakan keyword `module.exports` yang berupa objek untuk menampung berbagai variabel dan untuk _import_ dapat menggunakan fungsi `require('./file.js')` yang kemudian dapat ditampung ke dalam sebuah variabel. Karena yang dikirim berupa objek maka dapat memanfaatkan _object literals_ dan _destructing object_. Sedangkan pada ES6 atribut `type` dari _tag script_ tersebut perlu diisi dengan `module`. Kemudian untuk _export_ satu variabel dapat menggunakan _keyword_ `export default ...` dan untuk _import_ satu variabel dapat menggunakan _keyword_ `import varName from './file.js'`. Sedangkan jika lebih bari satu variabel dapat menggunakan  _object literals_ dan _destructing object_ namun jika ingin mengubah nama variabel ketika di-_import_ dapat menggunakan _keyword_ `as`.

## _Web Component_

Kelebihan _web component_ adalah sesuai standard sehingga memiliki compability yang tinggi dan juga _simple_ karena tidak memerlukan framework alias murni. Terdapat 2 API yang digunakan yaitu _Custom Element_ dan _Shadow DOM_.

### _Custom Element_

Dengan _custom element_ kita dapat membuat _element_ kita sendiri, sehingga kita dapat membuat DOM versi kita masing-masing dan lebih mudah untuk dibaca. Untuk membuatnya cukup melakukan _inheritance_ dari _class_ `HTMLElement` kemudian mendaftarkan _class_ tersebut dengan namanya menggunakan _method_ `define()` dari variabel global `customElements`.

> Penamaan _element_ disarankan menggunakan dua kata yang disambung dengan tanda strip (-) agar dapat dibedakan dengan elemen asli dari HTML

#### _Lifecycle Callbacks_

Berikut merupakan _Lifecycle Callbacks_ yang terdapat pada HTMLElement dan bersifat opsional.

![Ilustrasi Lifecycle Callbacks](./Notes-Files/Lifecycle%20Callbacks.png)

- `connectedCallback()`: terpanggil ketika berhasil ditambahkan ke dokumen sehingga cocok dalam konfigurasi awal seperti pengambilan data pengaturan atribut dan lain-lain.
- `disconnectedCallback()`: terpanggil ketika elemen dikeluarkan dari DOM (`remove()`) sehingga cocok untuk membershikan data yang masih disimpan (event, objek, state, dll).
- `attributeChangedCallback()`: terpanggil ketika terdapat atribut yang sedang di-observe dengan fungsi `get obervedAttrbute` berubah sehingga cocok untuk melakukan _reload_.
- `adoptedCallback()`: terpanggil ketika elemen dipindahkan ke dokumen baru (biasanya saat menggunakan tag `<iframe>`).

Selain itu terdapat fungsi `constructor` untuk konfigurasi awal ketika elemen dibuat seperti _event listener_ dan _shadow DOM_ dan ketika menggunakannya perlu _method_ `super()`. Untuk menginstansiasi _custom element_ dapat dilakukan baik lewat dokumen HTML ataupun menggunakan Js dengan _method_ `document.createElement()`.

#### Atribut dan _Method_

Sebagai sebuah elemen maka _custom element_ dapat memiliki atribut, properti, dan _method_ bawaan dari DOM yang dpat dimanfaatkan untuk mengisi data yang terdapat di dalamnya. Berikut merupakan penggunaan _lifecycle callback_ yang digunakan untuk memanipulasi atribut _custom element_

```js
class bookCard extends HTMLElement {
    connectedCallback(){
        this.src = this.getAttribute('src') || null;
        this.alt = this.getAttribute('alt') || null;
        this.title = this.getAttribute('title') || null;
        this.author = this.getAttribute('author') || null;
        this.link = this.getAttribute('link') || null;
        this.render();
    }

    render(){
        this.innerHTML = `
            <img src="${this.src}">
            <div>
                <h3>${this.title}</h3>
                <p>${this.author}</p>
                <a href="${this.link}">
            </div>
        `;
    }
    
    attributeChangedCallback(name, oldValue, newValue){
        this[name] = newValue;
        this.render();
    }

    static get observedAttribute(){
        return ['src', 'alt', 'title', 'author', 'link']
    }
}

customElements.defines('book-card', bookCard);
```

namun agar elemen tersebut dapat terlihat lebih sederhana dalam dokumen HTML, maka disarankan untuk memanfaatkan objek yang dapat menampung data-data tersebut. Sehingga dari _class_ pada potongan kode di atas akan di rubah menjadi seperti berikut.

```js
class bookCard extends HTMLElement {
    set book(book){
        this._book = book;
        this.render();
    }

    render(){
        this.innerHTML = `
            <img src="${this._book.src}">
            <div>
                <h3>${this._book.title}</h3>
                <p>${this._book.author}</p>
                <a href="${this._book.link}">
            </div>
        `;
    }
}
```

### _Shadow_ DOM

Konsep yang diterapkan oleh _shadow_ DOM yaitu _Encapsulation_ agar elemen yang telah dibuat tidak dapat diganggu oleh user dari luar. _Shadow_ DOM juga dapat disebut DOM dalam DOM. Berikut merupakan termminologi dari _shadow_ DOM.

![Shadow DOM Terminology](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM/shadowdom.svg)

- Shadow host: Merupakan komponen/node yang terdapat pada regular DOM di mana shadow DOM terlampir pada komponen/node ini.
- Shadow tree: DOM Tree di dalam Shadow DOM.
- Shadow boundary: Batas dari shadow DOM dengan regular DOM.
- Shadow root: Root node dari shadow tree.

_Shadow_ DOM memiliki 2 mode yaitu `open` & `closed`. Berikut contoh implementasi _shadow_ DOM.

```js
const divEl = document.createElement('div');
const myShadowRoot = divEl.attachShadow({ mode: "closed" });
divEl.shadowRoot // null
myShadowRoot //  # shadow-root (closed)
```

## Package Manager

Package manager adalah sebuah tools yang digunakan untuk mengelola _module_/_package_ termasuk _module_ yang berupa _dependencies_ dari berbagai _library_. Pada Js terdapat 2 buah package manager yaitu Yarn dan NPM.

### NPM

NPM merupakan package manager dari node.js. untuk menginstal NPM dapat dilakukan dengan cara langsung dengan instalan yang di-_download_ melalui website-nya atau dengan bantuan NVM yang dapat digunakan untuk menginstal beberapa versi Node.js. Berikut perintah yang dilakukan untuk mempersiapkan NPM.

```shell
nvm install < node version >
nvm use < node version >
```

> Pastikan ketika menginstal NVM pada Windows lokasi folder tidak mengandung spasi.

Dalam menggunakan NPM terdapat perintah-perintah yang wajib diketahui seperti berikut.

- `npm install <package-name>` : untuk menginstal sebuah _package_.
- `npm init` : untuk membuat _file_ `package.json` pada proyek tersebut.
- `npm run <commands>` : untuk menjalankan perintah pada objek script pada `package.json`.
- `npm version` : untuk mengetahui versi npm yang digunakan.
- `npm uninstall <package-name>` : untuk menghapus sebuah _package_.

Setiap perintah terdapat berbagai _option_ yang digunakan untuk mengatur bagaimana perintah tersebut dijalankan salah satunya `-h` yang terdapat di semua perintah untuk memberikan informasi terkait perintah tersebut. Pada perintah `install` terdapat beberapa _option_ seperti `--save-dev` dan `-g`. `--save-dev` digunakan agar _depedencies_ tersebut di-instal dan dijalankan dalam tingkat _development_ sedangkan `-g` digunakan agar _package_ di-instal pada cakupan global yang artinya tidak terinstal pada porjek tersebut melainkan pada NPM tersebut sehingga dapat digunakan oleh berbagai projek dengan NPM tersebut.

## Bundle dengan Module Bundler (Webpack)

Webpack merupkan sebuah _Module Bundler_ yang digunakan untuk membungkus beberapa modul menjadi satu atau lebih berkas di _background_. Dengan Webpack semua module baikdari NPM maupun buatan sendiri digabung menjadi _static assets_ yang siap untuk tahap produksi.

### Core Concepts

![Core Concepts](./Notes-Files/Core%20Concepts.png)

Terdapat 5 konsep utama dalam webpack yaitu _entry_, output, loaders, plugin dan mode.

#### _Entry_

_Entry_ merupakan titik awal analisa berkas untuk membentuk _depedency graph_. Biasanya entry point ditempatkan pada berkas `./src/index.js` atau `webpack.config.js`. Berikut contoh penulisannya.

```js
module.exports = {
    entry: `./file.js`
}
// atau jika lebih dari 1
module.exports = {
    entry: {
        main: `./file.js`
    }
}
```

#### _Output_

Output merupakan berkas _bundle_ berdasarkan _entry point_. Dengan _output_ maka _static asset_ yang sudah dibuat dapat disimpan dan diberi nama. Biasanya berkas _static asset_ disimpan di dalam folder `dist`. Jika terdpat lebih dari 1 _entry_ maka diperlukan _substitution_ agar namanya unik. Berikut contoh penerapannya.

```js
module.exports = {
    entry: {
        main: `./file.js`,
        devmain: `./file.js`
    },
    output: {
        filename: `[name].js`,
        path: __dirname + `/dist`
    }
}
```

#### _Loaders_

_Loader_ merupakan _transformation tools_ pada webpack untuk memproses seluruh berkas kecuali Js dan JSON untuk dapat digunakan pada tahap produksi. Loader akan disimpan ke dalam properti `module.rules`. __Sebuah _loader_ tidak datang bersamaan dengan webpack sehingga perlu menginstallnya melalui NPM__. Di dalam properti tersebut terdapat beberapa elemen berupa objek dengan properti `test` berisi format file dan `use` berisi loader yang digunakan. Setiap format file dapat menggunakan lebih dari 1 loader dan loader yang dimuat berurutan dari posisi yang terakhir. Di setiap loader juga terdapat properti `options`. Berikut contoh penerapannya.

```js
module.exports = {
    entry: {
        main: `./file.js`,
        devmain: `./file.js`
    },
    output: {
        filename: `[name].js`,
        path: __dirname + `/dist`
    }
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            // memasukkan style dengan tag <style> di bawah dari element <body> 
                            insert: "body"}
                    },
                    {loader: "css-loader"}
                ]
            }
        ]
    }
}
```

#### _Plugin_

Plugin digunakan untuk optimasi bundle, manajemen aset, dan lain-lain. _Plugin_ yang ditambahkan berupa sebuah objek dari _class_ di setiap _plugin_ yang telah kita tambahkan. _Plugin_ tersebut dapat berasal dari webpack alias _built-in_ atau dapat ditambahkan dari luar menggunakan NPM. Berikut contoh penerapannya.

```js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: `./file.js`,
        devmain: `./file.js`
    },
    output: {
        filename: `[name].js`,
        path: __dirname + `/dist`
    }
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            // memasukkan style dengan tag <style> di bawah dari element <body> 
                            insert: "body"}
                    },
                    {loader: "css-loader"}
                ]
            }
        ]
    }
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}
```

#### Mode

Mode digunakan untuk acuan optimasi apa aja saya yang harus diimplementasikan. Terdapat 3 nilai yang digunakan yaitu _development_, _production_ dan _none_ namun secara _default_ bernilai _production_. Nilai tersebut tidak hanya dapat diubah melalui properti `mode` namun juga dapat dengan perintah CLI `webpack --mode development`. Setiap `mode` juga memiliki propertinya masing-masing. Agar webpack memiliki perilaku berdasarkan mode maka `module.exports` dapat diubah menjadi fungsi. Berikut contoh penerapannya.

```js

const config = {
    entry: [

    ]
    //...
}

module.exports = (env, args) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }
    
    if (argv.mode === 'production') {
        //...
    }
    
    return config;
};
```

Kemudian untuk menentukan berkas berkas _webpack configuration_ yang berbeda dapat menambahkan flag `--config` pada properti `script` di `package.json` seperti berikut.

```js
"scripts": {
  "build:prod": "webpack --config webpack.prod.js",
  "build:dev": "webpack --config webpack.dev.js"
}
```

### Implementasi webpack

Untuk menginstal wabpack dibutuhkan 2 package yaitu webpack dan wabpack-cli seperti berikut.

```shell
npm install webpack webpack-cli --save-dev
```

Untuk menambahkan file yang akan di-bundle dapat di-import ke dalam entry-point. Sehingga jika sebuah package di-import maka akan digabung juga menjadi berkas bundle sehingga tidak disarankan karena akan membuat ukuran berkas bundle membengkak. Terdapat beberapa loader yang dapat mengubah format ES6 menjadi versi yang lebih rendah sehingga dapat dijalankan di browser yang lebih beragam Salah satunya babel. Untuk menginstalnya dapat menggunakan perintah berikut.

```shell
npm install @babel/core @babel/preset-env babel-loader --save-dev
```

Selain itu terdapat `dev-server` dari webpack yang digunakan agar dapat melakukan _live-reloading_ sehingga kita dapat melihat perubahan-perubahan minor secara langsung tanpa melakukan _build_. Kemudian terdapat `webpack-merge` yang dapat menggabungkan konfigurasi secara umum dengan konfigurasi pada masing-masing _environment_/mode. Lalu terdapat _plugin_ `HtmlWebpackPlugin` untuk membentuk _file_ HTML dari _template_ yang sudah ada sehingga aplikasi web yang utuh dapat menjadi satu di dalam folder _output_-nya alias folder `dist`.

## Asynchronous JavaScript Request

XMLHttpRequest (XHR) awalnya digunakan agar _browser_ dapat melakukan HTTP _request_ dan memperbarui data dari server tanpa harus memuat ulang seluruh halaman web karena XHR berjalan secara asynchronous. Karena XML menjadi format yang sering digunakan sebelum JSON sehingga sering disebut sebagai AJAX (Asynchronous JavaScript and XML). Kemudian hadir `Fetch` yang dapat mengembalikan `Promise.

### Web API

Web API (Application Programming Interface) merupakan _interface_ yang disediakan oleh penyedia data agar data yang ia miliki dapat dimanfaatkan dengan mudah oleh banyak aplikasi.

![REST API](./Notes-Files/REST%20API.png)

REST API (Representational API) adalah bentuk sederhana dari sebuah API yang sering digunakan. REST API hampir seluruhnya berkomunikasi melalui HTTP menuju endpoint yang telah ditentukan. Terdapat tipe/method yang umumnya digunakan dalam menggunakan sebuah REST API, berikut keempat method tersebut.

- GET: digunakan untuk mendapatkan data
- POST: digunakan untuk mengirimkan data
- PUT: digunakan untuk mengubah data
- DELETE: dogunakan untuk menghapus data

Sebagai REST API _client_ yang mengirimkan HTTP _Request_, maka REST API akan mmemberikan sebuah HTTP _Response_. Di dalamnya, selain informasi mengenai data, terdapat juga _status code_ seperti berikut.

- 200 (OK) : Request berhasil dipenuhi oleh server (Web API).
- 400 (Bad Request) : Server tidak mengerti request yang dikirimkan client.
- 401 (Unauthorized) : Request membutuhkan authorization.
- 403 (Forbidden) : Server mengerti request dari client namun menolak untuk memprosesnya karena request tersebut tidak boleh dilakukan.
- 404 (Not Found) : Resource yang client minta, tidak ditemukan.
- 500 (Server Error) : Server mengalami kendala untuk memproses request.

Terdapat beberapa API yang dapat digunakan secara _public_ maupun _private_ yang membuat kita terhalang dengan _same-origin policy_.

### CORS

CORS (Cross-Origin Resource Sharing) merupakan teknologi yan digunakan agar data dari domain yang berbeda dapat digunakan secara umum untuk menghindari _same-origin policy_.

### JavaScript Object Notation (JSON)

Perbedaan Js Object dengan JSON adalah _key_ pada JSON menggunakan tanda petik dua (" "). Penggunaan JSON sama seperti objek pada umumnya, karena terdapat _key_ dengan _white space_ dapat dipanggil dengan _indexing_. JSON selalu dikirim dalam bentuk _string_. Lalu pada Js agar dapat mengolahnya dalam sebagai objek maka diperlukan objek global yaitu JSON dengan _method_ `parse` untuk mengubah _string_ JSON menjadi objek Js dan `stringify` merubah objek Js mejadi JSON _string_.

### AJAX menggunakan XHR

```js
const xhr = new XMLHttpRequest();

xhr.onload = function () {
    console.log(this.responseText);
}

xhr.onerror = function () {
    console.log(`There's something wrong!`);
}

xhr.open('GET', 'http://api-to-call.com/endpoint');
xhr.send();
```

Ketika ingin melakukan method seperti POST & PUT, maka kita perlu menambahkan properti pada _header_ dan isi dari _body_ pada HTTP _Request_ tersebut. Berikut contohnya.

```Js
xhr.open('POST', 'http://api-to-call.com/endpoint');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', '12345');

const book = {
    id: "026918",
    title: "My Fat-ish",
    author: "Tanaka Sora"
};

xhr.send(JSON.stringify(book));
```

Pada kode di atas terdapat properti _header_ yaitu `Content-Type` dengan _value_ `application/json` agar data yang dikirimkan diidentifikasi sebagai JSON, namun tidak hanya JSON yang dapat dikirim, bisa saja _Blob_, _BufferSource_, _FormData_, _URLSeachParam_, _ReadableStream_ atau _USVString object_.

### AJAX menggunakan Fetch

```js
fetch('http://api-to-call.com/endpoint');
```

Karena hasil yang diberikan berupa promise maka perlu fungsi untuk mendapatkan isi alias _body_ dari HTTP _Response_ yang didapatkan seperti berikut.

```js
fetch('http://api-to-call.com/endpoint')
    .then(response => {
        return reponse.json();
    })
    .then(responseJson => {
        console.log(responseJson);
    })
    .catch(error => {
        console.log(error);
    });

// atau

async function getData(){
    try{
        const response = await fetch('http://api-to-call.com/endpoint');
        const responseJson = await response.json();
        console.log(responseJson);
    } catch (error) {
        console.log(error);
    }
}

getData();
```

Pada fungsi `fetch()` terdapat parameter opsional untuk menyertakan berbagai properti seperti _method_, _header_ dan juga _body_ dari HTTP _Request_ yang akan dikirimkan. Berikut contoh penerapannya.

```js
fetch('http://api-to-call.com/endpoint',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', 
        'X-Auth-Token': '12345'
    },
    body: JSON.stringify({
        id: '291909',
        title: `Malba's Journey`,
        author: 'Edo Rio'
    })
});
```
