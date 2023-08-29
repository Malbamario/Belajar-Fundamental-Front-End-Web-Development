# ECMAScript 6

## Deklarasi Variabel

### Hoisting

_Hoisting_ merupakan kondisi dimana ketika variabel dideklarasikan dengan keyword `var` sehingga variabel padatingkat atas sebuah fungsi

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

Hoisting juga dapat mengakibatkan variabel dapat diinisialisasi sebelum dideklarasikan

### let & const

`let` & `const` merupakan keyword yang dapat mencegah terjadinya hoisting sehingga dapat meminimalisir terjadinya bug dalam penggunaan variabel.

### Inisialisasi dan ubah

Perbedaan dari keduanya adalah ketika terdapat sebuah variabel constant berupa array ataupun object. Variabel tersebut sudah pasti tidak dapat di-inisialisasi kembali tetapi tetap dapat diubah elemennya atau property-nya.