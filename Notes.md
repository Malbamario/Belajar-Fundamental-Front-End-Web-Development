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
