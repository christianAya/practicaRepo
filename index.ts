function hMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    alert('Número de opciones seleccionadas: ' + hMany(document.getElementById('musicTypes')));
});

console.log(parseInt('101', 10));

var array2 = ['a', 'b', 'c'];

array2.forEach(element => console.log(element));

// function howMany(selectObject) {
//     let numberSelected = 0;
//     for (let i = 0; i < selectObject.options.length; i++) {
//         if (selectObject.options[i].selected) {
//             numberSelected++;
//         }
//     }
//     return numberSelected;
// }

// let btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//     alert('Número de opciones seleccionadas: ' + howMany(document.selectForm.musicTypes));
// });

// console.log(parseInt('101', 10))

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));