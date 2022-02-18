class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const yang = new Human("Yang", 35, "male");

// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// const person = {
//   name: "Soyeong",
//   gender: "female",
//   age: 27,
// } as Human;

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!!! `;
};

console.log(sayHi(yang));

export {};
