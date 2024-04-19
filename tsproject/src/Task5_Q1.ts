interface Person {
    age: number;
    height: number;
}

const seongyong: Person = {
    age: 20,
    height: 190,
};

function log(obj: Person) {
    console.log(obj.height);
    return obj;
}

const a = log(seongyong);
console.log(a.age);
