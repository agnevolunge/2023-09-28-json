// const obj = {
//     name: 'John',
//     age: 28,
//     nextAge: 28 + 1,
//     children: ['Child 1', 'Child 2'],
//     address: {
//         street: 'Vilniaus st.',
//         city: 'Vilnius',
//         country: 'Lithuania',
//     },
//     married: true,
//     getAddress (){
//         return `Address is ${this.address.street} ${this.address.city}, ${this.address.country}.`
//     }, 
//     test1: undefined,
//     test2: null,
// }

// console.log(obj)
// console.log(obj['age'])
// console.log(obj.name)
// console.log(obj.children[0])
// console.log(obj.address.city)
// console.log(obj.getAddress())


// //Iprastas objektas
// console.log(obj)

// //Objektas paverciamas i JSON objekta
// const json = JSON.stringify(obj)
// console.log(json)

// //JSON to obj
// const convertedJson = JSON.parse(json)
// console.log(convertedJson)

// //nei funkciju, nei undefinied json nepriima.

// //json objektuose visur turi buti DVIGUBOS KABUTES - property pavadinimuose

// //paskutiniam property json objektuose nededamas kablelis

// // fetch("object.json")
// // .then((response) => {
// //     console.log(response.json());
// // })
// // then((data) => {
// // console.log(data);
// // });

// fetch("object.json")
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
// });


