let

    food = [
    { name: " ORANGE ", price: 500, isFruit: true },
    { name: "burger", price: 100, isFruit: false },
    { name: "watermelon", price: 210, isFruit: false },
    { name: "toast", price: 350, isFruit: false },
    { name: "apple ", price: 140, isFruit: true },
    { name: " bAn ana", price: 380, isFruit: true }
]


//1

// let fruitsMore200 = [];
// food.forEach(item => {
//     if (item.price > 200) {
//         fruitsMore200.push(item.name.toLowerCase().replace(/\s/g, ''))
//     }
// })
// console.log(fruitsMore200);


// let fruitsMore200 = food.filter(item => {
//     return item.price > 200;
// }).map(item => item.name.toLowerCase().replace(/\s/g, ''));
// console.log(fruitsMore200);


// let fruitsMore200 = food.reduce((acc, item) => {
//     if (item.price > 200) {
//         acc.push(item.name.toLowerCase().replace(/\s/g, ''));
//     }
//     return acc;
// }, []);
// console.log(fruitsMore200);


// let fruitsMore200 = food.map(item => {
//     if (item.price > 200) {
//         return item.name.toLowerCase().replace(/\s/g, '');
//     }
// });
// console.log(fruitsMore200);


// №2

// let salary = [1000, 500, 1200, 230];

// let sortArr = [];


// salary.forEach(item => {
//     sortArr.push(item);
//     sortArr.sort((a, b) => a - b);
//     if (Array.isArray(sortArr)) {
//         console.log('Это массив');
//     } else {
//         console.log('Это не массив');
//     }
//     return sortArr;
// });
// console.log(sortArr.reverse());



// №3

// let serials = ["How i met your mom", "Friends", "Big bang theory"];

// let strArr = serials.join(' ');
// console.log(strArr);




// №4


// let value = food.reduce((acc, item) => {
//     return item.price + acc;
// }, 0);
// console.log(`Общая сумма всех продуктов:`, value);





// function value(arr) {
//     let result = [];
//     let sum = 0;
//     arr.forEach(item => result.push(item.price));
//     for (var i = 0; i < result.length; i++) {
//         sum += result[i];
//     }
//     console.log(`Общая сумма всех продуктов:`, sum);
// };
// value(food);