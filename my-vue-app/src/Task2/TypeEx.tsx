// number
const age: number = 28;
console.log("number: ", age);

// string
const firstName: string = "지영";
console.log("string: ", firstName);

// boolean
const children: boolean = false;
console.log("boolean: ", children);

// any
const list: any = [10, "사과", false];
console.log("any: ", list);

// object
const person: { name: string; age: number } = { name: "지영", age: 28 };
console.log("object: ", person);

// array
const alphabet: Array<string> = ["a", "b", "c", "d", "e"];
const time: number[] = [1, 2, 3, 4, 5];
console.log("array1: ", alphabet);
console.log("array2: ", time);

// unknown
let userInput: unknown;
userInput = "string";
if (typeof userInput === "string") {
  console.log("unknown: ", userInput.toUpperCase());
}

// unions
let animal: "cat" | "dog" | "rabbit";
animal = "cat";
// animal = "snake";
console.log("unions: ", animal);

// conditional
type NumberOrString<T> = T extends number ? number : string;
const returnNum: NumberOrString<number> = 10;
const returnStr: NumberOrString<string> = "string";
console.log("conditional: ", returnNum);
console.log("conditional: ", returnStr);

// type alias
type Point = { x: number; y: number };
const point: Point = { x: 10, y: 20 };
console.log("type alias: ", point);

// interface
interface User {
  userId: string;
  password: string;
  name: string;
  age?: number;
}

const user1: User = {
  userId: "test@test.com",
  password: "testtest",
  name: "test",
  age: 30,
};
console.log("interface: ", user1);

// enum
enum Direction {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}
console.log("enum: ", Direction.up);

// as const
const food = ["사과", "딸기", "포도", "배"] as const;
console.log("as const: ", food);

// record
type user = {
  name: string;
  age: number;
};
const users: Record<string, user> = {
  user1: { name: "test1", age: 30 },
  user2: { name: "test2", age: 40 },
};
console.log("record: ", users);

// partial
const partialUser: Partial<User> = {};
partialUser.name = "test";

// omit
interface animalAttribute {
  species: string;
  size: number;
  sound: string;
}

type SoundlessAttribute = Omit<animalAttribute, "sound">;
const animalInfo: SoundlessAttribute = { species: "dog", size: 50 };
console.log("omit: ", animalInfo);

// pick
type AgeAndNameOnly = Pick<User, "age" | "name">;
const userInfo: AgeAndNameOnly = { name: "이이름름", age: 25 };
console.log("pick: ", userInfo);

// extract
type TypeWithNumbers = string | number | boolean;
type NumbersOnly = Extract<TypeWithNumbers, number>;
const tall: NumbersOnly = 170;
console.log("extract: ", tall);

// returntype
const returnType = () => {
  return { name: "test", age: 30 };
};
type ReturnTypeExample = ReturnType<typeof returnType>;
console.log("returntype: ", returnType());

// optional
type OptionalUser = Partial<User>;
const optionalUser: OptionalUser = {};
console.log("OptionalUser:", optionalUser);

// satisfies
type CheckSatisfaction = Satisfies<User, { name: string }>;
const user: User = {
  userId: "test@test.com",
  password: "testtest",
  name: "test",
};
const satisfiesCondition: CheckSatisfaction = user.name === "John";
console.log("Satisfies condition:", satisfiesCondition);

// generic
type arrayType<T> = T[];
const numberArray: arrayType<number> = [1, 2, 3, 4, 5];
console.log("generic: ", numberArray);
