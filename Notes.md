# ECMAScript 6

## Deklarasi Variabel

### _Hoisting_

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

### `let` & `const`

`let` & `const` merupakan _keyword_ yang dapat mencegah terjadinya _hoisting_ sehingga dapat meminimalisir terjadinya _bug_ dalam penggunaan variabel.

### Inisialisasi dan ubah

Perbedaan dari keduanya adalah ketika terdapat sebuah variabel _constant_ berupa _array_ ataupun _object_. Variabel tersebut sudah pasti tidak dapat di-inisialisasi kembali tetapi tetap dapat diubah elemennya atau _property_-nya.

## _Template Literals_

Dengan bantuan _template literals_, _programmer_ dapat menyelipkan variabel di dalamnya dan dapat membaca _whitespace_ dan _linespace_ tanpa _escape character_ seperti berikut.

```js
const name = 'Mario Alfredo Bawu';
const age = 20
let test = `Perkenalkan nama saya ${name}. Umur saya ${age} tahun.
Saya lahir di Mataram, 29 Juli 2003.
Kemudian sekarang saya tinggal di Ampenan, Mataram, Nusa Tenggara Barat.
`;
```

## _Destructuring Object_ dan _Array_

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

## _Spreading Operator_ dan _Rest Parameter_ (`...`)

_Spread operator_ adalah operator yang digunakan untuk menyebarkan elemen dari sebuah _iterable object_ seperti _array_ dan cocok digunakan dalam memberikan argumen pada _variadic functions_ seperti `console.log()` ataupun `Math.max()`. Sedangkan _rest parameter_ adalah ketika ingin membuat sebuar _variadic function_ maka operator tersebut dapat digunakan untuk membentuk sebuah parameter berupa _iterable object_ untuk menampung argumen yang jumlahnya tak tentu atau hasil dri _spread operator_.

## _Arrow Function_

_Arrow Function_ merupakan salah satu cara penulisan fungsi dalam bentuk ekspresi menggunakan panah (=>). Fungsi ini dapat tersimpan dalam sebuah variabel maupun properti objek dan langsung diimplementasikan sebagai argumen sebuah fungsi. Penulisannya cukup menuliskan paramter dan _body_-nya, jika tanpa parameter cukup dengan tanda kurung `()` atau `(_)` jika hanya ada satu maka tidak perlu tanda kurung, begitu juga dengan _body_-nya, jika hanya satu _statement_ maka tidak perlu tanda `{}`

Pada _regular function_ jika ingin membentuk objek maka ketika dipanggil wajib menyertakan _keyword_ `new`, sehingga objek `this` pada fungsi tersebut dapat mengacu pada objek fungsi tersebut, sedangkan dengn _arrow function_ tidak perlu menggunakannya dan object `this` akan langsung mengacu pada dimana fungsi tersebut dipanggil.

## _Class_

_Class_ pada JS sebelum ES6 menggunakan teknik _prototype_. Dengan begitu maka method dari masing-masing tidak berkali-kali dibuat oleh masing-masing _instance_ nantinya sehingga cukup diwariskan (_inheritance_) ke setiap _instance_ melalui _prototype_ alias `__proto__`. Setelah update ES6 penulisan _class_ berubah menjadi seperti bahasa yang lainnya.

### _Constructor_, _Instance_, _Property Accessor_

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

### _Inheritance_

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

### _Static Method_

_Static Method_ merupakan _method_ yang dapat dipanggil tanpa harus melakukan instansiasi terlebih dahulu.

## _Asynchronous_

### `setTimeOut`

Fungsi untuk memberikan waktu jeda sebelum dieksekusi oleh program sehingga berjalan secara _asynchronous_.

### _Callback Function_

Callback function merupakan fungsi yang menjadi argumen dan digunakan pada fungsi lainnya.

### _Promise_

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

### `async` & `await`

Kedua keyword tersebut digunakan agar promise dapat dijalankan pada sebuah fungsi agar fungsi tersebut berjalan secara async. Untuk menangani `onRejected` dapat menggunakan `try-catch`.
