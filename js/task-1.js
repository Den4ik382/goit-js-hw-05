//У вас є масив об'єктів, який представляє розклад студентів.
//Кожен об'єкт містить поля name та subjects, де subjects є об'єктом з назвами предметів та їх оцінками.
//Потрібно знайти студента з ім'ям "John" та вивести його оцінки.
// const students = [
//   { name: "John", subjects: { math: 90, science: 85, history: 88 } },
//   { name: "Jane", subjects: { math: 92, science: 89, history: 91 } },
//   { name: "Bob", subjects: { math: 87, science: 84, history: 86 } },
// ];
// const searchInfo = students.find((student) => student.name === "John");
// console.log(searchInfo.subjects);

// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.
// const products = [
//   { name: "Milk", price: 20 },
//   { name: "Bread", price: 10 },
//   { name: "Eggs", price: 15 },
// ];
// const search = products
//   .filter((product) => product.price > 10)
//   .flatMap((element) => element.name);
// console.log(search);

// Напишіть функцію fruitsCount(), яка буде визначати загальну кількість
// бананів, яблук і інших фруктів у масиві.
// Функція приймає в якості параметра масив фруктів і повертає об'єкт:
// ключ - назва фрукта, значення - кількість цих фруктів у масиві.
// Результат роботи функції: Object { apples: 3, bananas: 1, oranges: 1, kiwi: 1 }

const fruits = [
  "apples",
  "bananas",
  "oranges",
  "apples",
  "kiwi",
  "apples",
  "Гоша",
];

const fruitsCount = (fruits) => {
  return fruits.reduce((acc, fruit) => {
    if (!acc[fruit]) {
      acc[fruit] = 1;
      return acc;
    }

    acc[fruit] += 1;
    return acc;
  }, {});
};
console.log(fruitsCount(fruits));
