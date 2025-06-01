// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
// ---- завдання 1 -------
// function studentInfo(greeting) {
//   console.log(greeting);
//   console.log(
//     `Name: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}, Absences: ${this.absences}`,
//   );
// }

// const student1 = {
//   name: 'Ivan',
//   specialization: 'Computers',
//   rating: 3.8,
//   absences: 15,
// };

// const student2 = {
//   name: 'Olga',
//   specialization: 'Mathematics',
//   rating: 4.5,
//   absences: 1,
// };

// const student3 = {
//   name: 'Daniel',
//   specialization: 'Physics',
//   rating: 3.1,
//   absences: 20,
// };

// console.log('--- call ---');
// studentInfo.call(student1, 'Hello');

// console.log('--- apply ---');
// studentInfo.apply(student2, ['Hi']);

// console.log('--- bind ---');
// const boundStudent3 = studentInfo.bind(student3, 'Welcome')();
// ---- кінець завдання 1 -------

// ---- трохи моєї практики -------
// const student1 = {
//   name: 'Ivan',
//   specialization: 'Computers',
//   rating: 3.8,
//   absences: 15,

//   info: function () {
//     console.log(
//       `Name is ${this.name}\n`,
//       `Specialization is ${this.specialization}\n`,
//       `Ratting is ${this.rating}\n`,
//       `Absences is ${this.absences}`,
//     );
//   },
// };
// student1.info();
// const student2 = {
//   name: 'Olga',
//   specialization: 'Computers',
//   rating: 4.5,
//   absences: 1,
// };
// const student3 = {
//   name: 'Daniel',
//   specialization: 'Computers',
//   rating: 3.1,
//   absences: 20,
// };

// student1.info.bind(student2)();
// student1.info.bind(student3)();
//----------------

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const htmlBtnRef = document.getElementById('htmlBtn');
// const cssBtnRef = document.getElementById('cssBtn');
// const output = document.getElementById('output');

// htmlBtnRef.addEventListener('click', function () {
//   output.innerText =
//     'HTML (HyperText Markup Language) — це мова розмітки, яка використовується для створення структури веб-сторінок.';
// });
// cssBtnRef.addEventListener('click', function () {
//   output.innerText =
//     'CSS (Cascading Style Sheets) — це мова стилів, яка використовується для оформлення зовнішнього вигляду веб-сторінок.';
// });

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89, 3,4

function shopInfo() {
  // totalPrice = parseFloat((this.pricePerKg * this.quantity).toFixed(2));
  console.log(`Name: ${this.name}, total price: ${parseFloat((this.pricePerKg * this.quantity).toFixed(2))}`);
}
fruit1 = {
  name: 'banana',
  pricePerKg: 30,
  quantity: 4.5,
};
fruit2 = {
  name: 'cherry',
  pricePerKg: 58,
  quantity: 1.3,
};
fruit3 = {
  name: 'banana',
  pricePerKg: 89,
  quantity: 3.4,
};

shopInfo.call(fruit1);
shopInfo.call(fruit2);
shopInfo.call(fruit3);
