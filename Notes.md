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